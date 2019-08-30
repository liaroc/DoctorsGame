function myFunction() {
  var circles = document.getElementsByClassName("circle");
  for (let circle of circles) {
    circle.addEventListener("click", function(e) {
      for (let circle of circles) {
        circle.classList.remove("red");
      }
      circle.classList.add("red");
      if (circle.classList.contains("E")) {
        document.getElementsByClassName("shoulder")[0].classList.remove("text");
      }
    });
  }
}

myFunction();

var r_text = new Array();
r_text[0] = "Trouve la téte";
r_text[1] = "Trouve l'epaule";
r_text[2] = "Trouve le coude";
r_text[3] = "Trouve le genous";
r_text[4] = "Clique sur la main";

var i = Math.random();
i = 5 * i;
i = Math.floor(i);

document.write(r_text[i]);
