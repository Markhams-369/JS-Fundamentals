// Access the first argument
const arg = process.argv[2];

// Convert to integer using parseInt
const num = parseInt(arg);

// Check if conversion is valid
if (!isNaN(num)) {
  console.log("My number: " + num);
} else {
  console.log("Not a number");
}
