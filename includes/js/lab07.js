let x;
let distance;
//x is timeInterval between startTime and countdownDate

const catQuestions = [
    {
        question: "Which country is believed to be the origin of the domestic cat?",
        options: ["Egypt", "Australia", "United States", "Norway"],
        answer: "Egypt"
    },
    {
        question: "What is the term used for a group of kittens?",
        options: ["A clowder", "A kindle", "A flock", "A pack"],
        answer: "A kindle"
    },
    {
        question: "Which part of a cat is said to be unique to each individual, much like human fingerprints?",
        options: ["Paw pads", "Whiskers", "Nose", "Tail"],
        answer: "Nose"
    },
    {
        question: "What is the maximum recorded number of years that a cat has lived?",
        options: ["38 years", "25 years", "29 years", "42 years"],
        answer: "38 years"
    },
    {
        question: "What is the primary reason cats purr?",
        options: ["Happiness", "Hunger", "Pain", "All of the above"],
        answer: "All of the above"
    }
];
// create an object to store all the questions, options and answers. later gonna use a loop to iterate the object.

const showQuestions = () => {
    let questions = '';
    // store the tags inside the question variable.
    for (let i = 0; i < catQuestions.length - 1; i++) {
        questions += `<p>${i + 1}. ${catQuestions[i].question}</p>`
        for (let j = 0; j < 4; j++) {
            questions += `<div class="form-check">
                <input name = "question${i}" id="Q${i}O${j}" class="form-check-input" type="radio" value="option${j}" aria-label="Checkbox for following text input">
                <label class="form-check-label" for="Q{i}O{j}">${catQuestions[i].options[j]}</label>
            </div>
            `
        }
        questions += `<p class="fw-bold mt-2 hint-trigger" style="cursor: pointer;">[HINT]</p>
                      <div class="hint-message" id="hint${i}" style="display: none;">Correct answer: ${catQuestions[i].answer}</div>`
    }
    questions += `<p>${catQuestions.length}. ${catQuestions[catQuestions.length - 1].question}</p>`
    for (let j = 0; j < 4; j++) {
        questions += `<div class="form-check">
                <input name = "question${catQuestions.length}" id="Q${catQuestions.length - 1}O${j}" class="form-check-input" type="checkbox" value="option${j}" aria-label="Checkbox for following text input">
                <label class="form-check-label" for="Q1O1">${catQuestions[catQuestions.length - 1].options[j]}</label>
            </div>
            `
    }
    questions += `<p class="fw-bold mt-2 hint-trigger" style="cursor: pointer;">[HINT]</p>
     <div class="hint-message" id="hint${catQuestions.length - 1}" style="display: none;">Correct answer: ${catQuestions[catQuestions.length - 1].answer}</div>`

    return questions;
}
//use showQuestion function to create the questions

const startCountDown = () => {
    let countDownDate = new Date().getTime() + (2 * 60 * 60 * 1000);
    // Set the date we're counting down to
    let quizTimer = document.getElementById("quizTimer");

// Update the count down every 1 second
    x = setInterval(function () {

        // Get today's date and time
        let startTime = new Date().getTime();

        // Find the distance between now and the count down date
        distance = countDownDate - startTime;

        // Time calculations for days, hours, minutes and seconds

        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="demo"
        if (quizTimer) {
            quizTimer.innerHTML = `${hours}h 
                        ${minutes}m  ${seconds} s`;
        }
// If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            quizTimer.innerHTML = "EXPIRED";
        }
    }, 1000);
}


