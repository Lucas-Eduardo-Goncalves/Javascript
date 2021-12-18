var titulo = document.querySelector('h1');
titulo.textContent = 'Banana';

var paciente = document.querySelector("#primeiroPaciente");
var infoPeso = paciente.querySelector(".info-peso");
var infoAltura = paciente.querySelector(".info-altura");

var peso = infoPeso.textContent;
var altura = infoAltura.textContent;

var imc = peso / (altura * altura);

console.log(imc);