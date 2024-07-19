 //?              1)     Variables 

var Variable1 = "This is Var Variable"
let Variable2 = 'This is Let Variable'       //? these is how u write the string using quotes 
const Variable3 = `This is Const Variable`   //? they can be single or double or back ticks                          

console.log(Variable1," ", Variable2," ",Variable3)

//*  These three are variables 

 //! var should bee never used because it creates problem in functkions scope and block scope
 //? let and const can not be redeclared but var can be redeclared and let can be reassgined but not const
 //* const neither redeclare or reassgine

var Variable1 = " i am changing"           //? i am redeclaring hear
// let Variable2 = "i am trying to change"          //? these is throwing error
Variable2 = "hear i can change"                 ///? hear it is working
// const Variable3 = "its does not work "
// Variable3 = 'hear it does not work'              //* const neither be reclare or reassgined

console.log(Variable1," ", Variable2," ",Variable3)


//?               2)  DataTypes

//* There are 2 types of DataTypes 
//* Primitive Datatypes (Boolean, BigInt, Number, Null, undefined, String, Symbol)
//* Non-Primitive DataTypes (Objects) => Objects, aarays, function, new keyword objects, Date, Map

//? Primitve DataTypes 

let a = true            //* boolean           
let b = BigInt(2500)         //* bigint
let c = 5000         //*  number
let d = null         //*  null
let e = undefined         //*   undefined
let f = "JavaScript"         //*   string
let g = Symbol(14225)         //*  symbol

//? Non-Primitive DataTypes

let Cources={
    Name:"JavaScript",          //* Objects
    Days:50,
    job:true
}

let Jobs=["Frontend", "Backend", "Fullstack"]    ///* Object Array

let date=new Date()                //* date object

let map=new Map()            //* map object

function objFun(val){
  console.log(val);         //* object Function
}


console.log(typeof objFun);

//?          3) Type Convertions 

let str1="10000"
let str2="100.500"

let STN1=Number(str1)
console.log(STN1,typeof STN1);

let num1=5000

let NTS1=String(num1)
console.log(NTS1, typeof NTS1);

let NTS2=num1.toString()
console.log(NTS2, typeof NTS2);

let NTS3=(19).toString()
console.log(NTS3);

let NTS4 = `${501.255}`
console.log(NTS4, typeof NTS4);


let STN2=parseInt(str1)

let STN3 = parseFloat(str2)
let STN4 = parseFloat("125.689")

console.log(STN2);
console.log(STN3);
console.log(STN4);

let STN5 = +str1

console.log(STN5, typeof STN5);

let str3 = "1"

let num2 = 1

let CTB1 = Boolean(str3)
let CTB2 = Boolean(num2)

console.log(CTB1 , typeof CTB1);
console.log(CTB2 , typeof CTB2);

let CTB3 = !1
let CTB4 = !!1

console.log(CTB3, typeof CTB3);
console.log(CTB4, typeof CTB4);

console.log("-----------------------------------------------------------------------------------------------");

//?                     4)  Comparsions

console.log("a">"b");
console.log("a"<"b");

console.log(1<2);
console.log(1>2);

console.log("-------------------------------------------------");

console.log(1<true);
console.log(1>true);
console.log(1<=true)
console.log(1>=true)
console.log(1==true)
console.log(1===true)

console.log("-------------------------------------------------");

console.log(1>"1");
console.log(1<"1");
console.log(1>="1");
console.log(1<="1");
console.log(1=="1");
console.log(1==="1");