$(document).ready(() => {

    const nameTest = RegExp("^[A-Za-z]+$");
    const userNameInput = $("#userNameInput");
    const quizPage = $("#quizPage");
    const quizTimer = $("#quizTimer");
    const quizForm = $("#quizForm");
    const loginPage = $("#loginPage");
    const submitBtn = $('<button class="btn btn-danger" type="button">Submit</button>');
    const modalQuizDisplay = $("#modalQuizDisplay");
    let counter = 0;

    const checkAll = () => {
        let allChecked = false;
        for (let i = 0; i < catQuestions.length; i++) {
            let questionCheck = false;
            for (let j = 0; j < 4; j++) {
                let checkBtn = document.getElementById(`Q${i}O${j}`);
                console.log(checkBtn.checked);
                if (checkBtn && checkBtn.checked) {
                    questionCheck = true;
                    console.log(document.getElementById(`Q${i}O${j}`).value)
                    console.log(document.getElementById(`Q${i}O${j}`))
                    if (i === 0 && document.getElementById(`Q${i}O${j}`).value === "option0") {
                        counter++;
                    } else if (i === 1 && document.getElementById(`Q${i}O${j}`).value === "option1") {
                        counter++;
                    } else if (i === 2 && document.getElementById(`Q${i}O${j}`).value === "option2") {
                        counter++;
                    } else if (i === 3 && document.getElementById(`Q${i}O${j}`).value === "option0") {
                        counter++;
                    } else if (i === 4 && document.getElementById(`Q${i}O${j}`).value === "option3") {
                        counter++;
                    }
                    console.log(counter)
                }
            }
            allChecked = questionCheck;
        }
        return allChecked;
    };
    //check if all the questions are answered


    $("#loginBtn").click((event) => {
        event.preventDefault();
        if (nameTest.test(userNameInput.val())) {
            userNameInput.addClass("is-valid");
            $("#loginPage").fadeOut(300, () => {
                quizPage.removeClass("d-none").fadeIn(3000);
            });
// fadeout the login page
            quizForm.html(
                `<div>Welcome ${userNameInput.value}, Good Luck</div>
                 <p class="text-danger text-bold" id="scoreDisplay" style="display: none;"></p>
<!--                 make sure it's display nont, so it can be faded in-->
                ${showQuestions()}
                 <button class="btn btn-danger" id="submitBtn" type="button"  data-bs-toggle = "modal" data-bs-target="#scoreModal">Submit</button>
                 <footer>Copyright @2023 All rights reserved</footer>`);
//show the questions.

            $(document).on('mouseenter', '.hint-trigger', function () {
                // Fade in the corresponding hint message
                $(this).next('.hint-message').fadeIn(500);
            }).on('mouseleave', '.hint-trigger', function () {
                // Fade out the hint message
                $(this).next('.hint-message').fadeOut(500);
            });

            $(document).on("click", "#submitBtn", () => {
                // event.preventDefault();

                console.log(document.getElementById(`Q${0}O${0}`));
                if (!checkAll()) {
                    alert("please finish all questions");
                    $("#submitBtn").attr("data-bs-toggle", "");
                }
                // check when the score is perfect score
                if (counter === 5) {
                    let timeTaken = Math.round((120 - distance / 1000 / 60) * 100) / 100;
                    modalQuizDisplay.html(`
                        <p class="text-danger fw-bold">Result for ${userNameInput.val()}: Scored ${counter} out of 5.</p>
                        <p>You Finished in ${timeTaken} min.</p>
                    `);
                    $('#scoreModal').modal('show');

                    // fade out the existing modal content
                    modalQuizDisplay.fadeOut(3000, function () {
                        // After fade out completes, set new content and then fade it back in
                        modalQuizDisplay.html(`
                            <p class="text-danger fw-bold">Result for ${userNameInput.val()}: Scored ${counter} out of 5.</p>
                            <p>You Finished in ${timeTaken} min.</p>
                            <p>You scored 5/5. Perfect!</p>
                        `).fadeIn(300);

                        // flashing effect
                        let flashTimes = 10;
                        let flashInterval = setInterval(() => {
                            modalQuizDisplay.fadeOut(100).fadeIn(100);
                            flashTimes--;
                            if (flashTimes <= 0) {
                                clearInterval(flashInterval); // Stop flashing
                            }
                        }, 200);
                    });
                } else {
                    // For non-perfect scores, simply show the modal with results
                    let timeTaken = Math.round((120 - distance / 1000 / 60) * 100) / 100;
                    modalQuizDisplay.html(`
                        <p class="text-danger fw-bold">Result for ${userNameInput.val()}: Scored ${counter} out of 5.</p>
                        <p>You Finished in ${timeTaken} min.</p>
                    `);
                    $('#scoreModal').modal('show');
                }
                $("#scoreDisplay").html(`Scored ${counter} out of 5`).fadeIn(3000);
                //fadein the scoreDisplay
                clearInterval(x); // Stops the timer
            })
            startCountDown();
        } else
            userNameInput.classList.add("is-invalid")
        //add an eventListener, so we can check if all questions are answered
    })
});










