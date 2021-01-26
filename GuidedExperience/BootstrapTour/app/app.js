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
            title: "Title of step 1",
            content: "Content of step 1"
        },
        {
            element: "#step2",
            title: "Title of step 2",
            content: "Content of step 2"
        }
    ]
});
$(document).ready(function () {
    // Initialize the tour
    tour.init();

    // Start the tour
    tour.start();
});