// Define the function with the required prototype
function add(a, b) {
  return a + b;
}

// Get the first and second arguments
const arg1 = parseInt(process.argv[2]);
const arg2 = parseInt(process.argv[3]);

// Perform the addition and print the result
console.log(add(arg1, arg2));
