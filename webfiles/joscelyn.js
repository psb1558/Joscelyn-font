var i = 0;
var speed = 80;
var elem = "demo1";
var txt = "Louing in trueth, and fayne in verse my loue to show,";
      
function typeWriter(e, t) {
//      alert(i + " , " + txt.length);
  if (i < txt.length) {
    document.getElementById(elem).innerHTML += txt.charAt(i);
    i++;
//        alert(i + " , " + txt.length);
    setTimeout(typeWriter, speed);
  }
}

function typetext() {
  typeWriter();
      txt = "That she, deare Shee, might take som pleasure of my paine,";
      elem = "demo2";
      i = 0;
  typeWriter();
      txt = "Pleasure might cause her reade, reading might make her know,";
      elem = "demo3";
      i = 0;
  typeWriter();
      txt = "Knowledge might pittie winne, and pity grace obtaine,";
      elem = "demo4";
      i = 0;
  typeWriter();
      txt = "I sought fit wordes to paint the blackest face of woe.";
      elem = "demo5";
      i = 0;
  typeWriter();
}

window.onload = typetext;
