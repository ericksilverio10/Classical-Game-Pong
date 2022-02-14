function setup() {
    createCanvas(600, 400);
  }
  //variáveis bolinha
  let xBolinha = 300; //Eixo x
  let yBolinha = 200; //Eixo y
  let dBolinha = 20; //Diâmetro
  let velocidadeXBolinha = 6;
  let velocidadeYBolinha = 6;
  
  //variávies raquete
  let xRaquete = 5; //eixo x
  let yRaquete = 150; //eixo y
  let alturaRaquete = 90; //altura
  let larguraRaquete = 10; //largura
  let velocidadeYRaquete = 10; //velocidade
  let chanceDeErrar = 0;
  
  let colidiu = false;
  
  //variáveis do oponente:
  let xRaqueteOponente = 585;
  let yRaqueteOponente = 150;
  let velocidadeYOponente;
  
  //placar do jogo
  let meusPontos = 0;
  let pontosOponente = 0;
  
  function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    colidir()
    mostraRaquete(xRaquete,yRaquete);
    movimentaRaqueteCima();
    movimentaRaqueteBaixo();
    colisaoRaqueteBiblioteca(xRaquete,yRaquete);
    colisaoRaqueteBiblioteca(xRaqueteOponente,yRaqueteOponente);
    mostraRaquete(xRaqueteOponente,yRaqueteOponente);
    movimentaRaqueteOponente();
    incluiPlacar();
    marcaPonto();
  
  }
  function mostraBolinha(){
    circle(xBolinha,yBolinha,dBolinha);
  }
  function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
  }
  function colidir(){
      if (xBolinha > width - 10 || xBolinha < 10){
      velocidadeXBolinha *= (-1);
    }
    if (yBolinha > height - 10 || yBolinha < 10){
      velocidadeYBolinha *= (-1);
    }
  }
  function mostraRaquete(x,y){
    rect(x, y,larguraRaquete,alturaRaquete);
  }
  function movimentaRaqueteCima(){
    if(keyIsDown(UP_ARROW)){
    yRaquete -= velocidadeYRaquete;
  }
  }
  function movimentaRaqueteBaixo(){
    if(keyIsDown(DOWN_ARROW)){
    yRaquete += velocidadeYRaquete;
    
  }
  }
  function colisaoRaqueteBiblioteca(x,y){
    colidiu = collideRectCircle(x,y,larguraRaquete,alturaRaquete,xBolinha,yBolinha,10);
    if(colidiu == true){
      velocidadeXBolinha *= (-1);
    }
  }
  function movimentaRaqueteOponente(){
    velocidadeYOponente = yBolinha - (yRaqueteOponente - 20) - larguraRaquete / 2 - 30
    yRaqueteOponente += velocidadeYOponente + chanceDeErrar;
  }
  
  
  function incluiPlacar(){
    textAlign(CENTER)
    fill(255);
    textSize(45)
    textFont('Georgia')
    text(meusPontos, 150, 45);
    text('-', 300,45);
    text( pontosOponente, 450, 45);
  }
  function marcaPonto(){
    if (xBolinha > 590){
      meusPontos += 1;
    }
    if (xBolinha < 10){
      pontosOponente +=1;
    }
  }
  