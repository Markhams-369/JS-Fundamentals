// Get the first argument
const arg = process.argv[2];
const num = parseInt(arg);

// Check if the argument is a valid integer
if (isNaN(num)) {
  console.log("Missing number of occurrences");
} else {
  let output = "";
  for (let i = 0; i < num; i++) {
    output += "C is fun";
  }
  console.log(output.trim());
}
