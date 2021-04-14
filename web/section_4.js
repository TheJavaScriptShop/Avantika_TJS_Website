$(function () { // wait for document ready

    const controller = new ScrollMagic.Controller();
    
    // build scene
    new ScrollMagic.Scene({
      triggerElement: "#section-4",
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
    })
    .setClassToggle("#reveal1", "visible") // add class to reveal
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
    
    
    new ScrollMagic.Scene({
      triggerElement: "#reveal2",
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
    })
    .setClassToggle("#reveal2", "visible") // add class to reveal
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
    
    
    new ScrollMagic.Scene({
      triggerElement: "#reveal3",
      triggerHook: 0.9, // show, when scrolled 10% into view
      duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
      offset: 50 // move trigger to center of element
    })
    .setClassToggle("#reveal3", "visible") // add class to reveal
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
    
    
    });