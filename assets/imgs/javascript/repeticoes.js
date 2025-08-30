//
function adicionarLog() {

    let divLogs = document.querySelector(".logs"); // seleciona a div

    let tagP = document.createElement("P"); // cria a tag p

    tagP.innerHTML = "Exercicio executado as" + new Date().toDateString() + "as" + new Date().toLocaleTimeString();

    divLogs.appendChild(tagP); // acrescenta a tagP dentro da divLogs.

}

console.log("FOR")
function exercicio021() {

    // Exercicio 1
    debugger
    console.log("DO WHILE SIMPLES");

    do {

        console.log("mostrou o valor na tela, ainda que a condicao seja falsa")

    } while (1 == 2);

    debugger
    for (let contadora = 1; contadora <= 10; contadora++) {

        console.log(contadora);

        adicionarLog();

    }

}

function exercicio022() {

    debugger

    let numero = prompt("digite um numero");
    for (let contadora = 1; contadora <= 10; contadora++) {

        let resultado = contadora * numero

        console.log(resultado)

        adicionarLog();
    }

}

function exercicio023() {

    debugger

    let N = prompt("digite um numero ");
    N = Number(N);

    let soma = 0;

    for (let contadora = 1; contadora <= N; contadora++) {

        soma = soma + contadora;

        console.log(soma)

        adicionarLog();


    }

}

function exercicio011() {

    debugger

    for (let contadora = 0; contadora <= 50; contadora += 2) {

        console.log(contadora);

        adicionarLog();
    }

}

function exercicio013() {

    debugger

    let contadoraWhile = 50;
    while (contadoraWhile >= 0) {

        console.log(contadoraWhile);
        contadoraWhile--;

        adicionarLog();
    }

}

// for (let contadora = 1; contadora <= 5; contadora++); {

//     console.log(contadora);

// }

// console.log.apply("WHILE");
// let contadoraWhile = 1;
// while (contadoraWhile <= 5) {

//     console.log(contadoraWhile);
//      contadoraWhile++;

//  }


