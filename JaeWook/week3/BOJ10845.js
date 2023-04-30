const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const len = input.shift();
const queue = [];
const result = [];
for (let i = 0; i < len; i++) {
  switch (input[i]) {
    case "front":
      result.push(queue[0] || -1);
      break;
    case "back":
      result.push(queue[queue.length - 1] || -1);
      break;
    case "pop":
      result.push(queue[0] || -1);
      queue.shift();
      break;
    case "size":
      result.push(queue.length);
      break;
    case "empty":
      result.push(queue[0] ? 0 : 1);
      break;
    default:
      queue.push(input[i].split(" ")[1]);
      break;
  }
}
console.log(result.join("\n"));
