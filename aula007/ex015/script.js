/*parouimpar(15)
function par(n){
    if (n%2 == 0 ){
        return 'Par!'
    }else{
        return 'Ímpar'
    }
}
console.log(par(10))*/
//--------------------------
//recursividade
function fatorial(n){
    if( n == 1){
        return 1;
    }else{
        return n * fatorial(n-1)  
    }
}
console.log(fatorial(5))
