//Ilha do medo, 16, suspense
//O Rei Leão, LIVRE, aventura, animação
//Cidade de Deus, 16, drama
//De volta pro futuro, 12, ficção, aventura
//Até o último homem, 16, drama, guerra
//Bird box, 12, t1-trimestreerror, suspense
//Vingadores: Ultimato, 12, Ação, ficção, aventura
//Bastardos Inglóri1-trimestreos, 18, ação, guerra
//Som da liberdade, 16, drama, suspense, ação
//O menino do pijama listrado, 12, guerra, drama
//Monstros S.A, LIVRE, comédia, animação
let campoIdade;
let campoGuerra;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("");
  campoGuerra = createCheckbox("Gosta de guerra?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("rgb(35,164,199)");
  let idade = campoIdade.value();
  let gostaDeGuerra = campoGuerra.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeGuerra, gostaDeAventura);

  fill(color(0, 0, 0));
  textAlign(CENTER, CENTER);
  textSize(60);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeGuerra, gostaDeAventura) {
  if (idade >= 12) {
    if (idade >= 18) {
      return "Bastardos Inglórios";
    } else {
      if (idade >= 16) {
        if(gostaDeGuerra || gostaDeAventura) {
          return "Até o último homem";          
        } else{
         return "Ilha do Medo";
        }
      } else {
        if (gostaDeAventura) {
          return "Vingadores: Ultimato";
        } else {
          return "De volta pro futuro";
        }
      }
    }
  } else {
    if (gostaDeAventura) {
      return "Monstros S.A";
    } else {
      return "Rei Leão";
    }
  }
}
