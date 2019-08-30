function myFunction() {
  var circles = document.getElementsByClassName('circle');
  for (let circle of circles) {
    circle.addEventListener('click', function(e) {
      for (let circle of circles) {
        circle.classList.remove('red');
      }
      circle.classList.add('red');
      if (circle.classList.contains('E')) {
        document.getElementsByClassName('shoulder')[0].classList.remove('text');
      }
    });
  }
}

// var text = ["main","pied","tete","genou"];
////var x = Math.floor((Math.random()*2));
// $('#myTxt').html(text[x]);//
// document.getElementById("myTxt").innerHTML = "Paragraph changed!";
var r_text = new Array();
r_text[0] = "trouver l'epaule";
r_text[1] = 'trouver l main';
r_text[2] = 'trouver la jambe';
r_text[3] = 'trouver';
r_text[4] = "I'd be safe and warm";
r_text[5] = 'If I was in L.A.';
r_text[6] = "California dreaming, On such a winter's day";

var i = Math.random();

i = 6 * i;
i = Math.floor(i);

var i = Math.floor(7 * Math.random());
