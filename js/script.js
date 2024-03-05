// Efeito do botão voltar ao Topo
function topo() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

// Validar Login
function login() {
  var logado = 0;
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;

  if (usuario === 'admin' && senha === '123456') {
    window.location.href = "index.html";
    logado = 1;
  }

  if (logado === 0) {
    alert("Acesso Negado. Dados incorretos");
  }
}


// Ativar alerta no botão cadastrar
function cadastro() {
  alert("Cadastrado com sucesso!");
  window.location.href = "index.html";
}
