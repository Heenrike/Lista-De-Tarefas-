const form = document.querySelector(".form");
const input = document.querySelector("#input");
const tarefas = document.querySelector(".tarefas");
const container = document.querySelector(".container");
let li; // Declaração da variável 'li'

function containerAll() {
  const height = container.offsetHeight;
  console.log(height);
  if (height === 602) {
    container.style.margin = "100px 0px";
  }
}

function contarli() {
  li = document.querySelectorAll("li");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputText = input.value;
  if (inputText !== "") {
    criarTarefa(inputText);
  }
  input.value = "";
  input.focus();
});

function criarBtnApagar(li) {
  li.innerHTML += " ";
  const btnApagar = document.createElement("button");
  btnApagar.innerHTML = "Apagar";
  btnApagar.setAttribute("class", "btnApagar");
  li.appendChild(btnApagar);
}

document.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("btnApagar")) {
    el.parentElement.remove();
    contarli();
  }
  salvarLista();
});

function salvarLista() {
  const listaDeTarefas = document.querySelectorAll("li");
  const lista = [];
  for (let tarefa of listaDeTarefas) {
    let tarefasText = tarefa.innerText;
    tarefasText = tarefasText.replace("Apagar", "");
    lista.push(tarefasText);
  }
  let listaJson = JSON.stringify(lista);
  localStorage.setItem("listaJson", listaJson);
}

function addTarefasSalvas() {
  const listaJson = localStorage.getItem("listaJson");
  const lista = JSON.parse(listaJson);
  if (lista) {
    for (let tarefa of lista) {
      criarTarefa(tarefa);
    }
  }
}

addTarefasSalvas();

function criarTarefa(inputText) {
  const novaLi = document.createElement("li");
  novaLi.innerHTML = inputText.trim();
  tarefas.appendChild(novaLi);
  contarli(); // Atualizar a variável 'li' após criar a nova <li>
  criarBtnApagar(novaLi);
  salvarLista();
  containerAll();
}
