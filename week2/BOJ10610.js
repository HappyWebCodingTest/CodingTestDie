let input = require("fs").readFileSync("input.txt").toString().trim();

if (!input.split("").includes("0")) {
  console.log(-1);
} else {
  let arr = input.split("").map((v) => +v);
  let sumArr = arr.reduce((acc, v) => acc + v);
  if (sumArr % 3 == 0) {
    arr.sort((a, b) => b - a);
    console.log(arr.join(""));
  } else {
    console.log(-1);
  }
}
