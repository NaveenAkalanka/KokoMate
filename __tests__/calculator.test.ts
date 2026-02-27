import { describe, it, expect } from "vitest";
import { calculateInstallments } from "../src/lib/calculator";

describe("calculateInstallments", () => {
    it("should calculate correctly for 3 months with 10% rate", () => {
        // Price: 10000, Down: 2000
        // Amount to finance: 8000
        // Surcharge: 10% of 8000 = 800
        // Total Amount to Finance: 8800
        // Monthly Installment (3 months): 2933.33
        // Pay Today: 2000 + 2933.33 = 4933.33
        const result = calculateInstallments({
            storePrice: 10000,
            cashDownPayment: 2000,
            merchantRatePercentage: 10,
            months: 3,
        });

        expect(result.totalSurcharge).toBeCloseTo(800);
        expect(result.monthlyInstallment).toBeCloseTo(8800 / 3);
        expect(result.payToday).toBeCloseTo(2000 + 8800 / 3);
        expect(result.totalPayable).toBeCloseTo(10800);
    });

    it("should calculate correctly with zero down payment", () => {
        // Price: 6000, Down: 0, Rate 8%, 6 months
        const result = calculateInstallments({
            storePrice: 6000,
            cashDownPayment: 0,
            merchantRatePercentage: 8,
            months: 6,
        });

        // Surcharge = 8% of 6000 = 480
        // Total to finance = 6480
        // Monthly = 1080
        // Pay Today = 1080
        expect(result.totalSurcharge).toBeCloseTo(480);
        expect(result.monthlyInstallment).toBeCloseTo(1080);
        expect(result.payToday).toBeCloseTo(1080);
    });

    it("should return zeros for invalid inputs (negative price)", () => {
        const result = calculateInstallments({
            storePrice: -100,
            cashDownPayment: 20,
            merchantRatePercentage: 10,
            months: 3,
        });
        expect(result.payToday).toBe(0);
    });

    it("should return zeros if down payment exceeds store price", () => {
        const result = calculateInstallments({
            storePrice: 5000,
            cashDownPayment: 6000,
            merchantRatePercentage: 10,
            months: 3,
        });
        expect(result.payToday).toBe(0);
    });
});
