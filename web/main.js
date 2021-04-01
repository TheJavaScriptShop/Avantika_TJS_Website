console.clear();
var controller = new ScrollMagic.Controller();
var sections = document.querySelectorAll("section");
var tl = new TimelineMax();
var offset = window.innerHeight;

for (let i = 1; i < sections.length; i++) {
  tl.from(sections[i], 1, { xPercent:100, ease: Linear.easeNone }, "+=1");
}

new ScrollMagic.Scene({
  triggerElement: "#pinMaster",
  triggerHook: "onLeave",
  duration: "500%"
})
  .setPin("#pinMaster")
  .setTween(tl)
  .addTo(controller);

$("section").each(function(i) {
  let target1 = $(this).find("h1");
  let split = new SplitText(target1, { type: "chars" });
  var tl = new TimelineMax();
  tl.staggerFrom(
    split.chars,
    0.5, 
    { opacity: 0, scale: 0.5, y: -100, ease: Bounce.easeOut },
    0.05
  );

  new ScrollMagic.Scene({
    triggerElement: "#pinMaster",
    triggerHook: 0,
    offset: i * offset
  })
    .setTween(tl)
    .addTo(controller)
    .addIndicators({
      colorTrigger: "white",
      colorStart: "white",
      colorEnd: "white",
      indent: 40
    });
});


//section-3 GSAP animation

var totalElements = 0;
var elementAnimationDelay = 0;
var elementCountUp = 0;

function elementMoveUp(elementItem) {
    console.log("move up called ")
  TweenMax.to(elementItem, 1.3, {
    top: "-=20px",
    ease: Power2.easeIn,
    onCompleteParams:[elementItem],
    onComplete: elementMoveDown
  });
}

function elementMoveDown(elementItem) {
  console.log("element move down called")
  if(elementCountUp != totalElements) {
    elementCountUp++;
  } else {
    elementAnimationDelay = 0; //no delay after initial run
  }

  TweenMax.to(elementItem, 1.3, {
    delay: elementAnimationDelay,
    top: "+=20px",
    ease: Power2.easeOut,
    onCompleteParams:[elementItem],
    onComplete: elementMoveUp
  });
}

function initPhoneHovering() {
    console.log("init Phone hover  called ")
  $("#icon-container > div[id]").each(function(){
    totalElements++;
    elementAnimationDelay += 0.4;

    var targetElement = $("#element-"+totalElements);

    //init animation
    elementMoveDown(targetElement);
  });
}

$("button").on('click', function() {
  console.log("button clicked")
  initPhoneHovering();
});


