function calculateTax(income: number): number {
    let x; //declared and never used warning.
    if (income < 50_000) return income * 1.2;

    return income * 1.3;
}
