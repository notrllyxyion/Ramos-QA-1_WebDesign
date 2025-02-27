var i = 0;
var txt = "The SF 25"; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed + 100);
  }
}
var i1 = 0;
var text = "The SF-25 is Scuderia Ferrari's Formula 1 car designed to compete in the 2025 Formula 1 World Championship. It is driven by Lewis Hamilton and Charles Leclerc."; /* The text */
var speed2 = 500; /* The speed/duration of the effect in milliseconds */

function typeWriter1() {
  if (i1 <text.length) {
    document.getElementById("info").innerHTML += text.charAt(i1);
    i1++;
    setTimeout(typeWriter1, speed2);
  }
}

var i2 = 0;
var text1 = "Scuderia Ferrari is the Formula 1 racing team of Ferrari, one of the most iconic and successful teams in F1 history."; /* The text */
var speed1 = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter2() {
  if (i2 <text.length) {
    document.getElementById("ferrariinfoo").innerHTML += text1.charAt(i2);
    i2++;
    setTimeout(typeWriter2, speed1 + 100);
  }
}

function allTypewriters()
{
     typeWriter()
     typeWriter1()
     typeWriter2()
}
function signUp() {
  alert("A confimation email has been sent to your email");
}