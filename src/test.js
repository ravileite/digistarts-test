let readline = require("readline")

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let array = []

let orderedElements = () => {
    setElements()
}

let setElements = () => {
    rl.question('Insira um inteiro N (para sair digite exit e pressione ENTER): ', n => {
        if(n === 'exit') process.exit()
        n = parseInt(n)
        if (n < 1 || n > 1000) {
            console.log('Insira um valor maior igual a 1 e menor igual a 1000.')
            setElements()
        } else {
            console.log('Insira agora N inteiros (para sair digite exit e pressione ENTER): ')
            return recursiveAsyncReadLine(1, n)
        }
    })
}

let recursiveAsyncReadLine =  (count, n) => {
    if (count > n){
        return removeDuplicates()
    } 

    rl.question(`Elemento ${count}: `, function (k) {
        if(k === 'exit') process.exit()

        k = parseInt(k)

        if(k < -1000 || k > 1000){
            console.log(`Os elementos do array devem ter valor menor igual a 1000 e maior igual a -1000. Insira o elemento ${count} novamente.`)
            return recursiveAsyncReadLine(count, n)
        }

        array.push(parseInt(k))
        return recursiveAsyncReadLine(count+1, n)
    })
}

let removeDuplicates = () => {
    let map = {}
    for (let i = 0; i < array.length; i++){
        map[array[i]] = array[i]
    }
    
    array = Object.values(map)
    return sortArray()
}

let sortArray = () => {
    array.sort(function (x, y){
        if(x > y) return 1
        if(x < y) return -1
        return 0
    })
    
    console.log('Saída: ')
    array.map(value => console.log(value))
    process.exit()
}

orderedElements()