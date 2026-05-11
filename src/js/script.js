const itens = [];
document.querySelector("input[type=submit]").addEventListener("click", () => {
  // alert("Clicado");
  const nomeProduto = document.querySelector("input[name=nome_produto]").value;
  const precoProduto = document.querySelector(
    "input[name=valor_produto]",
  ).value;

  itens.push({
    nome: nomeProduto,
    valor: precoProduto,
  });

  alert(itens[0].nome);
});
