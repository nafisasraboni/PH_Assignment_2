function isElevatorSafe(weights) {
    if (!Array.isArray(weights)) {
        return "Invalid";
    } else {
        let sumWeights = 0;
        for (let w of weights) {
            sumWeights += w;
        }
        if (sumWeights <= 400) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(isElevatorSafe([60, 75, 50]))