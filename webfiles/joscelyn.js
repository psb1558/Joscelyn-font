var i = 0;
var txt = "Louing in trueth, and fayne in verse my loue to show, \
That she, deare Shee, might take som pleasure of my paine, \
Pleasure might cause her reade, reading might make her know, \
Knowledge might pittie winne, and pity grace obtaine, \
I sought fit wordes to paint the blackest face of woe.";
var speed = 50;
      
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = typeWriter;
