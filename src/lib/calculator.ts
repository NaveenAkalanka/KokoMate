export interface CalculatorParams {
    storePrice: number;
    cashDownPayment: number;
    merchantRatePercentage: number;
    months: number;
}

export interface CalculatorResult {
    payToday: number;
    principal: number;
    monthlyInstallment: number;
    totalSurcharge: number;
    totalPayable: number;
}

/**
 * Calculates the Koko installment breakdown.
 * Formula for Pay Today:
 * Cash Down + ((Price - Cash Down) * (1 + Rate/100) / Months)
 */
export function calculateInstallments(params: CalculatorParams): CalculatorResult {
    const { storePrice, cashDownPayment, merchantRatePercentage, months } = params;

    if (storePrice <= 0 || cashDownPayment < 0 || cashDownPayment > storePrice || months <= 0) {
        return {
            payToday: 0,
            principal: 0,
            monthlyInstallment: 0,
            totalSurcharge: 0,
            totalPayable: 0,
        };
    }

    const principal = storePrice - cashDownPayment;
    const surchargeRate = merchantRatePercentage / 100;
    const amountToFinance = principal * (1 + surchargeRate);

    const totalSurcharge = principal * surchargeRate;
    const monthlyInstallment = amountToFinance / months;

    const payToday = cashDownPayment + monthlyInstallment;
    const totalPayable = cashDownPayment + amountToFinance;

    return {
        payToday,
        principal,
        monthlyInstallment,
        totalSurcharge,
        totalPayable,
    };
}
