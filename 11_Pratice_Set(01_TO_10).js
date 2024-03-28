// TODO 1. Variables

//* console.log("<<<<<<<<<<<<<<<<<<<<<<<<<--------------- Start----------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

var Var1="Java Script"   //! Always Try to avoid the var while create variable
let Var2="Node JS"       //* let is used to change the variables values
const Var3="Next Js"       //? const values cannot change or redeclareable

console.log(Var1, Var2, Var3)

//! var create problems in functional scope and block scope.
//? let can be changed but can not re-declared, const neither be changed or redeclared 

//* console.log("<<<<<<<<<<<<<<<<------------- End ---------------->>>>>>>>>>>>>>>>>>>>")

//TODO 2. DataTypes

//* console.log("<<<<<<<<<<<<<<<<<<<<<<<<<--------------- Start----------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

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


//* console.log("<<<<<<<<<<<<<<<<------------- End ---------------->>>>>>>>>>>>>>>>>>>>")

//TODO 3. Type Conertions

//* console.log("<<<<<<<<<<<<<<<<<<<<<<<<<--------------- Start----------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

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

//* console.log("<<<<<<<<<<<<<<<<------------- End ---------------->>>>>>>>>>>>>>>>>>>>")

//TODO 4. Comparison 

//* console.log("<<<<<<<<<<<<<<<<<<<<<<<<<--------------- Start----------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

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

//* console.log("<<<<<<<<<<<<<<<<------------- End ---------------->>>>>>>>>>>>>>>>>>>>")

//TODO 5. Heap and Stack

//* console.log("<<<<<<<<<<<<<<<<<<<<<<<<<--------------- Start----------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

let value1='Java Script'    //* this type of datatype stored in the form of stack they only get the copy of values
let value2=value1

console.log(value1)
console.log(value2)

value2="Java"
console.log(value1)
console.log(value2)

let value3={                         //* this type of datatype is stored in the form of heap. 
    Name:"Java Script",       //*it will get the direct refence so any changes happend it will effect directly to original value
    Days:50,
    Job:"Software Developer"
}

let value4=value3

console.log(value3)
console.log(value4)

value4.Job="Full stack Developer"
value4.Days=25
console.log(value3)
console.log(value4)


//* console.log("<<<<<<<<<<<<<<<<------------- End ---------------->>>>>>>>>>>>>>>>>>>>")

//TODO 6.string_Methords

//* console.log("<<<<<<<<<<<<<<<<<<<<<<<<<--------------- Start----------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

let StrMet1="Java Script"

console.log(StrMet1.charAt(5))
console.log(StrMet1.includes("Java"))
console.log(StrMet1.endsWith("t"))
console.log(StrMet1.indexOf("r"))   //* if there is no value then it will print -1 as index values
console.log(StrMet1.replace(" Script"," "))
console.log(StrMet1.search("ava"))
console.log(StrMet1.split(""))
console.log(StrMet1.toLocaleLowerCase())
console.log(StrMet1.slice(5))

console.log("<<<<<<<<<<<<<<<<------------- End ---------------->>>>>>>>>>>>>>>>>>>>")

//TODO 7. Number_Maths

//* console.log("<<<<<<<<<<<<<<<<<<<<<<<<<--------------- Start----------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

let NumMat1=1000000000000000000000000000n

let NumMat2= 10
let NumMat3= 20
let NumMat4= 40
let NumMat5= 60
let NumMat6= 80
let NumMat7= 100

let NumMat8=[100, 200, 300, 400, 500, 600, 700, 800, 900]


console.log(Math.max(NumMat2,NumMat3,NumMat4,NumMat5,NumMat6,NumMat7))
console.log(Math.max(...NumMat8))


console.log(Math.min(NumMat2,NumMat3,NumMat4,NumMat5,NumMat6,NumMat7))
console.log(Math.min(...NumMat8))

console.log(Math.random())
console.log(Math.floor(4.999999))
console.log(Math.ceil(4.01))
console.log(Math.round(4.49))
console.log(Math.round(4.51))

//* console.log("<<<<<<<<<<<<<<<<------------- End ---------------->>>>>>>>>>>>>>>>>>>>")

// TODO 9. Date and Time

//* console.log("<<<<<<<<<<<<<<<<<<<<<<<<<--------------- Start----------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

let DT1=new Date("2025-01-01")
console.log(DT1)
console.log(DT1.toDateString())
console.log(DT1.toLocaleDateString())
console.log(DT1.toString())
console.log(DT1.getTime())
console.log(DT1.getDate())
console.log(DT1.getMonth())
console.log(DT1.getFullYear())


//* console.log("<<<<<<<<<<<<<<<<------------- End ---------------->>>>>>>>>>>>>>>>>>>>")

//TODO 10.Arrays

//* console.log("<<<<<<<<<<<<<<<<<<<<<<<<<--------------- Start----------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

let Arr1=[ 10, 20, 30, 40, 50]
let Arr2=[ "Java", "Python", "C++", "JS"]

let Arr3=[...Arr1,...Arr2]

let Arr4=Arr1.concat(Arr2)

console.log(Arr3)
console.log(Arr4)

console.log(Arr1)
console.log(Arr1.slice(0,4))
console.log(Arr1)
console.log(Arr1.splice(0,4))
console.log(Arr1)


let Str10="Java_Script"

let Arr5=Array.from(Str10)  //* to convert to array
console.log(Array.isArray(Arr5))         //* it is used to check it is array or not

let Arr6=Array.of(Str10,Str1)         //* lot of element to array
console.log(Arr6)
console.log(Array.isArray(Arr6))


//* console.log("<<<<<<<<<<<<<<<<------------- End ---------------->>>>>>>>>>>>>>>>>>>>")


















