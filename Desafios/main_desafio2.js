const botaoCalcular = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

botaoCalcular.addEventListener('click', () => {
	resultado.innerText = 'fui clicado';
});
