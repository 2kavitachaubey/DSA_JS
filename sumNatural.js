let num = "a";
let sum = 0;
if (isNaN(num)) {
  console.log("Not a number");
  return;
}
for (let i = 1; i <= 60; i++) {
  sum += i;
}
console.log(sum);