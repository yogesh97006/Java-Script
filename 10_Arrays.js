let a=[10, 20, 30, 40, 50]

console.log(a);

a.push(60)
console.log(a);

a.pop()
console.log(a);

a.unshift(0)
console.log(a);


a.shift(0)
console.log(a);


let b=a.join()
console.log(b,typeof b);


console.log(a);
let c=a.slice(1,4)
console.log(1," ",c)
console.log(a);

let d=a.splice(1,4)
console.log(2," ",d)
console.log(a);


let Subjects=["JS", "Java", "Python", "C++"]
let Roles=["Web", "Mach", "AI", "Game Dev"]

let All_Values=Subjects.concat(Roles)
console.log(All_Values);

let All=[...Subjects,...Roles]
console.log(All)

let Values=[10, 20, 30, 40, [50, 60, 70, 80, [90, 100, 110, [120, 130, [140]]]]]

console.log(Values.flat(Infinity))  //* it is used to make a single array it converted nested array or arrays inside array into single array 

let Cource="Java_Script"

console.log(Array.isArray(Cource)) //* isArray is to check it is array or not
let arr=Array.from(Cource)    //* this is used to make an array
console.log(Array.isArray(arr))
let array=Array.of(1,2,3,4,5)  //*  this is used to make an array from elements 
console.log(Array.isArray(array))
console.log(array);