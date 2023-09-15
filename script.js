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
  document.getElementById("senhaGerada").textContent = "Senha: " + valorSenha;
}

document.getElementById("senhaPay").addEventListener("click", function () {
  gerarSenha(false);
});

document
  .getElementById("senhaAutomacao")
  .addEventListener("click", function () {
    gerarSenha(true);
  });
