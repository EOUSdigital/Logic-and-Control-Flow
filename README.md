# Module 5: Logic and Control Flow  
## Lesson 01.01: Introduction

---

## 🧠 Step 1: Explore the Topic

### What is Logic in JavaScript?
Logic allows a program to make decisions based on conditions. These are expressed using:
- Boolean values (`true`/`false`)
- Comparison operators (`===`, `!==`, `>`, `<`)
- Logical operators (`&&`, `||`, `!`)

### What is Control Flow?
Control flow determines the order in which code runs. JavaScript executes code top to bottom, but logic structures like:
- `if/else`
- `switch`
- `for`, `while`, and `do...while` loops  
...allow conditional branching and repetition.

### Why It Matters
Logic and control flow make code dynamic, responsive, and adaptable. They are foundational for features like:
- Form validation
- User input handling
- Loops through data
- Game logic and state control

---

## 🌍 Step 2: Real-World Examples

### 🛒 Online Shopping Checkout
If the cart total is over $50, free shipping is applied. Otherwise, a $5 fee is charged.
```javascript
if (cartTotal > 50) {
  shippingCost = 0;
} else {
  shippingCost = 5;
}
```

### 🚦 Traffic Light System
Respond to traffic light color using conditions.
```javascript
if (lightColor === 'green') {
  action = 'go';
} else if (lightColor === 'yellow') {
  action = 'slow down';
} else {
  action = 'stop';
}
```

### 📱 Phone Unlock
Grant access or show an error based on password match.
```javascript
if (enteredPassword === correctPassword) {
  unlockPhone();
} else {
  displayError();
}
```

---

## ✅ Step 3: Quiz Questions

### Multiple Choice

1. What does “control flow” refer to in JavaScript?  
   **B. The order in which code is executed**

2. Which of the following is a logical operator?  
   **C. &&**

3. Why are logic and control flow important in programming?  
   **C. They allow a program to make decisions and act accordingly**

4. What type of value do logical conditions evaluate to?  
   **C. Boolean**

5. What happens if an `if` condition is false and there is no `else`?  
   **B. The `if` block is skipped**

### True or False

6. Every line of code runs one after another, with no way to change the sequence.  
   **False**

7. A program with no logic or control flow behaves the same every time.  
   **True**

8. Control flow only applies to loops.  
   **False**

9. `if`, `else`, and `switch` are all control flow tools.  
   **True**

10. JavaScript logic only works with numbers.  
   **False**
