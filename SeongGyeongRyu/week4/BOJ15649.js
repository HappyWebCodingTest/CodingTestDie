// 3 1

function recursion(n) {
  if (n === 1) {
    console.log(1);
    return;
  }
  recursion(n - 1);
  console.log(n);
}

for (let i = 1; i <= n; i++) {}

recursion(3);
