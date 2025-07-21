
function calcularCoeficiente() {
  const prazo = parseInt(document.getElementById("prazo").value);
  const taxaPercent = parseFloat(document.getElementById("taxa").value);

  if (isNaN(prazo) || isNaN(taxaPercent) || prazo <= 0 || taxaPercent <= 0) {
    document.getElementById("resultado").innerText = "Preencha os campos corretamente!";
    return;
  }

  const i = taxaPercent / 100; // converte para decimal
  const coeficiente = (i * Math.pow(1 + i, prazo)) / (Math.pow(1 + i, prazo) - 1);
//   const coeficiente = i / (1 - Math.pow(1 + i, -prazo));

  document.getElementById("resultado").innerText =
    `Coeficiente: ${coeficiente.toFixed(10)}`;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calcularCoeficiente();
    }
    });


// Suponha que você financiou R$ 100.000,00 com uma taxa de juros efetiva de 1% ao mês, em 60 meses (5 anos). Usando a fórmula: 

//     Calcular o coeficiente: C = (0.01 * (1 + 0.01)^60) / ((1 + 0.01)^60 - 1) = 0.022244.
//     Calcular o valor da parcela: Prestação = 100.000 * 0.022244 = R$ 2.224,44.


