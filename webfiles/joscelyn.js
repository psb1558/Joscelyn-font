var i = 0;
var txt = "Louing in trueth, and fayne in verse my loue to show,\n \
That she, deare Shee, might take som pleasure of my paine,\n \
Pleasure might cause her reade, reading might make her know,\n \
Knowledge might pittie winne, and pity grace obtaine,\n \
I sought fit wordes to paint the blackest face of woe.";
var speed = 80;
      
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = typeWriter;
