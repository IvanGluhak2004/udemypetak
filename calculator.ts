
type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    exceptedReturnRate: number;
    durationInYears: number;

};

type calculationResult = InvestmentResults[] | string;

type InvestmentResults = {
    year: string
    totalContribution: number;
    totalAmount: number;
    totalIntrestEarned: number;
};

function calculateInvestment(data: InvestmentData): calculationResult {
    const {initialAmount, annualContribution, exceptedReturnRate, durationInYears}=data;
    if (initialAmount <0 || annualContribution <0 || exceptedReturnRate <0 || durationInYears <=0){
        return "Invalid input values. Please ensure all values are non-negative and duration is greater than zero.";
    }
    let totalAmount= initialAmount;
    let totalContribution = 0;
    let totalIntrestEarned= 0;
    const annualResults: InvestmentResults[] = [];

    for (let i=0; i< durationInYears; i++){
        totalAmount = totalAmount * (1 + exceptedReturnRate / 100);
        totalIntrestEarned = totalAmount - initialAmount - totalContribution;
        totalContribution += annualContribution;
        totalAmount += annualContribution;

        annualResults.push({
            year: `Year ${i + 1}`,
            totalContribution: parseFloat(totalContribution.toFixed(2)),
            totalAmount: parseFloat(totalAmount.toFixed(2)),
            totalIntrestEarned: parseFloat(totalIntrestEarned.toFixed(2))
        });
    }
    return annualResults;
}

function printResults(results: calculationResult) {
    if (typeof results === "string") {
        console.log(results);
        return;
    }
    for (const result of results) {
        console.log(`Year: ${result.year}`);
        console.log(`Total Contribution: $${result.totalContribution}`);
        console.log(`Total Amount: $${result.totalAmount}`);
        console.log(`Total Interest Earned: $${result.totalIntrestEarned}`);
        console.log('---------------------------');
    }
    
}

const results= calculateInvestment({
    initialAmount: 1000,
    annualContribution: 500,
    exceptedReturnRate: 5,
    durationInYears: 10
});
printResults(results);