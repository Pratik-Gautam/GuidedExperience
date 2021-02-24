// Instance the tour
var tour = new Tour({
    debug: true,
    orphan: false,
    storage: window.sessionStorage,
    steps: [
        {
            element: "#step1",
            title: "Step 1",
            placement:"bottom",
            content: "This is the header of this webpage that can help us to understand more details about it"
           
        },
        {
            element: "#step2",
            title: "Step 2",
            placement: "bottom",
            content: "This is the middle section that can review the various libraries needed for this operation"
        },
        {
            element: "#cars",
            title: "Steo 3",
            placement: "top",
            content: "This is for testing a dropdown highlighting",
            backdrop: true
        }
    ]
});
$(document).ready(function () {
    // Initialize the tour
    tour.init();

    // Start the tour
    tour.restart();
});