let n=0
let max=1000
let pares=0

while(n<max){
    console.log("samuel " + n)
    if(n>10){
        break;
    }
    n++
}
console.log("fim do programa")

for(let i=n;i<max;i++){

    if(i%2!=0){
        continue
    }
    pares++
}
console.log("fim")