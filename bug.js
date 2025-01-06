function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect: should handle only one of them being zero
  }
  return a / b; // Potential division by zero if b is 0
}