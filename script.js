const form = document.querySelector(".form");
const input = document.querySelector("#input");
const tarefas = document.querySelector(".tarefas");
const container = document.querySelector(".container");
let li1;


function contarLi() {
  li1 = document.querySelectorAll("li");
  console.log(li1.length);
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
    contarLi();
  }
  salvarLista();
});

function salvarLista() {
  const listaDeTarefas = document.querySelectorAll("li");
  const lista = [];
  for (let tarefa of listaDeTarefas) {
    let tarefasText = tarefa.innerText;
    tarefasText = tarefasText.replace("Apagar", "").trim();
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
  const li = document.createElement("li");
  li.innerHTML = inputText;
  tarefas.appendChild(li);
  criarBtnApagar(li);
  salvarLista();
  contarLi();
  media();
}

function media() {
  if (li1.length === 7) {
    
  }
}
