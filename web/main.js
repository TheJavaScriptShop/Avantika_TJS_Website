$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        // animate to second panel
        .to("#slideContainer", 0.5, { z: -150 })		// move back in 3D space
        .to("#slideContainer", 1, { x: "-14.286% "})	// move in to first panel
        // .to("#panel", 1, {width:"100%"})
        .to("#slideContainer", 0.5, { z: 0 })				// move back to origin in 3D space
        // animate to third panel
        .to("#slideContainer", 0.5, { z: -150, delay: 1 })
        .to("#slideContainer", 1, { x: "-28.57%" })
        // .to("#panel", 1, {width:"100%"})
        .to("#slideContainer", 0.5, { z: 0 })
        // animate to forth panel
        .to("#slideContainer", 0.5, { z: -150, delay: 1 })
        .to("#slideContainer", 1, { x: "-42.86%"  })
        // .to("#panel", 1, {width:"100%"})
        .to("#slideContainer", 0.5, { z: 0 });
    // animate to fifth panel
    wipeAnimation
        .to("#slideContainer", 0.5, { z: -150 })
        .to("#slideContainer", 1, { x: "-57.14%"})
        // .to("#panel", 1, {width:"100%"})
        .to("#slideContainer", 0.5, { z: 0 })
        // animate to sixth panel
        .to("#slideContainer", 0.5, { z: -150, delay: 1 })
        // .to("#panel", 1, {width:"100%"})
        .to("#slideContainer", 1, { x: "-71.43%"})
        .to("#slideContainer", 0.5, { z: 0 })
        // animate to seventh panel
        .to("#slideContainer", 0.5, { z: -150, delay: 1 })
        .to("#slideContainer", 1, { x: "-85.716%"  })
        // .to("#panel", 1, {width:"100%"})
        .to("#slideContainer", 0.5, { z: 0 });

    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#how-we-work",
        triggerHook: "onLeave",
        duration: "800%"
    })
        .setPin("#how-we-work")
        .setTween(wipeAnimation)
        // .setClassToggle("#panel", "section-slide-panel-width")
        .addTo(controller);


    function pathPrepare ($el) {

            var lineLength = $el[0].getTotalLength();
            $el.css("stroke-dasharray", lineLength);
            $el.css("stroke-dashoffset", lineLength);
            console.log(lineLength);

          }
          var $mypath = $("path#mypath");
          
          // prepare SVG
          pathPrepare($mypath);
          
          // init controller
        //   var controller = new ScrollMagic.Controller();
          
          // build tween
          var tween = new TimelineMax()
            .add(TweenMax.to($mypath,1750, {strokeDashoffset: 0, ease:Linear.easeNone})) 
          
          // build scene
          var scene = new ScrollMagic.Scene({triggerElement: "#how-we-work", offset : 300,duration :10000, tweenChanges: true,})
                  .setTween(tween)
                //   .addIndicators() // add indicators (requires plugin)
                  .addTo(controller);
    

    //Navbar class toggle

    var scene = new ScrollMagic.Scene({ triggerElement: "#nav-container", offset: 300 })
    // trigger animation by adding a css class
    scene.on("enter", (event) => {
        $("#initial-banner").addClass("d-none");
       $("#main-nav").removeClass("d-none");
    })
        .addTo(controller);


    //how-we-work-spinner
    var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-spinner", offset: 350 })

    scene.on("enter", (event) => {
        $("#inactive-spinner").addClass("d-none");
       $("#active-spinner").removeClass("d-none");
    })
        // .addIndicators()
        .addTo(controller);
        
});