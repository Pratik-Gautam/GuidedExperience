﻿// Instance the tour
var tour = new Tour({
    debug: true,
    orphan: false,
    backdrop: true,
    smartPlacement: true,
    storage: false,
   steps: [
        {
            element:  "#step1",
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
            title: "Step 3",
            placement: "top",
            content: "This is for testing a dropdown highlighting",
            backdrop: true
       },
       {
           element: "a[href='/timesheet']",
           title: "Step 4",
           placement: "top",
           content: "This is the timesheet link",
           backdrop: true
       }

    ]
});

tour.start();
