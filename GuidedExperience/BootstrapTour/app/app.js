// Instance the tour
var tour = new Tour({
    debug: true,
    orphan: false,
    backdrop: true,
    backdropContainer: 'div',
    smartPlacement: true,
    storage: window.sessionStorage,
    steps: [
        {
            element: "#step1",
            title: "Step 1",
            content: "This is the header of this webpage that can help us to understand more details about it"
        },
        {
            element: "#step2",
            title: "Step 2",
            content: "This is the middle section that can review the various libraries needed for this operation"
        }
    ]
});
$(document).ready(function () {
    // Initialize the tour
    tour.init();

    // Start the tour
    tour.restart();
});