// Define the tour!
var tour = {
    id: "hello-hopscotch",
    steps: [
        {
            title: "Tour Start",
            content: "Welcome to the start of the tour.",
            target: "start",
            placement: "bottom"
        },
        {
            title: "Tour End",
            content: "Thank you for taking this tour.",
            target: "end",
            placement: "top"
        }
    ]
};

// Start the tour!
hopscotch.startTour(tour);

