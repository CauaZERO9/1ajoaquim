//Ilha do medo, 16, suspense
//O Rei Leão, LIVRE, aventura, animação
//Cidade de Deus, 16, drama
//De volta pro futuro, 12, ficção, aventura
//Até o último homem, 16, drama, guerra
//Bird box, 12, terror, suspense
//Vingadores: Ultimato, 12, Ação, ficção, aventura
//Bastardos Inglórios, 18, ação, guerra
//Som da liberdade, 16, drama, suspense, ação
//O menino do pijama listrado, 12, guerra, drama
//Monstros S.A, LIVRE, comédia, animação
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let recomendacao = geraRecomendacao();
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(){}