let count = 0;

function increase() {
  count++;
  console.log("Count:", count);
}

function multiply() {
  count *= 2;
  console.log("Count:", count);
}
function divide() {
  count /= 2;
  console.log("Count:", count);
}

function decrease() {
  count--;
  console.log("Count:", count);
}

function reset() {
  count = 0;
  console.log("Count reset:", count);
}