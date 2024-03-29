$(() => {
    $("#startDate").datepicker();
    $("#endDate").datepicker();
})

$(document).ready(() => {

    $("#widgetDisplay").html(`<h2>Results</h2>`)

    // $("#standard").on("click", () => {
    //     let startDate = new Date($("#startDate").val());
    //     let endDate = new Date($("#endDate").val());
    //     let between = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
    //     //convert milliseconds to day
    //
    //
    //
    // })
    // //add click event listener for standard button

    // $("#double").on("click", () => {
    //     let startDate = new Date($("#startDate").val());
    //     let endDate = new Date($("#endDate").val());
    //     let between = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
    //     //convert milliseconds to day
    //
    //
    //
    // })
    // //add click event for double button

    // $("#Penthouse").on("click", () => {
    //     let startDate = new Date($("#startDate").val());
    //     let endDate = new Date($("#endDate").val());
    //     let between = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
    //     //convert milliseconds to day
    //
    //
    //
    // })

    $("#bookRoom").on("click", () => {
        let startDate = new Date($("#startDate").val());
        let endDate = new Date($("#endDate").val());
        let between = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
        //convert milliseconds to day

        if ($("#standard:checked")) {
            const standardPerNight = 300;
            $("#widgetDisplay").html(`
            <p>Your length of stay is:${between}</p>
            <p>$${standardPerNight} / night</p>
            <p>Total: $${standardPerNight * between}</p>
            `)
        } else if ($("#double:checked")) {
            const doublePerNight = 500;
            $("#widgetDisplay").html(`
            <p>Your length of stay is:${between}</p>
            <p>$${doublePerNight} / night</p>
            <p>Total: $${doublePerNight * between}</p>
            `)
        } else if ($("#Penthouse:checked")) {
            const PenthousePerNight = 800;
            $("#widgetDisplay").html(`
            <p>Your length of stay is:${between}</p>
            <p>$${PenthousePerNight} / night</p>
            <p>Total: $${PenthousePerNight * between}</p>
            `)
        } else {
            $("#widgetDisplay").html(`
            <p>Please choose date correctly</p>
            `)
        }

        //according to the checkbox checked, display the corresponding unit price and total price
    })


    //add click event for double button

})