$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        // animate to second panel
        .to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
        .to("#slideContainer", 1,   {x: "-14.286%"})	// move in to first panel
        .to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
        // animate to third panel
        .to("#slideContainer", 0.5, {z: -150, delay: 1})
        .to("#slideContainer", 1,   {x: "-28.57%"})
        .to("#slideContainer", 0.5, {z: 0})
        // animate to forth panel
        .to("#slideContainer", 0.5, {z: -150, delay: 1})
        .to("#slideContainer", 1,   {x: "-42.86%"})
        .to("#slideContainer", 0.5, {z: 0});
        // animate to fifth panel
        wipeAnimation
        .to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
        .to("#slideContainer", 1,   {x: "-57.14%"})	// move in to first panel
        .to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
        // animate to sixth panel
        .to("#slideContainer", 0.5, {z: -150, delay: 1})
        .to("#slideContainer", 1,   {x: "-71.43%"})
        .to("#slideContainer", 0.5, {z: 0})
        // animate to seventh panel
        .to("#slideContainer", 0.5, {z: -150, delay: 1})
        .to("#slideContainer", 1,   {x: "-85.716%"})
        .to("#slideContainer", 0.5, {z: 0});

    // create scene to pin and link animation
    new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "800%"
        })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        //.setTween(wipeAnimation_2)
        .addTo(controller);


    //Navbar class toggle

    var scene = new ScrollMagic.Scene({ triggerElement: "#nav-container", offset: 300 })
    // trigger animation by adding a css class
    scene.on("enter", (event) => {
        console.log("entered");
        $("#initial-banner").addClass("d-none");
        $("#main-nav").removeClass("d-none");
    })
        .addTo(controller);
});