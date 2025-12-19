// Agora vamos refazer o sumNumberWithCallback.js para que desta vez ele retorne uma Primese.
// Esta Promise simplificara o uso dos callbacks.

/**
 * Para isso se cria um 'new' Promise, que é uma classe que retornará um objeto. Na criação
 * desta classe passaremos como parâmetro uma função anônima, que por sua vez receberá 
 * os parâmetros 'resolve' e 'reject'. 
 */
let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if(a == 2){
        resolve('Success');
    }else{
        reject('Failed');
    }
});

// Agora vamos chamar o Promise com o '.then'
p.then((message) =>{
    console.log('Esse é o then: ' + message);
}).catch((err)=> {
    console.log('Esse é o catch: ' + err);
});

// output: Esse é o the: Success

// Caso 'a' tenha outro valor, o retorno será o catch
// output: Esse é o catch: Failed