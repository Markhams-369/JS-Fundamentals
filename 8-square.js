// Get the first argument
const arg = process.argv[2];
const size = parseInt(arg);

// Check if the argument is a valid integer
if (isNaN(size)) {
  console.log("Missing size");
} else {
  // Build the square using a loop
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      row += "X";
    }
    console.log(row);
  }
}
