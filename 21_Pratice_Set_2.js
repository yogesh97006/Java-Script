//? objects
/*
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

// console.log(Addition(99,1));
// console.log(Addition());
// console.log(Addition());
// console.log(Addition(Num1,Num2));

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

*/

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