const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const stack = [];
const len = input.shift();
const result = [];
for (let i = 0; i < len; i++) {
  switch (input[i]) {
    case "top":
      result.push(stack[stack.length - 1] || -1);
      break;
    case "size":
      result.push(stack.length);
      break;
    case "pop":
      result.push(stack.pop() || -1);
      break;
    case "empty":
      result.push(stack[0] ? 0 : 1);
      break;
    default:
      stack.push(input[i].split(" ")[1]);
      break;
  }
}

console.log(result.join("\n"));
