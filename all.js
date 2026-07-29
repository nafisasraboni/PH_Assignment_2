//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {
    if(typeof teamAGoals!=='number' || typeof teamBGoals!=='number'){
        return "Invalid"; 
    }else if(teamAGoals === teamBGoals){
        return "Draw";
    }else if(teamAGoals > teamBGoals){
        return "Team A Won";
    }else{
        return "Team B Won";
    }
}

//Problem-02: Elevator Weight Safety Checker
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

//Problem-03: AI Token Cost Calculator
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

//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
    if (!Array.isArray(restaurants) || restaurants.length === 0) {
        return "Invalid";
    }
        let bestRating = restaurants[0];
        for (let i = 0; i < restaurants.length; i++) {
            if(restaurants[i].rating>bestRating.rating){
                bestRating=restaurants[i];
            }        
    }
    return bestRating.name.toUpperCase();
}

//Problem-05: Debugging Challenge - API Response Time Monitor
/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
function averageResponseTime(times) {
  if (!Array.isArray(times) || times.length===0) {
        return "Invalid";
   }
 let total = 0;
    for (let i = 0; i < times.length; i++) {
        if(typeof times[i]!=="number"){
            return "Invalid"
        }else{
            total = total + times[i];
        } 
    }
   
  return total / times.length;
}

