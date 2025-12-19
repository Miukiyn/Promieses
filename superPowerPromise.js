// Agora que sabemos usar o Promises, podemos ativar o seu superpoder: Fazer com
// que o código prossiga somento após a execução de uma determinada promise
// e permitindo que voce controle a ordem e quando fará a execução do seu codigo.
// Neste sentido, basta aninhamos o proximo '.then' sendo passado como parâmetro no resultado da promise anterior.

//Neste Exemplo vaos criar duas promises e chamaremos através do método tradicional .then/.catch:

// Criando a primeira promise
function bestF1DriverEver(driver){
    return new Promise((resolve, reject) => {
        if(driver == 'Verstappen'){
            resolve({
                success: true,
                driverName: 'Max Verstappen',
                msg: driver + ' é o melhor piloto de F1 de todos os tempos!'
            });
        }else{
            reject ({
                success: false,
                msg: 'Esse não é o melhor piloto!'
            })
        }
    })
}

// Criando a segunda promise
function bestF1DriverEver(response){
    return new Promise ((resolve, reject) => {
        if(response.success){
            resolve('RB19 pilotada por ' + response.driver);
        }else{
            reject('Resposta errada! Tente de novo');
        }
    });
}

// Chamando uma promise e depois a outra 
bestF1DriverEver('Verstappen')
    .then(response => {
        console.log('Verificando resposta...');
        return bestF1Car(response);
    })
    .then(response => {
        console.log('Encontrando o melhor carro...');
        console.log(response);
    })
    .catch(err => {
        console.log(err.msg);
    })

// output: Verificando resposta...
// output: Encontrando o melhor carro...
// output: RB19 pilotada por Max Verstappen

/**
 * A partir da chamada de mais de uma promise, vai-se criando um aninhamento de '.then'
 * retornando a próxima promise. EM uma chamada de muitas promises, isso pode tornar o código
 * complexo e ilegível.
 */