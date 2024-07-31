let str = prompt("Enter a string of your choice");

let charCount = {};
let order = new Set();
let unique = new Set();
for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (char !== " ") {
    unique.add(str[i]);
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;

      order.add(char);
    }
  }
}
console.log("The string is: ", str);
console.log("The unique letters in string are ", unique.size);
console.log("Occurence of each distint letter ");
order.forEach((char) => {
  console.log(charCount[char]);
});
console.log("Occurence of each distint letter ");
order.forEach((char) => {
  console.log(`${char}: ${charCount[char]}`);
});
