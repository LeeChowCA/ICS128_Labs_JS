let firstInput = document.getElementById("firstInput");
let secInput = document.getElementById("secInput");
let spaceAndLetter = document.getElementById("spaceAndLetter");




spaceAndLetter.addEventListener("click", () => {
    let count = 0;
    let inputValue1 = firstInput.value;
    let space = " ";

    for (let i = 0; i < inputValue1.length; i++) {
        if (inputValue1.charAt(i) === space) {
            count++;
        }
    }
    document.getElementById("spaceCounter").innerHTML = count;
    document.getElementById("spaceCounter").style.color = "red";
});

spaceAndLetter.addEventListener("click", () => {
    let count = 0;
    let targetValue = 'L';
    let inputValue2 = secInput.value;

    for (let i = 0; i < inputValue2.length; i++) {
        console.log(count);
        if (inputValue2.charAt(i) === targetValue) {
            count++;
        }
        document.getElementById("letterCounter").innerHTML = count;
        document.getElementById("letterCounter").style.color = "red";
    }
})

let date = document.getElementById("date");
let dateDisplay = document.getElementById("dateDisplay");
let daysDisplay = document.getElementById("daysDisplay");
let workDayDisplay = document.getElementById("workDayDisplay");
let minimumWageDisplay = document.getElementById("minimumWageDisplay");
let salaryDisplay = document.getElementById("salaryDisplay");
let timeButton = document.getElementById("timeButton");

timeButton.addEventListener("click", () => {
    var msDay = 24 * 60 * 60 * 1000;
    let userDate = new Date(date.value);
    let localTime = new Date(userDate.getTime() + msDay);

    let year = localTime.getFullYear()
    let month = localTime.getMonth() + 1;
    let day = localTime.getDate() + 1;
    let workDay;
    console.log(month + "month")
    console.log(year + "year")

    dateDisplay.innerHTML = `${date.value}`;
    dateDisplay.style.color = "red";

    let daysInUserMonth = daysInMonth(year, month);
    daysDisplay.innerHTML = `${daysInUserMonth}`;
    daysDisplay.style.color = "blue";

    workDay = workDayCalculate(userDate, daysInUserMonth);
    workDayDisplay.innerHTML = workDay;
    workDayDisplay.style.color = "grey";

    minimumWageDisplay.innerHTML = `$${15.65}`;
    minimumWageDisplay.style.color = "green";

    let salary = 8 * 15.65 * workDay;
    salaryDisplay.innerHTML = `${salary.toFixed(2)}`;
    salaryDisplay.style.color = "orange";
});

function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}


function workDayCalculate(userDate, daysInUserMonth) {
    console.log(daysInUserMonth + "days in user");
    var msDay = 24 * 60 * 60 * 1000;
    let actualTime = new Date(userDate.getTime() + msDay);
    let year = userDate.getFullYear();
    let month = userDate.getMonth() + 1;
    let count = 0;
    let workDay = 0;

    for (let i = 1; i <= daysInUserMonth; i++) {
        let checkDate = new Date(year, month - 1, i)
        console.log(checkDate + "checkdate")
        if (checkDate.getDay() === 6 || checkDate.getDay() === 0) {
            count++;
        }
    }
    workDay = daysInUserMonth - count;
    return workDay;
}


let userInputNumber = document.getElementById("userInputNumber");
let numberValueDisplay = document.getElementById("numberValueDisplay");
let comparisonDisplay = document.getElementById("comparisonDisplay");
let greaterOrSmaller = document.getElementById("greaterOrSmaller");
let rangeDisplay = document.getElementById("rangeDisplay");
let rangeToTell = document.getElementById("rangeToTell");
let compareButton = document.getElementById("compareButton");

compareButton.addEventListener("click", () => {
    let userInput = userInputNumber.value;
    numberValueDisplay.innerHTML = userInput;
    isItInRange(userInput);
    if (userInput < 2) {
        if (userInput <= 0) {
            comparisonDisplay.innerHTML = `Your number is less than 2: `;
            greaterOrSmaller.innerHTML = userInput;
            greaterOrSmaller.style.color = "blue";
            rangeDisplay.innerHTML = `Error - your number: ${userInput} must be zero or greater`;
            rangeDisplay.style.color = "red";
        } else {
            comparisonDisplay.innerHTML = `Your number is less than 2: `;
            greaterOrSmaller.innerHTML = userInput;
            greaterOrSmaller.style.color = "blue";
            rangeDisplay.innerHTML = `Error - your number: ${userInput} The value is less than 2`;
            rangeDisplay.style.color = "red";
        }

    } else if (userInput > 2) {
        if (userInput > 2 && userInput < 4) {
            comparisonDisplay.innerHTML = `Your number is greater than 2: `;
            greaterOrSmaller.innerHTML = userInput;
            greaterOrSmaller.style.color = "blue";
            rangeDisplay.innerHTML = `The number is over 2: ${userInput}`;
            rangeDisplay.style.color = "red";

        } else {
            comparisonDisplay.innerHTML = `Your number is greater than 2: `;
            greaterOrSmaller.innerHTML = userInput;
            greaterOrSmaller.style.color = "blue";
            rangeDisplay.innerHTML = `Your Value is in the correct range`;
            rangeDisplay.style.color = "red";
        }

    } else {
        comparisonDisplay.innerHTML = `Your number equals 2: `;
        greaterOrSmaller.innerHTML = userInput;
        greaterOrSmaller.style.color = "blue";
        rangeDisplay.innerHTML = `Error - your number: ${userInput} The value is less than or equals 2`;
        rangeDisplay.style.color = "red";
    }

});

function isItInRange(userInput) {
    try {
        if (userInput <= 0) {
            throw new Error("The value must be zero or greater");
        } else if (userInput <= 2 && userInput > 0) {
            throw new Error("The value is less than 2:");
        } else if (userInput > 2 && userInput < 4) {
            throw new Error("The Value is over 2: ");
        } else if (userInput >= 4) {
            console.log("Your Value is in the correct range.");
        }
    }
    catch (error) {
        console.error(error);
    }
}







// var labDay = new Date(2022, 2, 1);
// console.log(labDay);
// // console.log(labDay.toDateString());
// // console.log(labDay.toTimeString());
// // console.log(`labDay as UTC is ${labDay.getTime()}`);
// // console.log(`${labDay.getDate()} + " / " + ${labDay.getMonth()} + " / " + ${labDay.getFullYear()}`);
// // console.log(`${labDay.getHours()} + " : " + ${labDay.getMinutes()}`);
// // var labDay = new Date();
// var msDay = 60 * 60 * 24 * 1000;

// labDay += msDay;
// console.log(labDay);


// var now = Date.now();
// console.log();
// var errorDate = new Date(2016, 33, 1);
// console.log(errorDate);
// var invalidDate = new Date("Funuary 3, 2018");
// console.log(invalidDate);
// var options = {
//     weekday: 'long',
//     year:'numeric',
//     mongth:'long',
//     day: 'numeric'
// }
// console.log(labDay.toLocaleString("de-DE", options));



// function counter(aString, aChar){
//     let count = 0;

//     for (let i = 0; i < aString.length; i++){
//         if (aString.charAt(i) === aChar) {
//             count++;
//             console.log(count);
//         }
//     }
//     document.getElementById("spaceCounter").innerHTML = count;
//     document.getElementById("spaceCounter").style.color = "red";
//     console.log(aChar);
// }



