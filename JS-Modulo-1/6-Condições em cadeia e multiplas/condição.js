var idade = 20
console.log(`Sua idade é de ${idade} anos.`)
console.log('o tipo do seu voto é:')
if(idade < 16){
    console.log('Não vota')
} else if(idade >= 16 && idade < 18){
    console.log('Opcional')
} else if(idade >= 18 && idade < 65){
    console.log('Obrigatorio')
} else if(idade > 65){
    console.log('Opcional')
}
