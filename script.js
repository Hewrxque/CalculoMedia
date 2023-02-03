var n1;
var n2;
var n3;
var n4;
var resultado;

function calcular(event) {
  event.preventDefault();

  n1 = document.getElementById("n1").value;
  n2 = document.getElementById("n2").value;
  n3 = document.getElementById("n3").value;
  n4 = document.getElementById("n4").value;

  media = (Number(n1) + Number(n2) + Number(n3) + Number(n4)) / 4;

  resultado = document.getElementById("resultado");
  if (media < 7) {
    resultado.innerHTML =
      "<br/> Seu resultado foi " +
      media.toFixed(2) +
      "<br/> Você está reprovado";
  } else if (media >= 7) {
    resultado.innerHTML =
      "<br/> Seu resultado foi " +
      media.toFixed(2) +
      "<br/> Você está aprovado, Parabéns";
  }
}
