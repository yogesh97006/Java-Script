//* there are two kind of objects
//*  constructor object (Object.create )  and they are called as singleton


let Sym=Symbol("45ab")


let Obj1={               //* this are object literals
    Name:'Java Script',
    "Roles":"Frontend and Backend",
    Days:50,
    [Sym]:"letsee"         //* this is how any symbol can be used 
}


console.log(Obj1)
console.log(Obj1.Name)             //* there are two ways to access the objects 
console.log(Obj1["Roles"])   
console.log(Obj1.Days)
Obj1.usage="Web-Dev"
console.log(Obj1)
Obj1.Fun=function(){
        console.log(`This ${this.Name} Cource is used for development purposess `)
}

Obj1.Fun2=function(){
    console.log(`This is my Work`)
}

console.log(Obj1.Fun())
console.log(Obj1.Fun2())

Object.freeze(Obj1)  //* this is used to freeze the Object so changed cannot  bee done// Define an object named Obj1


// Add a property called Name to Obj1 and set its value to "Cource

// Add a method called Fun to Obj1
Obj1.Fun = function() {
    // Print a message to the console, including the value of the Name property
    console.log(`This ${this.Name} Cource is used for development purposes`);
}


Obj1.Roles="Full Stack Dev"

console.log(Obj1)


const Obj2=new Object()   //* this is singlelode object

let Obj3={}

console.log(Obj2,Obj3)

Obj3.Cource="Java_Script"
Obj3.Role="Full Stack"


console.log(Obj3);

let Obj4={
    Cource:'Python',
    Role:"Backend Devloper"
}

// let Obj5=Object.assign({},Obj3,Obj4)
let Obj5={...Obj3,...Obj4}

console.log(Obj5)


let Obj6=[
    {
        Name:"Js"
    },
    {
        Name:"Java"
    },
    {
        Name:"Python"
    },
    {
        Name:"C++"
    },
    {
        Name:"Ruby"
    }
]


console.log(Obj6)

Obj6[0].Name="Java_Script"
console.log(Obj6)

console.log(Object.keys(Obj6))
console.log(Object.values(Obj6))
console.log(Object.entries(Obj6))

console.log(Object.keys(Obj5))
console.log(Object.values(Obj5))
console.log(Object.entries(Obj5))

//* destructing objects


let Obj7={
    Name:"Java_Script________________",
    Role:"Full_Stack",
}

let {Name:N}=Obj7

console.log(N)

