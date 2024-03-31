const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logoutButton");
const submitButton = document.getElementById("submitButton");

const firstNameInput = document.getElementById("firstName");
const secondNameInput = document.getElementById("secondName");
const secondNameTest = RegExp("^[A-Za-z]+$");
const emailInput = document.getElementById("email");
const emailTest = RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
const ageInput = document.getElementById("age");
const ageTest = RegExp("^(?:120|[1-9]?[0-9])$");
const phoneInput = document.getElementById("phoneNumber");
const phoneTest = RegExp("^\\d{3}(-|\\s)?\\d{3}(-|\\s)?\\d{4}$");
const postalInput = document.getElementById("postalCode");
const postalTest = RegExp("^[ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJKLMNPRSTVWXYZ](?:\\s?\\d[ABCEGHJKLMNPRSTVWXYZ]\\d)?$");

let firstNameVerify = false;
let secondNameVerify = false;
let emailVerify = false;
let ageVerify = false;
let phoneVerify = false;
let postalVerify = false;

loginButton.addEventListener("click", () => {
    loginButton.classList.add("d-none");
    logoutButton.classList.remove("d-none");
    loginForm.classList.remove("d-none");
})


loginForm.addEventListener("submit", function(event ) {
    event.preventDefault();

    if (firstNameInput.value.includes(" ") || firstNameInput.value === "") {
        firstNameInput.classList.add("is-invalid"); // Add the is-invalid class
    } else {
        firstNameInput.classList.remove('is-invalid');
        firstNameVerify = true;// Remove the class if the input passes validation
    }

    if (secondNameTest.test(secondNameInput.value)) {
        secondNameInput.classList.remove("is-invalid");
        secondNameVerify = true;
    } else {
        secondNameInput.classList.add("is-invalid");
    }

    if (ageTest.test(ageInput.value)) {
        ageInput.classList.remove("is-invalid");
        ageVerify = true;
    } else {
        ageInput.classList.add("is-invalid");
    }

    if (emailTest.test(emailInput.value)) {
        emailInput.classList.remove("is-invalid");
        emailVerify = true;
    } else {
        emailInput.classList.add("is-invalid");
    }

    if (phoneTest.test(phoneInput.value)) {
        phoneInput.classList.remove("is-invalid");
        phoneVerify = true;
    } else {
        phoneInput.classList.add("is-invalid");
    }

    if (postalTest.test(postalInput.value)) {
        postalInput.classList.remove("is-invalid");
        postalVerify = true;
    } else {
        postalInput.classList.add("is-invalid");
    }

    if (firstNameVerify && secondNameVerify && ageVerify && emailVerify && phoneVerify && postalVerify) {
        document.getElementById("loginForm").setAttribute("class","was-validated");
        submitButton.setAttribute("data-bs-dismiss", "modal");
        let myModal = bootstrap.Modal.getInstance(loginModal);
        // get the modal named "loginModal"
        myModal.hide();
        // make sure when validation passed, the modal will disappear, instead of clicking the submit button one more time to close it.
        document.getElementById("allVerifiedMessage").innerHTML = `<span style="color: goldenrod">info is correct</span> `;

        document.getElementById("fullName").innerHTML = `${firstNameInput.value} ${secondNameInput.value}`;
        document.getElementById("cardEmail").innerHTML = `${emailInput.value}`;
        document.getElementById("cardAge").innerHTML = `Age:  <span style ="color: red">${ageInput.value}</span>`;
        document.getElementById("cardPostal").innerHTML = `PostalCode: <span style="color: blue">${postalInput.value}</span>`;
        document.getElementById("cardPhone").innerHTML = `Ph: <span style=" color: green">${phoneInput.value}</span>`;
        document.getElementById("profile").classList.remove("d-none");
    }


})

logoutButton.addEventListener("click", () => {
    logoutButton.classList.add("d-none");
    document.getElementById("profile").classList.add("d-none");
    loginButton.classList.remove("d-none");
    document.getElementById("welcomeMessage").classList.add("d-none");
})

let responseAPI = async() => {
    let lat = 48.44490755561586;
    let lon = -123.38660990255518;
    let apiKey = "d11ec01c268e7bc2a984c522ae15807f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    let response = await fetch(apiUrl);
    console.log(response);
    let data = await response.json();
    console.log(data);
}

responseAPI();

