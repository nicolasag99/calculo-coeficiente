
function calcularCoeficiente() {
  const prazo = parseInt(document.getElementById("prazo").value);
  const taxaPercent = parseFloat(document.getElementById("taxa").value);

  if (isNaN(prazo) || isNaN(taxaPercent) || prazo <= 0 || taxaPercent <= 0) {
    document.getElementById("resultado").innerText = "Preencha os campos corretamente!";
    return;
  }

  const spf = 0.0304;
  const i = taxaPercent / 100;
  const coeficiente = (i * Math.pow(1 + i, prazo)) / (Math.pow(1 + i, prazo) - 1);
  const coeficienteSpf = (spf/prazo) + coeficiente;

  document.getElementById("resultado").innerText =
    `Coeficiente: ${coeficiente.toFixed(7)}`;

  document.getElementById("resultadoSpf").innerText =
  `Coeficiente com SPF: ${coeficienteSpf.toFixed(7)}`;

}



document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calcularCoeficiente();
    }
    });

//     Calcular o coeficiente: C = (0.01 * (1 + 0.01)^60) / ((1 + 0.01)^60 - 1) = 0.022244.
//     Calcular o valor da parcela: Prestação = 100.000 * 0.022244 = R$ 2.224,44.


