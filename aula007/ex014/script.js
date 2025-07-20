let num = [5, 8, 4];
console.log(num)
num[3] = 6 // adiciona um item no indice 3 com o valor 6
console.log(num)
num.push(7)//adiciona um item no arry com o valor 7
console.log(num)
num.sort()//colocando na ordem
for (var i = 0; i < num.length; i++){// for comum
    console.log(num[i])
}
for (var i in num){//for simplificado
    console.log(num[i])
}