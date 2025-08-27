let num = [5,4,3,2,1]
num.push(6)
num.sort()
//console.log(`Nosso vetor é o: ${num}`)
//console.log(`Nosso vetor tem ${num.length} posições`)
//console.log(`O primeiro valor do vetor é: ${num[0]}`)

for(let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}
let pos = num.indexOf(8)
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor está na posição ${pos}`)
}
