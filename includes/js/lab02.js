var firstNum = parseInt(prompt("please input the first number"));
var secNum = parseInt(prompt("please input the second number"));
var thirdNum = parseInt(prompt("please input the third number"));
let mean = parseInt((firstNum + secNum + thirdNum) / 3);
let meanOrMiddle = document.querySelector("#meanOrMiddle");



document.querySelector("#mean").style.display = "inline";

document.querySelector("#prices").innerHTML = `3 prices are $${firstNum}, $${secNum}, $${thirdNum}`

meanOrMiddle.addEventListener("click",meanOrMiddleF)

function meanOrMiddleF() {
    document.querySelector("#middle").innerHTML = `Middle: $${secNum}`
    document.querySelector("#meanNumber").innerHTML = `Mean: $${mean}`
}

if (((firstNum + secNum + thirdNum) / 3) % 2 === 0)
    document.querySelector("#evenOrNot").style.color = "red";
if (mean % 2 === 0)
    document.querySelector("#middle").style.color = "red";

document.querySelector("#showPercentage").style.display = "inline";
document.querySelector("#booked").style.display = "inline";
document.querySelector("#percentButton").style.display = "block";

let percentage = document.querySelector("#percentage");
percentage.addEventListener("input", colorBaseOnPercent);

function colorBaseOnPercent() {
    if (90 <= percentage.value && percentage.value <= 100) {
        document.querySelector("#showPercentage").innerHTML = `${percentage.value}%`;
        document.querySelector("#showPercentage").style.color = "green";
        document.querySelector("#booked").innerText = "booked"
    } else if (80 <= percentage.value && percentage.value <= 90) {
        document.querySelector("#showPercentage").innerHTML = `${percentage.value}%`;
        document.querySelector("#showPercentage").style.color = "blue";
        document.querySelector("#booked").innerText = "booked"
    } else if (65 <= percentage.value && percentage.value <= 79) {
        document.querySelector("#showPercentage").innerHTML = `${percentage.value}%`;
        document.querySelector("#showPercentage").style.color = "yello";
        document.querySelector("#booked").innerText = "booked"
    } else if (51 <= percentage.value && percentage.value <= 64) {
        document.querySelector("#showPercentage").innerHTML = `${percentage.value}%`;
        document.querySelector("#showPercentage").style.color = "black";
        document.querySelector("#booked").innerText = "booked"
    } else if (0 <= percentage.value && percentage.value <= 50) {
        document.querySelector("#showPercentage").innerHTML = `${percentage.value}%`;
        document.querySelector("#showPercentage").style.color = "red";
        document.querySelector("#booked").innerText = "booked"
    } else
        {document.querySelector("#booked").innerText = `Incorrect - not between 0-100`;
        document.querySelector("#showPercentage").innerHTML = ``;}

}

let loopValue = document.querySelector("#inputValue");
let buttonForIteration = document.querySelector("#iterationButton");
let display = document.querySelector("#display");

buttonForIteration.addEventListener("click", iteration)

function iteration() {
    for (let i = 0; i < 5; i++) {
        const line = document.createElement("p");
        line.style.margin = "1px";
        if (i === 0) {
            line.innerHTML = loopValue.value;
            display.appendChild(line);
        } else if (i === 1) {
            line.innerText = `${loopValue.value}${loopValue.value}`
            display.appendChild(line);
        } else if (i === 2) {
            line.innerText = `${loopValue.value}${loopValue.value}${loopValue.value}`
            display.appendChild(line);
        }
        else if (i === 3) {
            line.innerText = `${loopValue.value}${loopValue.value}${loopValue.value}${loopValue.value}`
            display.appendChild(line);
        }
        else if (i === 4) {
            line.innerText = `${loopValue.value}${loopValue.value}${loopValue.value}${loopValue.value}${loopValue.value}`
            display.appendChild(line);
        }
    }

    for (let i = 4; i > 0; i--) {
        const line = document.createElement("p");
        line.style.margin = "1px";
        if (i === 4) {
            line.innerHTML = `${loopValue.value}${loopValue.value}${loopValue.value}${loopValue.value}`
            display.appendChild(line);
        } else if (i === 3) {
            line.innerText = `${loopValue.value}${loopValue.value}${loopValue.value}`
            display.appendChild(line);
        } else if (i === 2) {
            line.innerText = `${loopValue.value}${loopValue.value}`
            display.appendChild(line);
        }
        else if (i === 1) {
            line.innerText = `${loopValue.value}`
            display.appendChild(line);
        }
    }
}


let AlexaSpeed = document.querySelector("#AlexaSpeed");
let SiriSpeed = document.querySelector("#SiriSpeed");
let whoIsFaster = document.querySelector("#whoIsFaster");

whoIsFaster.addEventListener("click", compareSpeed);

function compareSpeed() {
    document.querySelector("#AlexaDisplay").innerHTML = `${AlexaSpeed.value}`;
    document.querySelector("#SiriDisplay").innerHTML = `${SiriSpeed.value}`;

    if (AlexaSpeed.value > SiriSpeed.value) {
        document.querySelector("#winner").innerHTML = "Alexa";
        document.querySelector("#winner").style.color = "red";
        document.querySelector("#AlexaDisplay").style.color = "red";
        document.querySelector("#SiriDisplay").style.color = "blue";
    } else {
        document.querySelector("#winner").innerHTML = "Siri";
        document.querySelector("#winner").style.color = "red";
        document.querySelector("#AlexaDisplay").style.color = "blue";
        document.querySelector("#SiriDisplay").style.color = "red";
    }
}












// document.querySelector("#amount").innerHTML = "$" + amount;
// // the reason why we use parseInt is because what we get from parseInt is a string, and parseInt and convert it into an int
// document.querySelector("#taxRate").innerHTML = taxRate + "%";
// document.querySelector("#rooms").innerHTML = rooms;
// document.querySelector("#totalAmount").innerHTML = "$" + ((amount * (1 + taxRate / 100)) * rooms).toFixed(2);
