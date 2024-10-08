function gerarSenha(automacao) {
  // Gera a senha
  var dataAtual = new Date();
  var valorSenha =
    dataAtual.getFullYear() -
    (dataAtual.getMonth() + 1) -
    dataAtual.getDate() -
    dataAtual.getHours();

  if (!automacao) {
    valorSenha -= 3;
  }

  var senha =
    dataAtual.getFullYear() +
    "-" +
    (dataAtual.getMonth() + 1) +
    "-" +
    dataAtual.getDate() +
    "-" +
    dataAtual.getHours() +
    (automacao ? "-Auto" : "-Pay");

  // Define um temporizador de 5 segundos
  setTimeout(() => {
    // Apaga o resultado
    document.getElementById("senhaGerada").textContent = "";
  }, 5000);

  // Mostra a senha
  document.getElementById("senhaGerada").textContent = "Senha:" + valorSenha;
}

// Exibe o botão de copiar senha
document.getElementById("copiarSenha").style.display = "inline-block";

document.getElementById("senhaPay").addEventListener("click", function () {
  gerarSenha(false);
});

document
  .getElementById("senhaAutomacao")
  .addEventListener("click", function () {
    gerarSenha(true);
  });

//Abri nova Aba//
const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    window.open(link.href, "_blank");
  });
});

// Função para copiar a senha
document.getElementById("copiarSenha").addEventListener("click", function () {
  var senha = document.getElementById("senhaGerada").textContent;

  if (senha) {
    // Cria um elemento temporário para copiar o texto
    var tempInput = document.createElement("input");
    tempInput.value = senha;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert("Senha copiada: " + senha);
  } else {
    alert("Nenhuma senha gerada para copiar.");
  }
});
