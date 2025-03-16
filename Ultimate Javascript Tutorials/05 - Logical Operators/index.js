alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false

// if the first operand is truthy,
// AND returns the second operand:
alert(1 && 0); // 0
alert(1 && 5); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert(null && 5); // null
alert(0 && "no matter what"); // 0

let x = 1;
if (x > 0) alert("Greater than zero!");
