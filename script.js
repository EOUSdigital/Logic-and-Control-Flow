//TODO 📗 Module 5. Logic and Control Flow - Lesson 01.01: Introduction


//TODO  📝 Step 1: Section Intro

//* Step 1: Explore the Topic
//  Logic and Control Flow are fundamental building blocks in programming. They allow a program to make decisions, repeat actions, and react to changing data and conditions—just like how people make choices or follow instructions in everyday life.

//? 🔹 What Is Logic in JavaScript?
//  Logic refers to decision-making in your code. It determines what code should run based on specific conditions.
//  • Used in: if, else, switch, ternary operators
//  • Built on: Boolean values (true or false), logical operators (&&, ||, !), and comparison operators (==, ===, >, <, etc.)

//? 🔹 What Is Control Flow?
//  Control flow is the order in which code is executed.
//  JavaScript executes code top to bottom, but:
//  • Conditional statements (e.g., if, else) can skip parts.
//  • Loops (e.g., for, while) can repeat parts.
//  • Functions and early returns can change the flow.

//? 🔹 Why It Matters
//  Without logic and control flow:
//  • Programs run the same way every time.
//  • There is no decision-making ability.
//  • We cannot respond to user input, handle data changes, or build interactive applications.

//? 🔹 Where It is Used
//  • Form validation (e.g., “Is this email valid?”)
//  • Feature toggles (e.g., dark mode on/off)
//  • Repeating actions (e.g., show items in a list)
//  • User authentication (“Is the password correct?”)
//  • Games, animations, error handling, data processing, etc.

//? 🔹 Limits
//  • Logic errors can break flow or lead to unintended behavior.
//  • Too many nested conditions reduce readability.
//  • Poorly controlled loops can cause infinite execution.
//  • Must be used intentionally with clarity and purpose.


//TODO  📝 Step 2: Real-World Examples
//  To make logic and control flow more relatable, let’s look at how similar thinking happens in real life. JavaScript uses the same decision-making process we use every day—just expressed in code.

//* 🛒 Online Shopping Checkout
//  Scenario: We are checking out at an online store.
//  • Logic:
//      → If your cart total is over $50, you get free shipping.
//      → If not, you pay $5 for shipping.
//  • Control Flow:
//      → JavaScript checks your total.
//      → Then decides which message and fee to show you.

//? Code Analogy:

if (cartTotal >= 50) {
    shippingCost = 0;
} else {
    shippingCost = 5;
}

//* 🚦 Traffic Light System
//  Scenario: A traffic light changes color based on a timer.
//  • Logic:
//      → If it is red, cars must stop.
//      → If it is green, cars can go.
//      → If it is yellow, cars must slow down.
//  • Control Flow:
//      → The program checks the color and decides what instruction to give.

//? Code Analogy:

if (lightColor === 'green') {
    action = 'go';
} else if (lightColor === 'yellow') {
    action = 'slow down';
} else {
    action = 'stop';
}

//* 📱 Phone Unlock
//  Scenario: Unlocking your phone.
//  • Logic:
//      → If the entered password is correct → grant access.
//      → If not → show error.
//  • Control Flow:
//      → Based on your input, the phone either proceeds to the home screen or displays an error message.

//? Code Analogy:

if (enteredPassword === correctPassword) {
    unlockPhone();
} else {
    displayError();
}

//* 🎯 Fitness App Step Goal
//  Scenario: A fitness tracker updates based on user steps.
//  • Logic:
//      → If you reach 10,000 steps, display a success badge.
//      → Otherwise, show how many steps are left.
//  • Control Flow:
//      → The app continuously checks your step count and adjusts the display.

//? Code Analogy:

if (steps >= 10000) {
    showBadge();
} else {
    showRemainingSteps(10000 - steps);
}

//! ✨ Summary
//  These examples show how logic and control flow are used:
//  • To evaluate conditions
//  • To decide outcomes
//  • To respond dynamically to input or data
//  Just like our make decisions based on rules or information in real life, so does your code—step by step.


//TODO  📝 Step 3: Quiz Questions

//* ✅ Multiple Choice (Choose the best answer):

//? 1. What does “control flow” refer to in JavaScript?
//  A. The speed at which code runs
//  B. The order in which code is executed
//  C. The number of times a function is called
//  D. The appearance of user interface elements

//! Answer: B

//? 2. Which of the following is an example of a logical operator in JavaScript?
//  A. ++
//  B. =
//  C. &&
//  D. function

//! Answer: C

//? 3. Why are logic and control flow important in a program?
//  A. They prevent syntax errors
//  B. They reduce the number of variables used
//  C. They allow a program to make decisions and act accordingly
//  D. They make code run faster

//! Answer: C

//? 4. What type of value do logical conditions evaluate to?
//  A. String
//  B. Number
//  C. Boolean
//  D. Undefined

//! Answer: C

//? 5. What happens if a condition in an if statement is false and there’s no else?
//  A. JavaScript throws an error
//  B. The if block is skipped and the program continues
//  C. The page refreshes
//  D. The condition is re-evaluated

//! Answer: B

//* 🔄 True or False:

//? 6. Every line of JavaScript runs one after another, with no way to change the sequence.
//! Answer: False

//? 7. A program that uses no logic or control flow will behave the same way every time.
//! Answer: True

//? 8. Control flow only applies to loops, not conditionals.
//! Answer: False

//? 9. if, else, and switch are all control flow structures.
//! Answer: True

//? 10. JavaScript logic always evaluates conditions using numbers only.
//! Answer: False





























