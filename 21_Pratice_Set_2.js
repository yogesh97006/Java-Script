//? objects

//* they are two types of object singleton and object literals

//* object literals

let Obj1={
    Cource:"JavaScripte",
    Days:50,
    Details:function(){
        let purpose="web developer"
        return purpose
    }
}

console.log(Obj1);
console.log(Obj1.Cource);
console.log(Obj1["Days"]);
console.log(Obj1.Details);
console.log(Obj1.Details());

// let Obj2=new Object()                 //? single ton is like a blue print we can creat as many object has many

let var1=(function(){
    let instance;

    function object(){
        let obj=new Object('This is a single ton object')
        return obj
    }

    return{
        getInstance:function(){
            if(!instance){
                instance=object()
            }
            return instance
        }
    }

})()

let var2=var1.getInstance()
console.log(var2);

let Obj2={}

console.log(Obj2);

Obj2["Cource"]='Rust'  
// Obj2["Cource"]='JS'  
                       //* This are the two ways to insert the values in obj 
Obj2.Company="Apple"

console.log(Obj2);

Obj2.Deatils=[
    {"Lives":'Hyd'},
    {Role:"Frontend"}
]

console.log(Obj2);

Obj2.Future={
    working:"remotly",
    Role:"Full stack"
}

console.log(Obj2);


let Obj3=Object.assign({},Obj1,Obj2) 

console.log(Obj3)        //* obj3 and obj4 are the two ways to combine the object 

let Obj4={...Obj1,...Obj2}               //* it is using spread methord
 
console.log(Obj4);;


let arr1=[
    {
      Cource:"JS",
      days:30,
      role:"Full stack",
      price:5000 
    },
    {
      Cource:"Java",
      days:50,
      role:"Android developer",
      price: 10000
    },
    {
      Cource:"Python",
      days:45,
      role:"Ai Developer",
      price: 15000
    },
    {
      Cource:"Rust",
      days:5000,
      role:"Web developer",
      price: 5000
    },
    {
      Cource:"soldity",
      days:100,
      role:"Crypto",
      price: 15000
    },
] 

console.log(arr1);

arr1[0].Cource="Java-Script"
arr1[1].role="Backend developer"
arr1.push({Cource:"flutter",days:30,role:"mobile developer",price:5000})

console.log(arr1);
console.log(Object.keys(arr1));
console.log(Object.values(arr1));
console.log(Object.entries(arr1));


let {Cource:c}=Obj1           //* it is called destructing the objects

console.log(c)

//? 13. Functions

function Addition(Num1=15,Num2=35) {
    return Num1+Num2
}

let Num1=450
let Num2=550

console.log(Addition(99,1));
console.log(Addition());
console.log(Addition());
console.log(Addition(Num1,Num2));

function Values(...val){            //* hear ... act has rest parameter and it does not allow deafult initalization
  return val         //* it will return in the form of array
}

console.log(Values( 10, 20, 30, 40, 50, 60, 70, 80, 90));

function ObjFun(Obj){
   return(`The Name of The Cource is ${Obj.Cource} and it will take ${Obj.time} Days to compelation `) 
}
 
let Deatils={
  Cource:"JavaScript",
  time:21
}

console.log(ObjFun(Deatils));
console.log(ObjFun({
  Cource:"Java",
  time:50
}));

function ArrFun(Arr){
  return (Arr[0])  //? it does not matter how many you write it give only one value of last 
}

Arr2=[ 10, 20, 30, 40, 50, 60]

console.log(ArrFun(Arr2));

console.log(ArrFun([ 900, 800, 700, 600, 500, 400]));







//?  Block Scope and Global Scope

let Var3="JavaScript"
                              //* These two are global scope variables
let Var4="15000"

var Var5=100

const Var6="Deatils"

let Var7="C_D"

console.log(Var3," and ",typeof Var3);
console.log(Var4," and ",typeof Var4);
console.log(Var5);
console.log(Var6);
console.log(Var7);

{
  let Var3="Js_Cource"              //* hear i am just declare var3 in a block scope it has nothing to do with global go
  Var4=25000                    //* hear we are updating a global scope vlaue in block one
  // var Var7=210           //* we can not do this
  let Var6=null         //* we can change const to let and let to const from global to block scope and block to global
  const Var7=210
  let Var5="JS"


  console.log(Var3," and ",typeof Var3);
  console.log(Var4," and ",typeof Var4);
  console.log(Var5);
  console.log(Var6);
  console.log(Var7);


}

