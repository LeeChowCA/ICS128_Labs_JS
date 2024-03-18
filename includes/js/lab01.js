alert("Hello World!");

var guestName = prompt("Hello, [name]. Nice to meet you again.");

document.getElementById("hello").innerHTML = `Hello ${guestName}, How many rooms do you want to book?`


var amount = parseInt(prompt("what's the amount"));
var taxRate = parseFloat(prompt("what's the tax rate"));
var rooms = parseInt(prompt("what are the rooms"));

document.querySelector("#amount").innerHTML = "$" + amount;
// the reason why we use parseInt is because what we get from parseInt is a string, and parseInt and convert it into an int
document.querySelector("#taxRate").innerHTML = taxRate + "%";
document.querySelector("#rooms").innerHTML = rooms;
document.querySelector("#totalAmount").innerHTML = "$" + ((amount * (1 + taxRate / 100)) * rooms).toFixed(2);
