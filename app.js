// var text = ["main","pied","tete","genou"];
////var x = Math.floor((Math.random()*2));
// $('#myTxt').html(text[x]);//
// document.getElementById("myTxt").innerHTML = "Paragraph changed!";
var r_text = new Array();

r_text = [
          ["trouver l'epaule", "E"], 
          ["trouver la main", "M"], 
          ["trouver le coude", "C"], 
          ["trouver la hanche", "H"],
          ["trouver le pied", "P"],
          ["trouver le genoux", "G"]
        ]


var randomQuestion = Math.floor(6 * Math.random());
console.log(randomQuestion);
document.write(r_text[randomQuestion][0]);

var blabla = r_text[1][1];




function myFunction() {
  var circles = document.getElementsByClassName('circle');
  for (let circle of circles) {
    circle.addEventListener('click', function(e) {
      for (let circle of circles) {
        circle.classList.remove('red');
      }
      circle.classList.add('red');
      if (circle.classList.contains(r_text[randomQuestion][1])) {
        document.getElementsByClassName('winningState')[0].classList.remove('text');
        circle.classList.add('green');
      }
    });
  }
}

myFunction();