var i = 0;
var txt = 'I know HTML, CSS and am learning Python and JavaScript.';
var speed1 = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("top").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed1);
  }
}

var m = 0;
var speed4 = 35;
var ans = 'I learn these languages and their applications through platforms and services such as  •Codecademy, 	•Udemy, 	•W3Schools and 	•Youtube.';

function typeWriter1() {
  if (m < ans.length) {
    document.getElementById("mid").innerHTML += ans.charAt(m);
    m++;
    setTimeout(typeWriter1, speed4);
  }
}

var e = 0;
var speed2 = 25;
var ending = ' My name is Shahid and I am a 16 year old guy from Singapore who is interested in coding. I am currently enrolled in a Data Science course in Ngee Ann Polytechnic.';
 function typeWriter2() {
  if (e < ending.length) {
    document.getElementById("end").innerHTML += ending.charAt(e);
    e++;
    setTimeout(typeWriter2, speed2);
  }
}
