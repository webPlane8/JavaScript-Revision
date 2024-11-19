// let color = "green";
// if (color == "red") {
//   console.log("stop");
// }
// if (color == "yellow") {
//   console.log("Ready to go");
// }
// if (color == "green") {
//   console.log("don't stop");
// }
// let size = "L";

// if (size === "XL") {
//   console.log("Price is Rs: 250");
// } else if (size === "L") {
//   console.log("Price is Rs: 200");
// } else if (size === "M") {
//   console.log("Price is Rs: 100");
// } else if (size === "S") {
//   console.log("Price is Rs: 50");
// }
// Nested if else
// let marks = 32;
// if (marks >= 33) {
//   console.log("Pass");
//   if (marks >= 80) {
//     console.log("Grade is A+");
//   } else {
//     console.log("Grade is A");
//   }
// } else {
//   console.log("Better Luck for next time");
// }

// let str = "ali haider";
// if ((str[0] = "a" && str.length > 3)) {
//   console.log(`Good string`);
// } else {
//   console.log("Not good string");
// }
// let lang = ["c", "c++", "html", "javscript", "python", "java', 'c#", "sql"];
// console.log(lang.reverse().indexOf("javscript"));

// print all odds number from 1 to 15

// for (let i = 1; i <= 15; i = i + 2) {
//   console.log(i);
// }
// for (let i = 2; i <= 10; i = i + 2) {
//   console.log(i);
// }
// for (let i = 10; i >= 2; i = i - 2) {
//   console.log(i);
// }

// Nested loop

// let user = [
//   ["zohaib", 56],
//   ["uzair", 26],
//   ["Naseem", 69],
//   ["waseem", 43],
// ];

// for (let i = 0; i < user.length; i++) {
//   console.log(`marks of user # ${i + 1}`);
//   for (let j = 0; j <= user[i].length; j++) {
//     console.log(user[i][j]);
//   }
// }

// let users = [
//   ["zohaib", "waseem", "naseem"],
//   [63, 52, 59],
//   ["lahore", "Gujranwala", "Daska"],
// ];
// for (let list of users) {
//   // console.log(list);
//   for (let data of list) {
//     console.log(`${list} :, ${data}`);
//   }
// }
// let student = {
//   name: "zohaib",
//   age: 31,
//   marks: [69, 52],
// };

// Random integer

// let randomInteger = Math.floor(Math.random() * 100) + 1;
// console.log(randomInteger);
// let randomInteger5 = Math.floor(Math.random() * 5) + 1;
// console.log(randomInteger5);

// function getSum(n) {
//   let sum = 0;
//   for (i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// let arr = [5, 2, 3, 6, 7, 1, 4, 8, 10, 9];

// let n = 5;

// function arrayElement(arr, n) {
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] > n) {
//       console.log(arr[i]);
//     }
//   }
// }

// arrayElement(arr, n);

// let str = "abcdabcdefgggh";

// function uniqueCha(str) {
//   let ans = "";
//   for (let i = 0; i < str.length; i++) {
//     let currChar = str[i];
//     if (ans.indexOf(currChar) == -1) {
//       ans += currChar;
//     }
//   }
//   return ans;
// }
// uniqueCha(str);

// let squareFunc = (n) => {
//   return n ** n;
// };

// let id = setInterval(() => {
//   console.log("Hello World!");
// }, 2000);
// setTimeout(() => {
//   clearInterval(id);
//   console.log("clear time interval is invoked");
// }, 10000);

// let numberArr = [1, 2, 10];

// let arrayAverage = (arr) => {
//   let total = 0;
//   for (let number of arr) {
//     total += number;
//   }
//   return total / arr.length;
// };
// console.log(arrayAverage(numberArr));

const isEven = (n) => {
  if (n % 2 == 0) {
    console.log(`${n} is an even number`);
  } else {
    console.log(`${n} is not an even number`);
  }
};
