let a=10                                //* This is a Global Scope
var b=100    
let c=1000
var d=10000     
let e=100000                   
var f=1000000                   

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)


{                                            //* This is Block Scope
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
    console.log(f)
    
    a="JS"                             //*  Hear You are Updating Values Which are in gobal Scope 
    b="Node"
    let c="C++"
    var d="C"                                //* Hear we can redeclare the value but it can be used in block scope only
    // var e="Java"                        //* out of block scope it re-takes global scope value 
    let f="Python"                   //* you can re-declare var variable but cannot redeclare let variable in blockk scope

    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
    console.log(f)
}

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)