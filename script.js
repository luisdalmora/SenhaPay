//-----------------------------Senha Pay-------------------------------------------------
document.getElementById("senhaPay").addEventListener("click", function () {
  var dataAtual = new Date();

  // Subtrai os componentes da data e hora para calcular a senha
  var valorSenha =
    dataAtual.getFullYear() -
    (dataAtual.getMonth() + 1) -
    dataAtual.getDate() -
    dataAtual.getHours() -
    3;

  // Formata o valor da senha
  var senha =
    dataAtual.getFullYear() +
    "-" +
    (dataAtual.getMonth() + 1) +
    "-" +
    dataAtual.getDate() +
    "-" +
    dataAtual.getHours() +
    "-3";

  // Exibe o valor da senha
  document.getElementById("senhaGerada").textContent = "Senha: " + valorSenha;
});

//----------------------------Senha Automação-------------------------------------------------
document
  .getElementById("senhaAutomacao")
  .addEventListener("click", function () {
    var dataAtual = new Date();

    // Subtrai os componentes da data e hora para calcular a senha
    var valorSenha =
      dataAtual.getFullYear() -
      (dataAtual.getMonth() + 1) -
      dataAtual.getDate() -
      dataAtual.getHours();

    // Formata o valor da senha
    var senha =
      dataAtual.getFullYear() +
      "-" +
      (dataAtual.getMonth() + 1) +
      "-" +
      dataAtual.getDate() +
      "-" +
      dataAtual.getHours();
    // Exibe o valor da senha
    document.getElementById("senhaGerada2").textContent =
      "Senha: " + valorSenha;
  });
