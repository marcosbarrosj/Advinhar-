// Gerar um número aleatório entre 1 e 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function clicou() {
    // Obter a entrada do usuário
    const num = Number(document.getElementById('numero').value);
    attempts++;
        let resultado= document.getElementById('resultado')


    // Verificar se a entrada do usuário está correta
    if (num === randomNumber) {
        resultado.innerHTML = ` Parabéns! Você acertou o número em ${attempts} tentativas ` ;
    } else if (num < randomNumber) {
        resultado.innerHTML+= `<p> <strong >${num}</strong> Muito baixo! Tente novamente </p>  ` ;
    } else {
        resultado.innerHTML += `<p> <strong >${num}</strong> Muito alto! Tente novamente </p> `;
    }
}

  



