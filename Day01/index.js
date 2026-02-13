// Print Number from 1 to N
// const num = parseInt(prompt("Enter a number to print"));

// function printNum(num) {
//   for (let i = 1; i <= num; i++) {
//     const all = document.querySelector("#all");
//     const oneNum = document.createElement("p");
//     oneNum.innerText = i;
//     all.append(oneNum);
//     // all.innerText += i;
//     console.log(all);
//     console.log(i);
//   }
// }

// // printNum(num);
// const btn = document.querySelector("button");
// btn.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     const input = document.querySelector("input");
//     const num = parseInt(input.value);
//     printNum(num);
//   }
// });

console.time();
const num = 100000000;
let sum = 0;

for (let i = 1; i <= num; i++) {
  sum += i;
}
console.log(sum);
console.timeEnd();
