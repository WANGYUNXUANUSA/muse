$(document).ready(function(){
    var text="I want you to write this text instead";
    var number=42;
//  var paragraph=$("p").html();
//  $("p").html("<h1>greetings world</h1>")
//  console.log(paragraph);

    $("p").text(text+" "+number);
    $(".contentbox").append("<h2>add this html too!</h2>");

// find out the html inside of HTML element with class of contentbox
    var stuff=$(".contentbox").html();
    console.log(stuff);

// change size of paragraph text
    $("p").css({"font-size":"22px",
                "color":"blue",
                "font-style":"oblique"
                });

//change background color when clicked
    $(".contentbox").click(function(){
      $(".contentbox").addClass("redbackground")
      $("h2").slideToggle();
    })
    $(".contentbox").hover(function(){
      $(this).toggleClass("greenbackground");
    })

  // one click gives all elements with class bae a random height and width
    $("div.bar").click(function(){
      $("div.bar").each( function(index, element){
        var random=300*Math.random();
        $(this).css("height", random+"px");
        $(this).css("width", random+"px");
    })

    })

})





var bigYellowCircle = document.querySelector("#bigYellowCircle");
var blueSquare = document.querySelector("#blueSquare");
var greenPentagon = document.querySelector("#greenPentagon");


function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}


window.addEventListener("DOMContentLoaded", scrollLoop, false);

var xScrollPosition;
var yScrollPosition;

function scrollLoop() {
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;

    requestAnimationFrame(scrollLoop);
}

var xScrollPosition;
var yScrollPosition;

function scrollLoop() {
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;

    requestAnimationFrame(scrollLoop);
}


function scrollLoop() {
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;

    setTranslate(0, yScrollPosition * -0.2, bigYellowCircle);
    setTranslate(0, yScrollPosition * -1.5, blueSquare);
    setTranslate(0, yScrollPosition * .5, greenPentagon);

    requestAnimationFrame(scrollLoop);
}
