//* Heap and Stack


//* Primative Datatypes stored as stack. in which they get the copy of value it does not effect original value

let  Cource="Java Script"

let Language=Cource

Language="Ruby"

console.log(Cource)
console.log(Language)

//* Non-Primative DataTypes or Relative DataTypes stored as Heap Form 
//* In which they get reference of value so any where changes happends it changes original values

let CourceDetails={
    Language:"JS",
    Role:"Frontend"
}

let Roles=CourceDetails

console.log(CourceDetails)
console.log(Roles);

Roles.Role="Full Stack"
console.log(CourceDetails)
console.log(Roles);

let AllCources=["JS", "Ruby", "Java", "Python", "Rust"]
console.log(AllCources);

let Details=AllCources
console.log(Details)

Details[5]="C++"

console.log(AllCources);
console.log(Details);