console.log(Var3," and ",typeof Var3);
console.log(Var4," and ",typeof Var4);
console.log(Var5);
console.log(Var6);
console.log(Var7);




//? 4. Scope_Level and Mini_Hosting

function func1(){

  let CharactaName="Hinata"
   function func2(){
    let AnimeName="Haikyuu"
    return (` The Movie Dumpstar is a Part of ${AnimeName} Anime and its one of main Character is ${CharactaName}`)
  }

  // console.log(AnimeName);
  
  // console.log(func2());


  console.log("This will only print in func1 ");
  //  func2()

  let result=func2()
  return result
  
  // console.log(AnimeName);
}

// console.log(CharactaName);
console.log(func1());      
//* hear func1 is excuting if it has any func inside then it will also excute if itdoesn't return thenit will throw undefined
// console.log(CharactaName);

//* javascript runs line by line



//? Arrow Func and this

let Obj5={
  Anime:"Haikyuu",
  Seasons:4,
  For:"Sports",
  playerslist:[ "setter", "WingSpiker", "WingSpiker", "Ace", "Libroa"],
  more:function(){
      let Next_Movie="Dumpster"
      let All=` The ${this.Anime} Anime is Popular Anime Which has ${this.Seasons} Seasons and its For ${this.For} and the players has certains roles like ${this.playerslist} and the next Movie is ${Next_Movie}`
      console.log(this);
        console.log(All);
        // return All
        // console.log(this.more);
        // console.log(this.more());
        // this.more()
        // console.log(this.more());

    },
  //  output:console.log(this.more()),
}

// console.log(Obj5.more);
// console.log(Obj5);
// console.log(Obj5.more);
// Obj5.more()
// console.log(Obj5.more());


function Func5(){
  let name="Js devs"
  console.log(name);
  console.log(this.name);
  console.log(this);
}

// Func5()

let Func6=function(){                       //* it is called has expression
  let name="Js devs"
  console.log(name);
  console.log(this.name);
  console.log(this);                         //* it will show some refernce
}

// Func6()

let Func7=()=>{
  let name="Js devs"
  console.log(name);
  console.log(this.name);
  console.log(this);                //* hear it will show an empty object
}

// Func7()

let Func8=()=>(console.log("JS"),console.log(this))

// Func8()



//? IIFE

function Work(){
  console.log("this func is working");
}

Work()

function language(lang){
  console.log(` I am Working With ${lang} language`)
}

language("JavaScript");

((l)=>{
  console.log(` This is ${l} language`)
})("JS");

((l)=>(
    console.log(` ${l} is also a language `)
))("Python");

(function oneMore(role){
  console.log(` i am trying to become ${role}`);
})("Web Developer");




//? Control flow

let Var8=true

// if(Var8=="True"){
//   console.log(" hear var 8 is true to True");
// }
// else if(Var8=="true"){
//   console.log(" hear var 8 is true to true");
// }
// else if(Var8==1){
//   console.log(" hear var 8 is true to 1");
// }
// else if(Var8=="true"&&Var8==1){
//   console.log(" hear var 8 is true to true and 1");
// }
// else if(Var8=="True"||Var8==1){
//   console.log(" hear var 8 is true to True or 1");
// }
// else if(Var8=="true"||Var8==0){
//   console.log(" hear var 8 is true to true or 0");
// }
// else if(Var8!=="true"&&Var8!==1){
//   console.log(" hear var 8 is not true to true or 1");
// }
// else if(Var8=="true"||Var8!=="true"){
//   console.log(" hear var 8 is true to true and not equal to true with datatype");
// }
// else if(Var8=="1"||Var8!=="1"){
//   console.log(" hear var 8 is true to 1 and also not equal to 1 with datatype");
// }
// else{
//   console.log(" Try again Later 🙋🙂")
// }

