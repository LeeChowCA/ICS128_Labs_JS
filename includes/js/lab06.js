// Create class for Hotel
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

let hotelCard = document.getElementById("hotelCard");

let displayRestaurant = () => {
    let restaurant  = "";

    for (let [key, value] of myHotel.restaurants) {
        restaurant += `<span class="fw-bold">${key}</span> / type / <span class="fw-bold">${value}</span> <br>`
    }

    return restaurant;
}
/* Use a string to storing the tags for displaying restaurant and then return it, so all info of the restaurant
* could be displayed once*/

hotelCard.innerHTML = `<div class = "card-header">Book Your Room</div>
                        <div class = "card-body">
                            <h1>${myHotel.city}</h1>
                            <h4 class="text-decoration-underline">Hotel Info</h4>
                            <p>The <span class="fw-bold">${myHotel.name}</span> located in <span class="fw-bold">${myHotel.city}</span></p>
                            <p>The available room types are: ${myHotel.roomType}.</p>
                            <span class="fw-bold">Hotel has a shuttle? </span><span>${myHotel.airportShuttle}</span>
                            <br>
                            <span class="fw-bold">Hotel has a swimming pool? </span><span>${myHotel.swimmingPool}</span>
                            <br>
                            <span class="fw-bold">Hotel has a shuttle? </span><span>${myHotel.airportShuttle}</span>
                            <br>
                            <div><span class="fw-bold">Hotel has ${myHotel.restaurants.length} restaurants each with a different theme:</span></div>
                            <br>
                            <span class="fw-bold">Hotel has a gym?</span> <span>${myHotel.gym}</span>
                            ${displayRestaurant()}
                            <br>
                            <p class="text-success">There are ${myHotel.booked} / ${myHotel.rooms} rooms booked</p>
                            <button class="btn btn-primary"> Book Rooms</button>
                            <button class="btn btn-danger">Cancel Room</button>
                        </div>
                        <div class = "card-footer">Exercise 1</div>`;
// create the card for displaying the hotel info
displayRestaurant();


// Resort class inherit Hotel class
class Resort extends Hotel{

    constructor(name, city, rooms, booked, gym, resortType, beachFront, kidsClub) {
        super(name, city, rooms, booked, gym);
        // must put all the formal parameters of the parent constructor into the super! otherwise it will give undefined error;
        this._resortType = resortType;
        this._beachFront = beachFront;
        this._kidsClub = kidsClub;
    }

    set resortType(resortType){
        this._resortType = resortType;
    }

    set beachFront(beachFront){
        this._beachFront = beachFront;
    }

    set kidsClub(kidsClub) {
        this._kidsClub = kidsClub;
    }

    get resortType(){
        return this._resortType;
    }

    get beachFront(){
        return this._beachFront;
    }

    get kidsClub() {
        return this._kidsClub;
    }
}

let resortCard = document.getElementById("resortCard");
let resortType = "singles";
let beachFront = false;
let kidsClub = true;
// create variables for creating the object of Resort class

myResort = new Resort("GoGo Resort","Vancouver", 10, 1, true,  resortType, beachFront, kidsClub);

resortCard.innerHTML = `
                        <div class="card-header">Suite Booking</div>
                        <div class="card-body">
                           <h1>${myResort.name}</h1>
                           <h4 class="text-decoration-underline">Resort Info</h4>
                           <span class="fw-bold">${myResort.name}</span><span>, located in</span><span class="fw-bold">${myResort.city}</span>
                           <br>
                           <span class="fw-bold">Is it on the beach?</span> <span>${myResort.beachFront}</span>
                           <span class="fw-bold">Does it have a kids club?</span> <span>${myResort.kidsClub}</span>
                           <div><span class="fw-bold">News!</span><span>There is a </span><span class="fw-bold"> New Bar </span><span>being built</span></div>
                           <br>
                           <span class="fw-bold">Is it a family Resort?</span> <span>It is a ${myResort.resortType} Type </span>
                           <p class="text-success">There are ${myResort.booked} / ${myResort.rooms} rooms booked</p>
                           <button class="btn btn-primary"> Book Rooms</button>
                           <button class="btn btn-danger">Cancel Room</button>
                        </div>
                        <div class="card-footer">Excercise 2</div>`
//create a card for displaying resort info







