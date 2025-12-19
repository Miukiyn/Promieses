// Vamos fazer com que qualquer função retorne uma Promise.

/**
 * Neste caso temos duas funções callbacks síncronas chamadas 'erroCallBacks' e
 * 'callBack'. Elas retornarão um objeto com a propriedade 'name' e 'message'.
 */
const myName = 'Alan';

function whoAreYouCallBack(callBack, errorCallback) {
    //Para retornar uma promise adicionamos return new Promise(função anônima) com callbacks de parâmetro da função anônima.
    return new Promise((resolve, reject))
    if(myName != 'Alan') { 
        reject({
            name: 'Algo deu errado',
            message: myName + ' não é meu nome.'
        })
    }else{
        resolve({
                name: myName,
                message: 'Olá, mundo!'
            });
    }
}

whoAreYouCallBack()
    .then((result) =>{
    console.log(result.name + "? sou eu! " + result.mensage);
}, (erro) =>{
    console.log(error.name + '. ' + erro.mensage);
})

// Output: Alan? Sou eu! Olá Mundo!