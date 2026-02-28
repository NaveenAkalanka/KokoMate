"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { calculateInstallments } from "../lib/calculator";
import Image from "next/image";

export default function Calculator() {
    const [storePrice, setStorePrice] = useState<string>("");
    const [cashDownPayment, setCashDownPayment] = useState<string>("");
    const [merchantRate, setMerchantRate] = useState<string>("8");
    const [customRate, setCustomRate] = useState<string>("");
    const [months, setMonths] = useState<number>(3);

    const [result, setResult] = useState({
        payToday: 0,
        principal: 0,
        monthlyInstallment: 0,
        totalSurcharge: 0,
        totalPayable: 0,
    });

    useEffect(() => {
        const price = parseFloat(storePrice) || 0;
        const down = parseFloat(cashDownPayment) || 0;

        let rate = 0;
        if (merchantRate === "custom") {
            rate = parseFloat(customRate) || 0;
        } else {
            rate = parseFloat(merchantRate) || 0;
        }

        setResult(calculateInstallments({
            storePrice: price,
            cashDownPayment: down,
            merchantRatePercentage: rate,
            months,
        }));
    }, [storePrice, cashDownPayment, merchantRate, customRate, months]);

    const activeRateStr = merchantRate === "custom" ? `${customRate || 0}%` : `${merchantRate}%`;

    return (
        <div className="w-full flex-1 max-w-md mx-auto flex flex-col my-auto gap-2 pb-2 pt-2 min-h-min">
            {/* Top: Input Section */}
            <Card className="border-border shadow-sm flex-none">
                <CardHeader className="pb-2 pt-3 flex flex-row items-center justify-between border-b mx-4 px-0 mb-3">
                    <div className="flex items-center gap-2">
                        <div className="bg-white rounded-lg shadow-sm border border-zinc-100 p-1.5 flex items-center justify-center">
                            <Image src="/logo_icon.svg" width={22} height={22} alt="KokoMate Icon" className="drop-shadow-sm" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <Image src="/logo_full.svg" width={110} height={20} alt="KokoMate Full Logo" className="ml-1" />
                            <p className="text-[9px] text-muted-foreground ml-1.5 mt-0.5">Calculate exact installments & merchant fees.</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 pb-6 px-5">
                    <div className="flex gap-4">
                        {/* Store Price */}
                        <div className="flex flex-col gap-2 flex-1">
                            <Label htmlFor="storePrice" className="text-xs font-medium">Store Price</Label>
                            <Input
                                id="storePrice"
                                type="text"
                                inputMode="decimal"
                                placeholder="15000"
                                className="h-10 text-sm px-3 bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 focus:ring-primary"
                                value={storePrice}
                                onChange={(e) => setStorePrice(e.target.value)}
                            />
                        </div>

                        {/* Cash Down */}
                        <div className="flex flex-col gap-2 flex-1">
                            <Label htmlFor="cashDown" className="text-xs font-medium">Cash Down</Label>
                            <Input
                                id="cashDown"
                                type="text"
                                inputMode="decimal"
                                placeholder="5000"
                                className="h-10 text-sm px-3 bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 focus:ring-primary"
                                value={cashDownPayment}
                                onChange={(e) => setCashDownPayment(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Merchant Rate */}
                    <div className="flex flex-col gap-2 pt-1">
                        <Label className="text-xs font-medium">Merchant Surcharge Rate</Label>
                        <ToggleGroup
                            type="single"
                            value={merchantRate}
                            onValueChange={(val) => {
                                if (val) setMerchantRate(val);
                            }}
                            className="justify-between gap-2"
                        >
                            {["8", "10", "12", "custom"].map((val) => (
                                <ToggleGroupItem
                                    key={val}
                                    value={val}
                                    className="flex-1 h-10 text-xs data-[state=on]:bg-primary data-[state=on]:text-primary-foreground border"
                                >
                                    {val === "custom" ? "Custom" : `${val}%`}
                                </ToggleGroupItem>
                            ))}
                        </ToggleGroup>

                        {merchantRate === "custom" && (
                            <Input
                                type="text"
                                inputMode="decimal"
                                placeholder="Enter custom %"
                                className="h-10 mt-2 text-xs px-3 bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 focus:ring-primary"
                                value={customRate}
                                onChange={(e) => setCustomRate(e.target.value)}
                            />
                        )}
                    </div>

                    {/* Installment Split */}
                    <div className="flex items-center justify-between pt-3 border-t mt-3">
                        <Label htmlFor="months-switch" className="text-xs font-medium">Installment Split</Label>
                        <div className="flex items-center gap-3">
                            <span className={`text-sm ${months === 3 ? "font-bold text-foreground" : "text-muted-foreground"}`}>3 Months</span>
                            <Switch
                                id="months-switch"
                                checked={months === 6}
                                onCheckedChange={(checked) => setMonths(checked ? 6 : 3)}
                                className="data-[state=checked]:bg-primary"
                            />
                            <span className={`text-sm ${months === 6 ? "font-bold text-foreground" : "text-muted-foreground"}`}>6 Months</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Bottom Section */}
            <div className="flex-none flex flex-col">
                {/* Results Section */}
                <Card className="bg-foreground text-card shadow-xl overflow-hidden border-none relative flex-none">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full -mr-10 -mt-10 blur-xl pointer-events-none" />
                    <CardContent className="flex flex-col gap-4 pt-6 pb-6 px-6">
                        <div className="flex justify-between items-end border-b border-zinc-800/60 pb-3">
                            <div>
                                <p className="text-zinc-100 font-medium text-sm">First Installment</p>
                                <p className="text-zinc-400 text-[10px]">Scheduled monthly payment</p>
                            </div>
                            <div className="text-3xl font-bold tracking-tight text-white font-sans flex items-baseline gap-1">
                                <span className="text-lg text-primary font-semibold mr-0.5">Rs.</span>
                                {result.monthlyInstallment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </div>
                        </div>

                        <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 flex justify-between items-center">
                            <div>
                                <span className="text-zinc-100 font-medium text-xs block mb-0.5">Total Due Today</span>
                                <span className="text-[10px] text-primary/70 block leading-tight">First inst. + Down payment</span>
                            </div>
                            <span className="font-bold text-primary text-sm">
                                Rs. {result.payToday.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-y-2 gap-x-2 text-[10.5px] pt-1">
                            <div>
                                <p className="text-zinc-400 mb-1">Amount to Finance</p>
                                <p className="font-semibold text-zinc-100">
                                    Rs. {result.principal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </p>
                            </div>
                            <div>
                                <p className="text-zinc-400 mb-1">Monthly Installment ({months}x)</p>
                                <p className="font-semibold text-zinc-100">
                                    Rs. {result.monthlyInstallment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </p>
                            </div>
                            <div className="col-span-2 flex justify-between mt-1 pt-2 border-t border-zinc-800/60">
                                <p className="text-zinc-400">Total Surcharge ({activeRateStr})</p>
                                <p className="font-semibold text-zinc-100 pr-2">Rs. {result.totalSurcharge.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            </div>
                            <div className="col-span-2 bg-zinc-800/50 px-3 py-2 rounded-lg flex justify-between items-center mt-1.5">
                                <span className="text-zinc-300 font-medium text-xs">Total Payable</span>
                                <span className="font-bold text-primary text-xs">Rs. {result.totalPayable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
