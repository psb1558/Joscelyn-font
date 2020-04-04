var i = 0;
var txt1 = "Louing in trueth, and fayne in verse my loue to show,"
var txt2 = "That she, deare Shee, might take som pleasure of my paine,"
var txt3 = "Pleasure might cause her reade, reading might make her know,"
var txt4 = "Knowledge might pittie winne, and pity grace obtaine,"
var txt5 = "I sought fit wordes to paint the blackest face of woe."
var speed = 80;
      
function typeWriter(e, t) {
  if (i < t.length) {
    document.getElementById(e).innerHTML += t.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function typetext() {
  typeWriter("demo1", txt1);  
      i = 0;
  typeWriter("demo2", txt2);
      i = 0;
  typeWriter("demo3", txt3);
      i = 0;
  typeWriter("demo4", txt4);
      i = 0;
  typeWriter("demo5", txt5);
}

window.onload = typetext;
