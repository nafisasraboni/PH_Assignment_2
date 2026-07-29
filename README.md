# JavaScript Problem Solving Assignment 2

## 📌 Overview

This repository contains solutions for **JavaScript Problem Solving Assignment 2**. The assignment focuses on practicing core JavaScript concepts such as:

* Functions
* Conditional Statements
* Loops
* Arrays
* Objects
* Input Validation
* Basic Debugging
* Problem Solving

Each problem is solved using a separate function following the required function names and assignment rules.

---

## 📂 Problems

### 1. Match Winner

**Function:** `matchWinner(teamAGoals, teamBGoals)`

Determines the result of a football match based on the goals scored by Team A and Team B.

**Features**

* Returns `"Team A Won"`
* Returns `"Team B Won"`
* Returns `"Draw"`
* Returns `"Invalid"` for non-numeric input

---

### 2. Elevator Weight Safety Checker

**Function:** `isElevatorSafe(weights)`

Calculates the total weight of passengers inside an elevator and checks whether it is within the safe weight limit.

**Features**

* Accepts an array of passenger weights
* Returns `true` if total weight is **400 kg or less**
* Returns `false` if total weight exceeds **400 kg**
* Returns `"Invalid"` if the input is not an array

---

### 3. AI Token Cost Calculator

**Function:** `calculateAiCost(tokensUsed)`

Calculates the daily AI token usage cost.

**Billing Rules**

* First **500 tokens** are free
* Every additional **100 tokens** costs **5 Taka**

**Features**

* Calculates the total bill
* Returns `0` if usage is within the free limit
* Returns `"Invalid"` for negative or non-numeric input

---

### 4. Top Rated Restaurant Finder

**Function:** `topRatedRestaurant(restaurants)`

Finds the highest-rated restaurant from an array of restaurant objects.

**Features**

* Returns the restaurant name in uppercase
* Returns `"Invalid"` if the input is not an array or the array is empty

---

### 5. API Response Time Monitor (Debugging Challenge)

**Function:** `averageResponseTime(times)`

Calculates the average API response time after fixing the provided buggy implementation.

**Features**

* Computes the average response time
* Returns `"Invalid"` if:

  * Input is not an array
  * Array is empty
  * Array contains non-numeric values

---

## 🛠️ Technologies Used

* JavaScript 

---

## 📚 Concepts Practiced

* Function Declaration
* Conditional Logic (`if...else`)
* Loops (`for`, `for...of`)
* Arrays
* Objects
* Input Validation
* `typeof`
* `Array.isArray()`
* `Math.floor()`
* String Methods (`toUpperCase()`)
* Debugging and Logical Thinking

---

## 🚀 How to Run

1. Clone the repository.
2. Open the JavaScript file in your preferred code editor.
3. Run the file using Node.js or your browser console.

Example:

```javascript
console.log(matchWinner(2, 1));
console.log(isElevatorSafe([60, 75, 50]));
console.log(calculateAiCost(650));
console.log(topRatedRestaurant([
  { name: "Chillox", rating: 4.5 },
  { name: "Sultan's Dine", rating: 4.8 }
]));
console.log(averageResponseTime([120, 200, 150, 130]));
```

---

## ✅ Assignment Status

* ✔ Problem 1 Completed
* ✔ Problem 2 Completed
* ✔ Problem 3 Completed
* ✔ Problem 4 Completed
* ✔ Problem 5 Completed

---

## 👩‍💻 Author

**Nafisa Tabassum Sraboni**

Full Stack Developer | CSE Student | JavaScript Learner

