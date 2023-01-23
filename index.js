const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
   card.setAttribute("style", "background-color: #ff6600");
});

const titulos = document.querySelectorAll(".titulo-card");

for (let i = 0; i < titulos.length; i++) {
  let titulo = titulos[i];

  titulo.setAttribute("style", "color: #2b385b; margin-top: 20px");
}

titulos.forEach((titulo) => (titulo.innerHTML = "Meu Card"));

const descricoes = document.querySelectorAll(".descricao-card");

for (const descricao of descricoes) {
  descricao.setAttribute("style", "color: white; margin: 30px 0");
}

descricoes.forEach(
  (desc) => (desc.textContent = "Descrição modificada pelo JavaScript")
);

const botaoEditar = document.querySelectorAll(".botao-editar");

botaoEditar.forEach((botao) => {
  botao.setAttribute(
    "style",
    "background-color: green; padding: 8px; border-radius: 6px; border: none; color: white; cursor: pointer"
  );
});

const botaoApagar = document.querySelectorAll(".botao-apagar");

botaoApagar.forEach((botao) => {
  botao.setAttribute(
    "style",
    "background-color: red; padding: 8px; border-radius: 6px; border: none; color: white; cursor: pointer"
  );
});

botaoEditar.forEach((botao) => {
    botao.onclick = editarCard;
 });

function editarCard() {
  alert("Clicou no botão editar");
}

botaoApagar.forEach((botao) => {
  botao.addEventListener("click", apagarCard);
});

function apagarCard() {
  console.log("Clicou em apagar");
  const confirmacao = confirm("Você tem certeza?");
  console.log(confirmacao);
  
  if (confirmacao) {
    alert("Confirmou");
  } else {
    alert("Cancelou");
  }
}
