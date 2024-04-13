let Val1=true

if(Val1=="true"){
    console.log("It says Val1=='true' is true");
}
// else if(Val1==1){
//     console.log('It says Val1==1 is true')
// }
// else if(Val1!=="true"&&Val1!==1){
//     console.log("The Val1 values is not equal to true and 1 ")
// }
else if(Val1=="true"||Val1==1){
    console.log("The Val1 is true to the true and 1 ");
}
else if(Val1==="true"||Val1===1){
    console.log("The Val1 is true to the true and 1 ");
}
else{
    console.log("Sorry ");
}



let Val2="Ja"

switch (Val2) {
    case "C++":
        console.log("This Cource is C++ ");
        break;
    case "Java":
        console.log("This Cource is Java");
        break;
    case "Python":
        console.log("This Cource is Python");
        break;
    case "Java_Script":
        console.log("This Cource is Java_Script");
        break;
    case "ML&AI":
        console.log("This Cource is ML&AI");
        break;
    default:
        console.log("No Cource is Selected ")
        break;
}


