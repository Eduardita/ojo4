// la idea es hacer una cara y que pasen cosas al hacer clik o mover el mouse etc ....
// hasta ahora he logrado abriri y cerrar los parpados y mover la boca al hacer click ... jajajaja


var boca1 = -10
var boca2 = 150

function setup() {
  createCanvas(900, 700)
  angleMode(DEGREES)
}

function draw() {
  background(255)

  //nariz
  fill(220, 140, 65);
  triangle(450, 300, 510, 410, 390, 410)

  //circunferencia ojos
  noFill()
  strokeWeight(1)
  stroke(0)
  ellipse(300, 200, 250, 200)
  ellipse(600, 200, 250, 200)

  //pupila
  fill(130, 80, 80);
  ellipse(350, 200, 20, 60);
  ellipse(650, 200, 20, 60);

  //pupilita
  fill(20, 20, 200)
  ellipse(350, 200, 5, 15)
  ellipse(650, 200, 5, 30)



  //variables para mover los parpados
  var parpadoy = constrain(mouseY, 98, 305)
  var largo = map(mouseY, 100, 300, 50, 500)
  var largo2 = constrain(largo, 50, 500)
  var ancho = map(mouseY, 100, 300, 250, 350)
  var ancho2 = constrain(ancho, 250, 350)

  //parpados
  fill(160, 60, 60);
  arc(300, parpadoy, ancho2, largo2, 180, 0, CHORD);
  arc(600, parpadoy, ancho2, largo2, 180, 0, CHORD);

  //pestanas que se mueven junto a parpados
  stroke(0)
  strokeWeight(3)


  for (var i = 0; i < ancho2; i = i + 6) {
    stroke(0)
    strokeWeight(3)
    line(300 + i - ancho2 / 2, parpadoy, 300 + i - ancho2 / 2, parpadoy + random(10, 30))

  }
  for (var i = 0; i < ancho2; i = i + 4) {
    stroke(0)
    strokeWeight(3)
    line(600 + i - ancho2 / 2, parpadoy, 600 + i - ancho2 / 2, parpadoy + random(10, 30))

  }

  //boca
  strokeWeight(1)
  fill(148, 33, 129)
  arc(450, 480, 330, 150, boca1, boca2, OPEN)

  //if (boca1 == -10 && mouseIsPressed) {

  //  boca1 = 30
  //boca2 = 190
  //} else if (boca1 == 30 && mouseIsPressed) {

  //boca1 = -10
  //boca2 = 150
  //}
}

// funcion para mover la boca
function mousePressed() {
  if (boca1 == -10) {
    boca1 = 30
    boca2 = 190
  } else if (boca1 == 30) {
    boca1 = -10
    boca2 = 150
  }
}