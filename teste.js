let rs = require('readline-sync');

let numberUser = rs.questionInt('Digite um número: \n');

for(let contador = 1; contador <= numberUser; contador++) {
    console.log(`Olá mundo ${contador}`)
}