const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector ("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')

const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você não pode contar com isso.",
  "Melhor não te dizer isso agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem que não",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
  "Você nunca este com tanta sorte!",
  "Definitivamente sim!",
  "A estrela!",
];

// console.log(numeroAleatorio)
// clicar em fazer pergunta
function fazerPergunta() {
  if (inputPergunta.value == "") {
    alert("Digite sua pergunta");
    return;
  }

  buttonPerguntar.setAttribute("disabled", true);

  const pergunta = "<div>" + inputPergunta.value + "</div>";

  const totalRespostas = respostas.length;
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas);

  console.log(respostas[numeroAleatorio]);
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio];

  elementoResposta.style.opacity = 1;
  // sumir a resposta depois de 3 segundos
  setTimeout(function () {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000);
}
