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

myButton.addEventListener("click", () => {
    counter++;

    const table = document.createElement("table");
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const tbody = document.createElement("tbody");

    table.setAttribute("class", "table-striped table table-dark mb-0");
    table.setAttribute("border", "1");

    td1.innerHTML = `Row${counter} cell1`;
    td2.innerHTML = `Row${counter} cell2`;

    part0201.appendChild(table);

    table.appendChild(tbody)
    tbody.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
})