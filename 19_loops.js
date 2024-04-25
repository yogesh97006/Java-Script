let b=0

console.log(b)
for(let i=0;i<=b;++i){
    console.log(b,i)
    if(50==b){
        continue
    }
    else if(100==i){
        break
    }
    b=1+i
    console.log(b,i)
}
console.log(b)
