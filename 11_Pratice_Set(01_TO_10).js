// * 1. Variables

var Var1="Java Script"   //! Always Try to avoid the var while create variable
let Var2="Node JS"       //* let is used to change the variables values
const Var3="Next Js"       //? const values cannot change or redeclareable

console.log(Var1, Var2, Var3)

//! var create problems in functional scope and block scope.
//? let can be changed but can not re-declared, const neither be changed or redeclared 

//* 2. DataTypes

//? There are Two Types of Datatypes one is primative and other is non-primative

//* primative Datetypes
let PDtype1=true                    //*Boolean
let PDtype2=105918467078n      //*BigInt
let PDtype3=null      //*   Null
let PDtype4=78      //*   Number
let PDtype5="BSC"      //*   String
let PDtype6=Symbol(1059)      //*   Symbol
let PDtype7=undefined      //*   Undefined

console.log(PDtype1,typeof PDtype2, PDtype3, PDtype4, PDtype5,typeof PDtype6, PDtype7)

//* Non-primative Datatypes

let NPDtype1={             //* object
    Name:'Object'
}
let NPDtype2=function Func(){
    console.log("Function")                //* function
}
let NPDtype3=["Array"]        //*array


console.log(NPDtype1, NPDtype2, NPDtype3)


//* 3. Type Conertions

let Str1='1059'

let StrToNum=Number(Str1)  //* this convert into number

console.log(Str1, typeof Str1)
console.log(StrToNum,typeof StrToNum)

let Num=100

let NumToStr=String(Num)  //* this convert to string

console.log(Num, typeof Num)
console.log(NumToStr,typeof NumToStr)

let Str2="0"  //! any thing written in string is converted into true and empty string is converted into false
let Num2=1    //! except 0 every thing in number is true and only 0 value is false     
let Bool1=Boolean(Str2)
let Bool2=Boolean(Num2)

console.log(Str2, typeof Str2)
console.log(Num2, typeof Num2)
console.log(Bool1, typeof Bool1)
console.log(Bool2, typeof Bool2)
console.log("----------------------------------------------------------------------------------");

//* 4. Comparison 

let Com1=100
let Com2="100"
let Com3=1
let Com4="1"
let Com5=true
let Com6=0
let Com7="0"
let Com8=false
let Com9=null

console.log(Com1==Com2)
console.log(Com1===Com2)
console.log("----------------------------------------------------------------------------------");
console.log(Com3==Com4)
console.log(Com4==Com5)
console.log(Com3==Com5)
console.log(Com3===Com4)
console.log(Com4===Com5)
console.log(Com3===Com5)
console.log("----------------------------------------------------------------------------------");
console.log(Com6==Com7)
console.log(Com6==Com8)
console.log(Com6==Com9)
console.log(Com7==Com9)
console.log(Com8==Com9)
console.log("----------------------------------------------------------------------------------");
console.log(Com6===Com9)
console.log(Com6===Com8)
console.log(Com6===Com7)
console.log(Com7===Com9)
console.log(Com7===Com8)
console.log(Com8===Com9)
console.log("----------------------------------------------------------------------------------");





