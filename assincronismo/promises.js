function login(usuario, senha ){
    return new Promise((resolve, reject)=>{
        //executar função assincrona
        setTimeout(()=> {
        if(usuario == 'Bruno' && senha == 'Receba300'){
            resolve('Logado com sucesso!')
        } else {
            reject('Erro')
        }
    }, 2000)
    })
}
const result = login('Bruno', 'Receba300')
console.log(result)
result.then(msg => console.log(msg)).catch(err => console.log(err))


const tarefa1 = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve('tarefa 1')
    }, 2000);
})

const tarefa2 = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve('tarefa 1')
    }, 2000);
})

const tarefa3 = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve('tarefa 1')
    }, 2000);
})

Promise.all([tarefa1, tarefa2, tarefa3]).then(
    resultado => console.log('a primeira a terminar foi: ', resultado)
    )