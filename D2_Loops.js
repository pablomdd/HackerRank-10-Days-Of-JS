s = 'javascriptloops'

function vowelsAndConsonants(s) {
    let consonants = []
    
    for(let i of s){
        if('aeiou'.includes(i))
            console.log(i)
        else
            consonants.push(i)
    }

    for(let i of consonants){
        console.log(i)
    }
}

vowelsAndConsonants(s)
