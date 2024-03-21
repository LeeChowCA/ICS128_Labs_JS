let nameTest = RegExp("^[A-Za-z]+$")
let loginForm = document.getElementById("loginForm");
let userNameInput = document.getElementById("userNameInput");
let quizForm = document.getElementById("quizForm");


    $(document).ready(() => {
        $("#loginBtn").click((event) => {
            event.preventDefault();
            if (nameTest.test(userNameInput.value)) {
                userNameInput.classList.add("is-valid");
                $("#loginPage").fadeOut("30000");
            } else
                userNameInput.classList.add("is-invalid")
        })
    });

// Set the date we're counting down to
let countDownDate = new Date("Jan 5, 2030 15:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

    // Get today's date and time
    let startTime = new Date("Jan 5, 2030 13:00:00");

    // Find the distance between now and the count down date
    let distance = countDownDate - startTime;

    // Time calculations for days, hours, minutes and seconds

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("quizTimer").innerHTML = hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("quizTimer").innerHTML = "EXPIRED";
    }
}, 1000);

quizForm.innerHTML =
    `<div>Welcome ${userNameInput.value}</div>
     <p>1. What is the biggest cat breed in the world?</p>
     <div>
         <input class="form-check-input" type="radio" value="" aria-label="Checkbox for following text input">
         <span>a. British Shorthair</span>
     </div>
     <div>
         <input class="form-check-input" type="radio" value="" aria-label="Checkbox for following text input">
         <span>b. Siem</span>
     </div>
     <div>
         <input class="form-check-input" type="radio" value="" aria-label="Checkbox for following text input">
         <span>c. Mane</span>
     </div>
     <div>
         <input class="form-check-input" type="radio" value="" aria-label="Checkbox for following text input">
         <span>d. Tiger</span>
     </div> 
     <p class="fw-bold mt-2">[HINT]</p>`


