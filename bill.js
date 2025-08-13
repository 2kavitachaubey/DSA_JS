let bill = 700;
let amount = 0;
if (bill > 400) {
  amount += (bill - 400) * 13;
  console.log(bill);
  bill -= (bill - 400);
}
if (bill > 200 && bill <= 400) {
  amount += (bill - 200) * 8;
  console.log(bill);
  bill -= (bill - 200);
}
if (bill > 100 && bill <= 200) {
  amount += (bill - 100) * 6;
  console.log(bill);
  bill -= (bill - 100);
}
if (bill > 0 && bill<=100) {
  amount += bill * 4;
  console.log(bill);
}
console.log(amount);
