// // Exercicio 1

function exercicio01() {

    let idade = prompt("Qual a sua idade?");

    if (idade >= 18) {
        if (idade >= 60) {

            alert("Idoso")
        }

        alert("Voce e maior de idade!");

    } else {

        alert("Va pra super nani!");



    }
            adicionarLog();
}

// Exercicio 2
// ...

function exercicio02() {

    let idade = prompt("Digite um numero?");

    if (idade >= 0) {

        alert("o numero e positivo");

    } else {

        alert("O numero e negativo");

        adicionarLog();

    }

}



// Exercicio 3
// //...

function exercicio03() {

    let Nota = prompt("Digite a nota do aluno");

    if (Nota >= 60) {

        alert("Aprovado");

    } else {

        alert("Reprovado");

        adicionarLog();

    }

}


// Exercicio 4
// ...

function exercicio04() {

    let numero = prompt("digite um numero");

    if (numero > 0) {

        alert("o numero e positivo");

    } else {

        if (numero == 0) {

            alert("o numero e zero");

        } else {

            alert("o numero e negativo");

            adicionarLog();

        }

    }
}



// Exercicio 5
// ...

function exercicio05() {

    let idade = prompt("digite sua idade");

    if (idade > 0 && idade < 12) {

        alert("voce e uma crianca");

    } else {

        if (idade > 12 && idade < 17) {

            alert("voce e um adolescente");

        } else {

            if (idade >= 18) {

                alert("voce e um adulto");

                adicionarLog();
            }
        }
    }


}


// Exercicio 6
// ...

function exercico06() {

    let numero = prompt("digite um numero");

    if (numero % 2 == 0) {

        alert("o numero e par");

    } else {

        alert("o numero e impar");

        adicionarLog();

    }

}


// nivel intermediario Exercicio 1
// ...

function exercicio001() {

    let numero1 = Number(prompt("insira o primeiro numero:"));

    let numero2 = Number(prompt("insira o segundo numero:"));
    let operacao = prompt("digite a operacao (+, -, *, /,:");

    if (operacao == "+") {

        let resultado = numero1 + numero2;
        alert(resultado);

    } else {
        if (operacao == "-") {

            let resultado = numero1 - numero2;
            alert(resultado);
        } else {

            if (operacao == "*") {

                let resultado = numero1 * numero2;
                alert(resultado);

            } else {

                if (operacao == "/") {

                    let resultado = numero1 / numero2
                    alert(resultado);

                    adicionarLog();


                }

            }

        }

    }


}


// nivel intermediario Exercicio 2
// ...

function exercicio002() {


    let usuario = prompt("digite o nome do usuario:");
    let senha = prompt("digite a senha:");

    if (usuario === "adm" && senha === "1234") {

        alert("login bem sucedido");

    } else {

        alert("acesso negado");

        adicionarLog();

    }

}

