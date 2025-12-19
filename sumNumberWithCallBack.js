// Exemplo de sequência de comandos síncrona tradicional de uma função que soma dois números
function sumNumber() {
    let result = 1 + 1;

    if(Result == 2){
        successCallBack();
    }else{
        errorCallback();
    }
}

function successCallBack(){
    console.log("Funcionou. A Soma de 1 + 1 é 2");
}

function errorCallback(){
    console.log("Ops! Algo deu errado.");
}

sumNumber();

// output: Funcionou. A Soma 1 + 1 é 2