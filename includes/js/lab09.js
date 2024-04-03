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


loginForm.addEventListener("submit", function (event) {
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
        document.getElementById("loginForm").setAttribute("class", "was-validated");
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
//add eventListener for logout button

let responseAPI = async () => {
    let lat = 48.44490755561586;
    let lon = -123.38660990255518;
    let apiKey = "d11ec01c268e7bc2a984c522ae15807f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    let response = await fetch(apiUrl);
    console.log(response);
    let data = await response.json();
    console.log(data);

    $("#weatherDisplay").html(`${data.main.temp} C ${data.weather[0].main}`);
}
//use api to get the weather

responseAPI();
//call api to get the weather


$(document).ready(() => {

    $("#widgetDisplay").html(`<h2>Results</h2>`)

    const roomPrice = {
        standard: 300,
        double: 500,
        penthouse: 800
    }
    // roomPrice object for 3 types of rooms

    let totalPrice = 0;
    let totalDays = 0;
    let canceledRoom = 0;
    let totalRoom = 0;


    let calculatePrice = () => {
        let startDate = new Date($("#startDate").val());
        let endDate = new Date($("#endDate").val());
        let betweenDays = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));

        let selectedRoomType = $(`input[name="roomType"]:checked`).val();
        // target the input with name = roomType and get it's value
        let pricePerNight = roomPrice[selectedRoomType];

        if (betweenDays > 0) {
            let totalPrice = betweenDays * pricePerNight;
            $("#widgetDisplay").html(`
            <p>Your length of stay is:${betweenDays}</p>
            <p>$${pricePerNight} / night</p>
            <p>Total: $${pricePerNight * betweenDays}</p>
            `);
            totalPrice += pricePerNight * betweenDays;
            totalDays += betweenDays;
            console.log(totalPrice);
            console.log(totalDays);
            totalRoom += 1;

            $("#bookingDisplay").html(`
                    <p>Room Booked - there are ${(totalRoom - canceledRoom)}/${totalRoom} Rooms Booked</p
                    <p>Your length of stay is ${totalDays} days</p>
                    <p>$${pricePerNight} / night</p>
                    <p>Total: $${pricePerNight * betweenDays}</p>        
                    `);
        } else {
            $("#widgetDisplay").html(`<p>Please choose valid dates</p>`);
        }
    }

    let cancelRoom = () => {
        canceledRoom += 1;
        let selectedRoomType = $(`input[name="roomType"]:checked`).val();
        // target the input with name = roomType and get it's value
        let pricePerNight = roomPrice[selectedRoomType];

        let startDate = new Date($("#startDate").val());
        let endDate = new Date($("#endDate").val());
        let betweenDays = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));

        $("#bookingDisplay").html(`
                    <p class="text-info">Room Booked - there are ${(totalRoom - canceledRoom)}/${totalRoom} Rooms Booked</p
                    <p>Your length of stay is ${totalDays} days</p>
                    <p>$${pricePerNight} / night</p>
                    <p>Total: $${pricePerNight * betweenDays}</p> `);
    }
    // calculatePrice method, it will display the order info.


    class Hotel {
        restaurants = [["Donde La Arepa", "Colombian"], ["Casa Ramen", "Japanese"], ["Pizza Hermosa", "Italian"]];
        roomType = ["Twin ", "Double ", "Suite ", "HoneyMoon"];
        swimmingPool = true;
        airportShuttle = true;
        // properties of the Hotel class

        constructor(name, city, rooms, booked, gym) {
            this._name = name;
            this._city = city;
            this._rooms = rooms;
            this._booked = booked;
            this._gym = gym;
        }
        //constructor of Hotel class

        set name(name) {
            this._name = name;
        }

        set city(city) {
            this._city = city;
        }

        set rooms(rooms) {
            this._rooms = rooms;
        }

        set booked(booked) {
            this._booked = booked;
        }

        set gym(gym) {
            this._gym = gym;
        }

        get name() {
            return this._name;
        }

        get city() {
            return this._city;
        }

        get rooms() {
            return this._rooms;
        }

        get booked() {
            return this._booked;
        }

        get gym() {
            if (this._gym === true) {
                return "true";
            } else
                return "false";
        }

        bookRoom() {
            this._rooms += 1;
        }

        cancelRoom() {
            this._rooms -= 1;
        }


    }

    let name = 'Jianping Hotel';
    let city = "Victoria";
    let rooms = 5;
    let booked = 3;
    let gym = false;
