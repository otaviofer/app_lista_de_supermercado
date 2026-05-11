const itens = [];
document.querySelector("input[type=submit]").addEventListener("click", () => {
  // alert("Clicado");
  const nomeProduto = document.querySelector("input[name=nome_produto]");
  const precoProduto = document.querySelector("input[name=price]");

  itens.push({
    nome: nomeProduto.value,
    valor: precoProduto.value
  });

  /* 
      <div class="lista-produto-single">
         <h3>RedBull</h3>
         <h3 class="price-produto">R$20,00</h3>
      </div>
      <!--lista-produto-single-->
  */

  let listaProdutos = document.querySelector(".lista-produtos");
  let soma = 0;

  listaProdutos.innerHTML="";
  itens.map(function (val) {
    soma+=parseFloat(val.valor);
    listaProdutos.innerHTML += `
        
      <div class="lista-produto-single">
         <h3>`+val.nome+`</h3>
         <h3 class="price-produto">`+val.valor+`</h3>
      </div>
      <!--lista-produto-single-->
        
        `;
  });

  soma = soma.toFixed(2);
  nomeProduto.value="";
  precoProduto.value="";

  let elementoSoma = document.querySelector('.soma-produto h1');
  elementoSoma.innerHTML = `R$`+soma;
});


document.querySelector("button[name=limpar]").addEventListener('click', () => {
  itens.length = 0; // Isso esvazia o array atual sem mudar a referência
  document.querySelector(".lista-produtos").innerHTML = "";
  document.querySelector('.soma-produto h1').innerHTML = "R$0,00";
});