if(Var8=="True"){
  console.log(" hear var 8 is true to True");
}
if(Var8=="true"){
  console.log(" hear var 8 is true to true");
}
if(Var8==1){
  console.log(" hear var 8 is true to 1");
}
if(Var8=="true"&&Var8==1){
  console.log(" hear var 8 is true to true and 1");
}
if(Var8=="True"||Var8==1){
  console.log(" hear var 8 is true to True or 1");
}
if(Var8=="true"||Var8==0){
  console.log(" hear var 8 is true to true or 0");
}
if(Var8!=="true"&&Var8!==1){
  console.log(" hear var 8 is not true to true or 1");
}
if(Var8=="true"||Var8!=="true"){
  console.log(" hear var 8 is true to true and not equal to true with datatype");
}
if(Var8=="1"||Var8!=="1"){
  console.log(" hear var 8 is true to 1 and also not equal to 1 with datatype");
}
else{
  console.log(" Try again Later 🙋🙂")
}


//* switch 

let Var9="P1Y"


switch(Var9){
  case "JS":
    console.log('You selected Js ');
    break;
  case "C":
    console.log('You Selected C');
    break;
  case "GO":
    console.log('You Selected GO');
    break;
  case "C++":
    console.log('You Selected C++');
    break;
  case "C#":
    console.log('You selected C#');
    break;
  case "PY":
    console.log('You selected Py');
    break;
  default:
    console.log(' you putted wrong values');  
}





//?loops

let Var10=100
for(let i=99;i<Var10;--i){
      console.log(Var10,i);
      Var10=Var10-1
      if(Var10==0){
        break;
      }
}

let Var11=50

while(Var11<=100){
   console.log(((100+Var11)/2), " and ", ((100-Var11)/2))
   
   ++Var11
  }

let Var12=100

do{
  console.log(Var12)
  Var12--
  if(Var12==0){
    break
  }
}while(Var12<100)  




  //? for of loop


// let Var13="JavaScript"
let Arr3=[ 100, true, "Java", null, undefined, 1056566n, Symbol(554446)]  
console.log(typeof Arr3);

for ( let char of Var13){
  console.log(char);
}

for ( let char of Arr3){
  console.log(char, typeof char);
}

let map=new Map()

console.log(map);

map.set(0,100)
map.set("a","JavaScript")
map.set(true,false)
map.set(null,null)
map.set(undefined,)

console.log(map);

for( let char of map){
  console.log(char, typeof char);          //* it will show key and value in array format
}


for (let [char] of map){        //* char will print keys
  console.log(char, typeof char);
}

for (let [,char] of map){            //* hear char will print values beacuse we put , before 
  console.log(char, typeof char);
}

for (let [charKey,charVal] of map){                              //* this will print  key and value sprately
  console.log(charKey,typeof charKey ,charVal, typeof charVal);
}



let Obj6={
  Name:"JS",
  Days:50
}

for(let i of Obj6){
   console.log(i);
}

for(let i in Obj6){
  console.log(i,typeof i,",",Obj6[i],typeof Obj6[i]);
}

Arr3=[ 100, true, "Java", null, undefined, 1056566n, Symbol(554446)]  

for (let i in Arr3){
  console.log(i,Arr3[i], typeof i,typeof Arr3[i]);
}


Arr3.forEach((Value,Index,Array)=>{
  console.log("<----!😄!----->");
  console.log(Value);
  console.log(Index);
  console.log(Array);
})




function print(p){
  console.log(p);
}

Arr3.forEach(print)


let Arr4=[
  {
    Cource_Name:"JavaScript",
    Cource_Duration:30,
    Cource_Fees:4999,
  },
  {
    Cource_Name:"Java",
    Cource_Duration:50,
    Cource_Fees:9999,
  },
  {
    Cource_Name:"Python",
    Cource_Duration:45,
    Cource_Fees:8999,
  },
  {
    Cource_Name:"Solidity",
    Cource_Duration:100,
    Cource_Fees:20000,
  },
  {
    Cource_Name:"C#",
    Cource_Duration:30,
    Cource_Fees:4999,
  },
]

function ObjDeatils(Obj){
     console.log(Obj.Cource_Name);  
     console.log(Obj.Cource_Duration);  
     console.log(Obj.Cource_Fees);
     console.log(` The Cource Name is ${Obj.Cource_Name} and the Cource Duration is ${Obj.Cource_Duration} Days and the Cource fees is ${Obj.Cource_Fees}`);  
}


Arr4.forEach(ObjDeatils)