//set the values for the variables, will be used in the constructor later
    let myHotel = new Hotel(name, city, rooms, booked, gym);

    let displayRestaurant = () => {
        let restaurant  = "";

        for (let [key, value] of myHotel.restaurants) {
            restaurant += `<span class="fw-bold">${key}</span> / type / <span class="fw-bold">${value}</span> <br>`
        }
        return restaurant;
    }

    let hotelInfoDisplay = () => {
        let selectedRoomType = $(`input[name="roomType"]:checked`).val()
        if(selectedRoomType === "standard"){
            $("#hotelInfoDisplay").html(`<span class="fw-bold">Hotel has a shuttle? </span><span>${myHotel.airportShuttle}</span>
                            <br>
                            <span class="fw-bold">Hotel has a swimming pool? </span><span>${myHotel.swimmingPool}</span>
                            <br>
                            <span class="fw-bold">Hotel has a shuttle? </span><span>${myHotel.airportShuttle}</span>
                            <br>
                            <div><span class="fw-bold">Hotel has ${myHotel.restaurants.length} restaurants each with a different theme:</span></div>
                            <br>
                            <span class="fw-bold">Hotel has a gym?</span> <span>${myHotel.gym}</span>
                            ${displayRestaurant()}`);
        }
    }

    $("#bookRoom").on("click", () => {calculatePrice();hotelInfoDisplay()});
    //add click event listener to bookRoom button, when click the calculatePrice will be called

    $("#cancelRoom").on("click", cancelRoom);


})



const arrHotelRooms = [
    {
        name: "Standard",
        description:"Single room with a bed",
        img:"includes/imgs/room1.jpg",
        price: "$150"
    },{
        name:"Double",
        description: "Double Room with a bed",
        img:'includes/imgs/room2.jpg',
        price: "$120"
    },{
        name:"Penthouse",
        description: "King Size Bed<br>Bar<br>Jacuzzi",
        img:'includes/imgs/room3.jpg',
        price: "$200"
    }, ];

let hotelRoomsDisplay = document.querySelector("#hotelRoomsDisplay");


function hotelDisplay() {
    for (let i = 0; i < arrHotelRooms.length; i++){
        const card = document.createElement("div");
        const row = document.createElement("div");
        const divImg = document.createElement("div");
        const hotelImg = document.createElement("img");
        const divForRightSide = document.createElement("div");
        const cardBody = document.createElement("div");
        const cardHeader = document.createElement("div");
        const cardText = document.createElement("p");
        const cardPrice = document.createElement("p");
        const divButton = document.createElement("div");
        const cardButton1 = document.createElement("button");
        const cardButton2 = document.createElement("button");
        const cardButton3 = document.createElement("button");


        card.setAttribute("class", "card mb-1");
        row.setAttribute("class", "row g-0");
        divImg.setAttribute("class", "col-5");
        hotelImg.setAttribute("src", arrHotelRooms[i].img);
        hotelImg.setAttribute("class", "img-fluid rounded-start");
        divForRightSide.setAttribute("class", "col-7");
        cardBody.setAttribute("class", "card-body");
        cardHeader.setAttribute("class", "card-header");
        cardText.setAttribute("class", "card-text");
        cardPrice.setAttribute("class", "card-text");
        divButton.setAttribute("class", "d-md-flex justify-content-md-end")
        if (i === 0) {
            cardButton1.setAttribute("class", "btn btn-primary");
            cardButton1.setAttribute("type", "button ");
        } else if (i === 1) {
            cardButton2.setAttribute("class", "btn btn-primary");
            cardButton2.setAttribute("type", "button ");
        } else {
            cardButton3.setAttribute("class", "btn btn-primary");
            cardButton3.setAttribute("type", "button ");
        }


        hotelRoomsDisplay.appendChild(card);
        card.appendChild(row);
        row.appendChild(divImg);
        divImg.appendChild(hotelImg);
        row.appendChild(divForRightSide);
        divForRightSide.appendChild(cardHeader);
        divForRightSide.appendChild(cardBody);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardPrice);
        cardBody.appendChild(divButton);

        if (i === 0) {
            divButton.appendChild(cardButton1);
        } else if (i === 1) {
            divButton.appendChild(cardButton2);
        } else
            divButton.appendChild(cardButton3);



        cardHeader.innerHTML = arrHotelRooms[i].name;
        cardText.innerHTML = arrHotelRooms[i].description;
        cardPrice.innerHTML = arrHotelRooms[i].price;
        cardButton1.innerHTML = "Book Room";
        cardButton2.innerHTML = "Book Room";
        cardButton3.innerHTML = "Book Room";

        cardButton1.addEventListener("click", () => {
            alert("your room is $150 per night");
        })

        cardButton2.addEventListener("click", () => {
            alert("your room is $120 per night");
        })

        cardButton3.addEventListener("click", () => {
            alert("your room is $200 per night");
        })



    }
}
hotelDisplay();

const part0201 = document.getElementById("part0201");
const sampleTable = document.getElementById("sampleTable");
const myButton = document.getElementById("myButton");
let counter = 1;






