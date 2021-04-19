//Tech-stack GSAP animation

var totalElements = 0;
var elementAnimationDelay = 0;
var elementCountUp = 0;

//function for moving icon upwards
function elementMoveUp(elementItem) {
  TweenMax.to(elementItem, 1.3, {
    top: "-=20px",
    ease: Power2.easeIn,
    onCompleteParams: [elementItem],
    onComplete: elementMoveDown
  });
}

//function for moving icon downwards
function elementMoveDown(elementItem) {
  if (elementCountUp != totalElements) {
    elementCountUp++;
  } else {
    elementAnimationDelay = 0;
  }

  TweenMax.to(elementItem, 1.3, {
    delay: elementAnimationDelay,
    top: "+=20px",
    ease: Power2.easeOut,
    onCompleteParams: [elementItem],
    onComplete: elementMoveUp
  });
}

function initPhoneHovering() {
  $("#icon-container > div[id]").each(function () {
    totalElements++;
    elementAnimationDelay += 0.4;
    var targetElement = $("#element-" + totalElements);

    //init animation
    elementMoveDown(targetElement);
  });
}

//start animation when the scene is scrolled into view
var ctrl = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({ triggerElement: "#icon-container" })
  .on('start', function () {
    initPhoneHovering();
  })
  .addTo(ctrl);