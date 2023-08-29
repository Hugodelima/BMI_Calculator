



const peso = document.getElementById("peso");
const altura = document.getElementById("altura");

const btnCalcular = document.getElementById("btnCalcular");
const exibirResultado = document.getElementById("resultado");




btnCalcular.addEventListener("click", function(calcularIMC){

    calcularIMC.preventDefault();///nao recarregar pagina quando clicar no botão

	if (peso.value <= 0 || altura.value <=0){
		exibirResultado.textContent = "Por favor, preencha todos os campos com Números!"
		exibirResultado.style.color = "red";
    }else {
		const resultadoIMC = peso.value/ (altura.value ** 2);
		exibirResultado.style.color = "black";
        
        
		if (resultadoIMC <= 18.5){
			exibirResultado.textContent = `Seu IMC é ${resultadoIMC.toFixed(2)}, sendo assim você está abaixo do peso`;//deixar só 2 casas decimais :D
		
		}else if( resultadoIMC >= 18.6 && resultadoIMC <= 24.9){
			exibirResultado.textContent = `Seu IMC é ${resultadoIMC.toFixed(2)}, sendo assim você está no peso ideal meu nobre`;//deixar só 2 casas decimais :D
		}else if ( resultadoIMC >= 25.0 && resultadoIMC <= 29.9){
			exibirResultado.textContent = `Seu IMC é ${resultadoIMC.toFixed(2)}, sendo assim você está levemente acima do peso`;//deixar só 2 casas decimais :D
		}else if ( resultadoIMC >= 30.0 && resultadoIMC <= 34.9){
			exibirResultado.textContent = `Seu IMC é ${resultadoIMC.toFixed(2)}, sendo assim você está na obesidade grau 1`;//deixar só 2 casas decimais :D
        }else if ( resultadoIMC >= 35.0 && resultadoIMC <= 39.9){
			exibirResultado.textContent = `Seu IMC é ${resultadoIMC.toFixed(2)}, sendo assim você está na obesidade grau II(severa)`;//deixar só 2 casas decimais :D
		}else{
			exibirResultado.textContent = `Seu IMC é ${resultadoIMC.toFixed(2)}, sendo assim você está na obesidade grau III(morbida)`;//deixar só 2 casas decimais :D
		}	
    }
});