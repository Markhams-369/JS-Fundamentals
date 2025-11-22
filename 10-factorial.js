// Define a recursive function to compute factorial
function factorial(n) {
  if (isNaN(n)) {
    return 1; // Factorial of NaN is defined as 1
  }
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Get the first argument and cast to integer
const arg = parseInt(process.argv[2]);

// Compute factorial and print result
console.log(factorial(arg));