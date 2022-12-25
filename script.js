var nota1;
var nota2;
var nota3;
var nota4;
var resultado;

function calcular(event){
    event.preventDefault();
    nota1 = document.getElementById('nota1').value;
    nota2 = document.getElementById('nota2').value;
    nota3 = document.getElementById('nota3').value;
    nota4 = document.getElementById('nota4').value;
    
    media = (nota1 + nota2 + nota3 + nota4) / 4;
    resultado = document.getElementById('resultado');
    if(media < 7){
        resultado.innerHTML = '<br/> Seu resultado foi ' + media.toFixed(2) + '<br/> Você está reprovado';
    } else if(media >=7){
        resultado.innerHTML = '<br/> Seu resultado foi ' + media.toFixed(2) + '<br/> Você está aprovado, Parabéns';
           
    }
    document.getElementById('media').value = '';
}