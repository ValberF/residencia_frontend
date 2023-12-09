function redirectToForm() {
    window.location.href = "./form.html";
}

const buttonRoteiro = document.querySelectorAll(".roteiro-comprar");
buttonRoteiro.forEach(function (button) {
  button.addEventListener("click", function () {
    getRoteiroInfo(button);
  });
});

function setPacote() {
  let destiny = document.getElementById("destino").value;
  let image = document.getElementById("imagem").value;
  let includedTipo = document.getElementById("inclusoTipo").value;
  let includedDiaria = document.getElementById("inclusoDiaria").value;
  let includedCafe = document.getElementById("inclusoCafe").value;
  let price = parseFloat(document.getElementById("preco").value);
  if (
    destiny == "" ||
    image == "" ||
    includedTipo == "" ||
    includedDiaria == "" ||
    includedCafe == "" ||
    price == ""
  ) {
    alert("Preencha todos os campos");
  } else {
    let pacote = document.createElement("div");
    pacote.className = "destinos";

    pacote.innerHTML = `
            <img src="${image}" class="postal">
            <div class="roteiro-destino">${destiny}</div>
            <ul class="roteiro-incluso">
                <li>${includedTipo}</li>
                ${
                  includedDiaria == 1
                    ? `<li>${includedDiaria} diária</li>`
                    : `<li>${includedDiaria} diárias</li>`
                }
                ${
                  includedCafe == "Sim"
                    ? `<li>Café da manhã</li>`
                    : `<li>Sem café da manhã</li>`
                }
            </ul>
            <div class="roteiro-preco">${price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}</div>
            <div class="roteiro-obs">Taxas Inclusas</div>
            <div class="roteiro-parcelamento">Em até 10x sem Juros</div>
            <button class="roteiro-comprar">Comprar</button>
        `;

    let containerDestinos = document.querySelector(".container-destinos");
    containerDestinos.appendChild(pacote);
  }
}

function getRoteiroInfo(button) {
  let destiny =
    button.parentElement.querySelector(".roteiro-destino").textContent;
  let included = Array.from(
    button.parentElement.querySelectorAll(".roteiro-incluso li")
  ).map((li) => li.textContent);
  let price = button.parentElement.querySelector(".roteiro-preco").textContent;

  let json = {
    destiny,
    included,
    price,
  };

  alert(JSON.stringify(json));
  console.log(json);
}
