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




