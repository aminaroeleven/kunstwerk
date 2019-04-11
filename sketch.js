function setup() {// functie opzetten
  createCanvas(400, 400);// groote van doek/scherm
}

function draw() {
  background(220);// kleur achtergrond
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);
  noStroke();

  for (teller = 0; teller < 3; teller++) {// plaats van bolllen, drie rijen 


    for (var i = -2; i < 10; i++) {// de lengte van de rijen 
      fill(frameCount % 153, 101, 123)// fill is de kleur van de bollen 
      ellipse(
        50 + 150 * teller + (sin(frameCount / (i + 10)) * (i + 30)),
        100 + (i * 50),
        40,
        40);// hoe de bollen bewegen
    }

  }
}
