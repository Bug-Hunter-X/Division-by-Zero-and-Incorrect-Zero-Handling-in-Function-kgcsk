# JavaScript Bug: Division by Zero and Incorrect Zero Handling

This repository demonstrates a common JavaScript bug related to division by zero and the incorrect handling of zero values in a mathematical function.

## The Bug

The `foo` function is intended to divide two numbers (`a` and `b`). However, it contains two flaws:

1. **Incorrect Zero Handling:** The `if` condition checks if *both* `a` and `b` are zero.  If only one is zero, it still proceeds to division causing an error.
2. **Potential Division by Zero:** If `b` is zero, the code will throw a `Division by Zero` error.

## The Solution

The improved function includes explicit checks for each parameter and throws appropriate errors.