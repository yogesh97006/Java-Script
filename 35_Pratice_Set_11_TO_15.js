//*                     11)          Objects
/*

let SymbolVariable = Symbol("12eab")

let Obj1 = {
    Cource : "JavaScript",
    Role : "Full-Stack",
    days:30,
    "work":"remote||hybrid||office",
    SymVal:SymbolVariable,
    [SymbolVariable]:"let see"
}

console.log(Obj1);
console.log(Obj1.Cource);
console.log(Obj1["Cource"]);
console.log(Obj1.work);
console.log(Obj1["work"]);
console.log(Obj1);
console.log(Obj1.SymVal);
// console.log(Obj1["SymbolVariables"]);

Obj1.Deatils = function(){
    console.log(` This ${this.Cource} cource is usable for ${this.Role} Developers and You Can Become a developer in ${this.days} days`);
}

console.log(Obj1);
console.log(Obj1.Deatils());

Object.freeze(Obj1)         //* this is used to freeze the Object so changed cannot  bee done// Define an object named Obj1

Obj1.finish="completed"
console.log(Obj1);

const Obj2=new Object()   //* this is singlelode object

let Obj3={}

console.log(Obj2, Obj3);

Obj2.Cource_1 = "JavaScript"
Obj2.Role_1 = "Frontend"

Obj3.Cource_2="PYTHON"
Obj3.Role_2 = "Backend"
console.log(Obj2, Obj3);

let Obj4 = Object.assign({},Obj2, Obj3)
console.log(Obj4);

let Obj5 = {...Obj2,...Obj3}
console.log(Obj5);

let Obj6 = [
    {
        Name:"js"
    },
    {
        Name:"JAVA"
    },
     {
        Name:"PYTHON"
    }, 
    {
        Name:"RUST"
    },
     {
        Name:"Go"
    },
     {
        Name:"RUBY"
    },
]

console.log(Obj6);
Obj6[0].Name="JAVASCRIPT"
console.log(Obj6);

console.log(Object.keys(Obj6));
console.log(Object.values(Obj6));
console.log(Object.entries(Obj6));

console.log(Object.keys(Obj1));
console.log(Object.values(Obj1));
console.log(Object.entries(Obj1));

//* destructing the value

let Obj7 = {
   
    NamesOfCorcesTellsTheDetailsOfLangauge : "JavaScript",
    DoesIt:true
}

let {NamesOfCorcesTellsTheDetailsOfLangauge:NCDL} = Obj7

console.log(NCDL);

*/

//*             13)              Functions


/*
function Addition(Num1=50,Num2=10){
    if(Num1==undefined||Num2==undefined){
        console.log("please enter a Number");
        return 
    }
    return Num1+Num2
}

// console.log(Addition(100,20))
console.log(Addition("30","30"))
// console.log(Addition())

let anser = Addition(150,150)
console.log(anser);


function ArrayFunc(...val){           //* hear ... acts like rest not spread
    return val                      //* it returns value in array format
}

console.log(ArrayFunc(200,300,400,500,600))

function ObjectFunc(obj){
     return (` In This Func You Can Obj Values To Like ${obj.name}`)
}

console.log(ObjectFunc({name:"JS",Days:30}));

function ArrayFunc2(Arr){
    return Arr[3]
}

console.log(ArrayFunc2([100, 300, 500, 700, 900, 1100]));



*/

//*                  14)           Global And Block


/*

var Var1 = "These is var Var with Global Scope"
let Var2 = "These is let Var with Global Scope"
const Var3 = "These is const Var with Global Scope"

console.log(Var1);
console.log(Var2);
console.log(Var3);

{
    var Var1 = "these is var var with block scope"
    // let Var2 = "these is let var with block scope"
    // const Var3 = "these is const var with block scope"

    // var Var2 = "these is var var with block scope"
    // var Var3 = "these is var var with block scope"
    
    console.log(Var1);
    console.log(Var2);
    console.log(Var3);
}



console.log(Var1);
console.log(Var2);
console.log(Var3);

*/

//*             15)    scoping level and mini hosting


function Func1(){
    let a=100
    function Fun2(){
        let b = 1000
        console.log(` this is a fun inside the fun it has Value ${a} and it wone value ${b}`);
    }
    // console.log(b);
    Fun2()
    // console.log(b);

}

// console.log(a);
Func1()
// console.log(a);


if(true){
    let anime = "Naruto"
    if(anime == "Naruto"){
        let var4= "Haikyuu"
        console.log(`i like to watch anime ${anime} ${var4}`);
    }
    // console.log(var4);
}



