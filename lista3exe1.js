// Faça um algoritmo que receba uma entrada do usuário e caso
// encontre uma vogal transforme ela em maiúscula (obrigatório usar FOR)
// EX: abelha
// O algoritmo imprime
// AbElhA

let rs = require('readline-sync')

let palavra = rs.question('Insira uma palavra: \n');

let vogais = "aeiou"

let  totalCaracteres = palavra.length;
for(posicao = 0; posicao < totalCaracteres; posicao++) {
    let caracterAtual = palavra.charAt(posicao);
    

    if (vogais.includes(caracterAtual.toLocaleLowerCase())) {
        let antesDaVogal = palavra.slice(0, posicao)
        let vogal = caracterAtual
        let depoisDaVogal = palavra.slice(posicao + 1)

        palavra = antesDaVogal + vogal.toUpperCase() + depoisDaVogal
    } else {
        let antesDaConsoante = palavra.slice(0, posicao) 
        let Consoante = caracterAtual
        let depoisDaConsoante = palavra.slice(posicao + 1)

        palavra = antesDaConsoante + Consoante.toLowerCase() + depoisDaConsoante
    }

}

console.log(palavra)

