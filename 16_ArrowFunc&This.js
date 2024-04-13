let Obj1={
    Name:"Js",
    Role:"Developer",
    Duration:"4-Weeks",
    Company:"Certified",
    All:function(){
        let Lives="Hyd"
        console.log(`I am a ${this.Name} ${this.Role} and the duration is ${this.Duration} and its a ${this.Company} Company and Based in ${Lives}`)
        console.log("---------")
        console.log("---------")
        console.log("---------")
        console.log("---------")     //* For object key or variables we have to write " this " for any variable without this also works 
        console.log("---------")
        console.log("---------")
        console.log("---------")
        console.log("---------")
        console.log("---------")
        // console.log(`I am a ${Name} ${Role} and the duration is ${Duration} and its a ${Company} Company and Based in ${Lives}`)  
        console.log(this);   //* it will give u what can you access in this obj
        // console.log(this.All)        //*it will give Func
        // console.log(this.All())             //* it will excute fun and runs  upto stackoverflow
    }

}

// Obj1.All()


function Func1(){
    let Name="Java_Script"
    console.log(Name)
    console.log(this.Name)
    console.log(this)
}


Func1()

let Func2=function(){        //* hear it is called expression 
    let Name="Java_Script"
    console.log(Name)
    console.log(this.Name)
    console.log(this)                //* hear this throw show some value or ref 

}


Func2()

let Func3=()=>                              //* it is called explesit 
{
    console.log(this)               //* in arrow function this throw empty { obj }        
      return Name="Java_Script"
}

Func3()
console.log(Func3());

let Func4=()=>(console.log(this),{Name:"JS"})            //* for ( ) this we do not need to use return and impliset

Func4()
console.log(Func4());

