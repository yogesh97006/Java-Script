let Arr1=[ "Java_Script", "Java", "Python", "Ruby", "Rust", "C++"]



let Arr2=Arr1.forEach((item)=>{
    console.log(item)
    return item
})


console.log(Arr2);

let Arr3=Arr1.filter((val)=>(
 val.startsWith('J')      //? if we write return hear then it will throw error 
))


let Arr4=Arr1.filter((Cources)=>{
    return Cources.startsWith('R')          //? if we do not write return hear then it will throw error 
})

console.log(Arr3);
console.log(Arr4);

let Arr5=Arr1.filter((Cv)=>(Cv))

console.log(Arr5);


let Arr6=[
    {
      Name:"Java_Script",
      Purpose:"Dev",
      Usage:"Web_Developer"
    },
    {
      Name:"Java",
      Purpose:"Dev",
      Usage:"Andiod_Developer"
    },
    {
      Name:"Python",
      Purpose:"AI/ML",
      Usage:"AI Developer"
    },
    {
      Name:"Ruby",
      Purpose:"Dev",
      Usage:"Web_Devloper"
    },
    {
      Name:"C#",
      Purpose:"Game",
      Usage:"Game devloper"
    },
    {
      Name:"Next",
      Purpose:"Dev",
      Usage:"Web_Devloper"
    },
    {
      Name:"DBMS",
      Purpose:"Storage",
      Usage:"DataBase"
    },
    {
      Name:"Git",
      Purpose:"Code Storage",
      Usage:"code Version"
    },
]


let Arr7=Arr6.filter((CD)=>(
    CD.Usage.startsWith("Web")
))

let Arr8=Arr6.filter((CD)=>(
    CD.Usage.endsWith("er")
))

let Arr9=Arr6.filter((CD)=>(
    CD.Usage==="code Version"
))

let Arr10=Arr6.filter((CD)=>(
    CD.Usage.startsWith("Web")&&CD.Purpose==="Dev"
))

let Arr11=Arr6.filter((CD)=>(
    CD.Usage.startsWith("Web")||CD.Purpose==="Dev"
))

console.log(Arr7);

console.log(Arr8);

console.log(Arr9);


console.log(Arr10);

console.log(Arr11);



//? Reduce

//* arr.reduce((acc,curr)=>(acc,curr),0)


let Arr12=[ 100, 200, 300, 400, 500]
let Arr13=Arr12.reduce((acc,curr)=>{
    console.log(`The Current Value of Acc is ${acc} and the Current Value of Curr is ${curr}`);
    return acc+curr
},0)

console.log(Arr13);

let Arr14=[
    {
      Cource:"Frontend",
      Price:4999
    },
    {
      Cource:"Backend",
      Price:4999
    },
    {
      Cource:"Full Stack",
      Price:9999
    },
    {
      Cource:"Andriod Devloper",
      Price:12999
    },
    {
      Cource:"web3 devloper",
      Price:14999
    },
]

let Arr15=Arr14.reduce((acc,cval)=>(
    acc+cval.Price
),0)

console.log(Arr15);