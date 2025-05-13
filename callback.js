function delay(tempo) {
    const fim = Date.now() + tempo
    while (Date.now() < fim){
        //esperar
    }
    return
}

console.log(1)

function pedirPizza(callback, sabor){
    console.log(`Fazendo uma pizza de sabor ${sabor}`)
    setTimeout(()=>{console.log('Pizza Pronta')
        callback()
    }, 5000)
}

function comerPizza(){
    console.log('Comendo Pizza')
}
pedirPizza(comerPizza, 'calabresa')

console.log(3)


function  passo1(callback){
    setTimeout(()=>{
        console.log('passo3')
        callback()
    }, 2000)
}

passo1(()=> {
    passo2(()=>{
        passo3(()=>{console.log("fim")})
    })
})