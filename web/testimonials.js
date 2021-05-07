$(function () { // wait for document ready

    const controller = new ScrollMagic.Controller();

    // build scene
    new ScrollMagic.Scene({
        triggerElement: "#testimonials",
        triggerHook: 0.9, // show, when scrolled 10% into view
        offset: 50 // move trigger to center of element
    })
        .setClassToggle("#reveal1", "visible") // adding class to reveal
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#reveal2",
        triggerHook: 0.9,
        offset: 50
    })
        .setClassToggle("#reveal2", "visible")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#reveal3",
        triggerHook: 0.9,
        offset: 50
    })
        .setClassToggle("#reveal3", "visible")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#reveal4",
        triggerHook: 0.9,
        offset: 50
    })
        .setClassToggle("#reveal4", "visible")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#reveal5",
        triggerHook: 0.9,
        offset: 50
    })
        .setClassToggle("#reveal5", "visible")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#reveal6",
        triggerHook: 0.9,
        offset: 50
    })
        .setClassToggle("#reveal6", "visible")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#reveal7",
        triggerHook: 0.9,
        offset: 50
    })
        .setClassToggle("#reveal7", "visible")
        .addTo(controller);
});