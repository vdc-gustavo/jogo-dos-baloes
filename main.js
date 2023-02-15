var total = 0;

function criarBalao() {
  var balao = document.createElement("div");
  balao.setAttribute("class", "balao");

  var x = Math.floor(Math.random() * 800);
  var y = Math.floor(Math.random() * 600);

  balao.setAttribute("style", "left:" + x + "px; top:" + y + "px;");
  balao.setAttribute("onclick", "estourar(this)");

  document.body.appendChild(balao);
}

function estourar(balao) {
  document.body.removeChild(balao);
  total++;
  var score = document.querySelector("h3#total");
  score.innerHTML = `Balões estourados: ${total}`;
}

function carregarJogo(params) {
  setInterval(criarBalao, 1000);
}
