//section-3 GSAP animation

var totalElements = 0;
var elementAnimationDelay = 0;
var elementCountUp = 0;

function elementMoveUp(elementItem) {
    // console.log(elementItem);
  TweenMax.to(elementItem, 1.3, {
    top: "-=20px",
    ease: Power2.easeIn,
    onCompleteParams:[elementItem],
    onComplete: elementMoveDown
  });
}

function elementMoveDown(elementItem) {
//   console.log(elementItem);
  if(elementCountUp != totalElements) {
    elementCountUp++;
  } else {
    elementAnimationDelay = 0; 
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
    // console.log("init Phone hover  called ");
  $("#icon-container > div[id]").each(function(){
    totalElements++;
    // console.log(totalElements);

    elementAnimationDelay += 0.4;

    var targetElement = $("#element-"+totalElements);
    // console.log(targetElement);

    //init animation
    elementMoveDown(targetElement);
  });
}

// $("button").on('click', function() {
//   console.log("button clicked");
//   initPhoneHovering();
// });

var ctrl = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#icon-container"})
.on('start', function () {
    // console.log("icon-container reached");
    initPhoneHovering();
})
.addTo(ctrl);

