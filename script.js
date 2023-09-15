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

//Abri nova Aba//
const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    window.open(link.href, "_blank");
  });
});

//Copiar
// Função para copiar o texto para a área de transferência
//function copiarTexto() {
//  var senhaGerada = document.getElementById("senhaGerada").textContent;
//
//  var textarea = document.createElement("textarea");
//  textarea.value = senhaGerada;
//
//  document.body.appendChild(textarea);
//  textarea.select();
//  document.execCommand("copy");
//  document.body.removeChild(textarea);
//
//  // Exiba uma mensagem ou efeito de feedback de que a senha foi copiada
//  alert("Senha copiada para a área de transferência!");
//}
//
//document.getElementById("copiarSenha").addEventListener("click", copiarTexto);
