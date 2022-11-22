function setup() {
  createCanvas(500, 400);
  //somTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostrarAtor();
  movimentarAtor();
  mostrarCarros();
  movimentarCarro();
  volta();
  verificarColisao();
  verificarPontos();
}



