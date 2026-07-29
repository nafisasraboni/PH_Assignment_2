function calculateAiCost(tokensUsed) {
    let totalBill = 0;

    if (typeof tokensUsed !== "number" || tokensUsed<0) {
        return "Invalid";
    } else if (tokensUsed > 500) {
        let rate = 5;
        let totaltk = tokensUsed - 500;
        let remainingToken = Math.floor(totaltk/100)
        totalBill = remainingToken*rate;
    }else{
        totalBill = 0;
    }
    return totalBill;
}
console.log(calculateAiCost(300))