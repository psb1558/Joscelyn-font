var i = 0;
var txt1 = "Louing in trueth, and fayne in verse my loue to show,"
var txt2 = "That she, deare Shee, might take som pleasure of my paine,"
var txt3 = "Pleasure might cause her reade, reading might make her know,"
var txt4 = "Knowledge might pittie winne, and pity grace obtaine,"
var txt5 = "I sought fit wordes to paint the blackest face of woe."
var speed = 80;
      
function typeWriter(e, t) {
      i = 0;
  if (i < t.length) {
    document.getElementById(e).innerHTML += t.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function typetext() {
  typeWriter(txt1, "demo1");     
  typeWriter(txt2, "demo2");
  typeWriter(txt3, "demo3");
  typeWriter(txt4, "demo4");
  typeWriter(txt5, "demo5");
}

window.onload = typetext;
