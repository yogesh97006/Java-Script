let a="50"

let num=Number(a)

console.log(a,"  " ,num);
console.log(typeof a,"  " ,typeof num);

// *
// * "abc" converted number is a number with NaN (Not a Number)
// * "123" converted number is a number 
// *  null is converted has 0 in number
// *  

let b="j"
let boolean=Boolean(b)

console.log(b, " ", boolean);
console.log(typeof b," ",typeof boolean);

//* 1 and "JS" is true 
//* 0 and "" is false

let c=45
let string=String(c)

console.log(c," ", string);
console.log(typeof c," ", typeof string);

//* any thing is converted into string


console.log("-----------------------------------")
console.log("-----------------------------------")
console.log("-----------------------------------")
console.log("-----------------------------------")

let d=1
let e=0

console.log(d+e," => ", typeof (d+e));

//* string + string is string
//* string + number is string 
//* number + number is  number
//* for more values operation add brackets ex:- ( (a+b)*c%d)

