// Create an array of strings
const languages = ["C is fun", "Python is cool", "JavaScript is amazing"];

// Use a loop to build the output string
let output = "";
for (let i = 0; i < languages.length; i++) {
  output += languages[i] + "\n";
}

// Print all lines with a single console.log
console.log(output.trim());
