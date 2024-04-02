function Addition(N1=25,N2=25){
    if(N1==undefined||N2==undefined){
        console.log("Please Enter a Number")
        return
    }
    console.log(N1+N2)
    return (N1+N2)
}

// Addition(15,35)
Addition(10,100)
// Addition(40,40)

// console.log(Addition(15,35))


// let result=Addition(15,35)

// console.log(result)


function Values(...Val){   //* hear ... acts as rest not spread
    return Val                   //* it return value in array form 
}

console.log(Values(200, 400, 600, 800, 1000))


Obj1={
    Cource:'Java_Script',
    Days:60,
    Role:"Full_Stack"
}

function ObjFun(Obj){        ///* this fun is for object
    return (`The Cource You are Studing is ${Obj.Cource} and its Duration is ${Obj.Days} Days and After You Can Become a ${Obj.Role} Developer `)
}

console.log(ObjFun(Obj1));
console.log(ObjFun({
    Cource:"C++",
    Days:20,
    Role:"Game"
}));



function ArrFun(Arr){
    return Arr[2]                    //* this func is for arr
}

let Arr1=[ 0, 200, 400, 600, 800, 1000]

console.log(ArrFun([ 100, 300, 500, 700, 900]))