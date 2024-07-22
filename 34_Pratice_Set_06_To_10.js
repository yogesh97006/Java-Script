//*             6)  Heap and Stack

//* Stack

//? Primitive DataTypes Store as stack methord in memory

//?  if we creat a new variable and then we assign any other variable which is 
//?  - created before it then we are making a copy of it 

//? so any change happens to that variable it does not effect original value

let Cource="Frontend"

console.log(Cource);

let addCource=Cource

console.log(addCource);

addCource="Full Stack"

console.log(Cource);
console.log(addCource);

//* heap

//? hear nmon-primitive and realtive datatypes are stored in heap form

//? so any variable assigned to new variable then we are giving refernce of that variable to that new variable

//? so any changes happends to that variable it changes the original value too

let CourceDetails={
    Name:"JavaScript",
    Role:"Backend",
    work:"WFH",
    salary:50000
}

console.log(CourceDetails);

let MoreCourceDeatils=CourceDetails

console.log(MoreCourceDeatils);

MoreCourceDeatils.Role="Full Stack Developer"
MoreCourceDeatils.work="Work From Office"
MoreCourceDeatils.Place = "Gurugram"
MoreCourceDeatils.salary = 100000

console.log(MoreCourceDeatils);

console.log(CourceDetails);
console.log(MoreCourceDeatils);


//*              7)   String Methords

let Cource1="JavaScript"

let Cource2=new String("JAVA")

console.log(Cource1, " ", Cource2);
console.log(typeof Cource1, " ", typeof Cource2); 

let Cource3=String(Cource2)               //* This are The type Coverstion of sytring               
console.log(Cource3, typeof Cource3);

let Cource4=Cource2.toString()               //* This are The type Coverstion of sytring
console.log(Cource4, typeof Cource4);

let Cource5 = `${Cource2}`               //* This are The type Coverstion of sytring
console.log(Cource5 ,typeof Cource5);

console.log(Cource1.charAt(4));
console.log(Cource1.startsWith("J"));
console.log(Cource1.startsWith("j"));
console.log(Cource1.endsWith("t"));
console.log(Cource1.endsWith("T"));

console.log(Cource1.concat(Cource2));
console.log(Cource1.includes("a"));
console.log(Cource1.indexOf("S"));
console.log(Cource1.substring(4));
console.log(Cource1.slice(0,4));
console.log(Cource1.split(""));
console.log(Cource1.replace("script",""));
console.log(Cource1.replace("script","_script"));
console.log(Cource1.replace("Script",""));
console.log(Cource1.replace("Script","_Script"));
console.log(Cource1.length);



//*             8)     Numbers

let Num1=1000

let Num2=new Number(5000)

console.log(Num1," ", typeof Num1);
console.log(Num2," ", typeof Num2);

let Num3=parseInt(Num2)
console.log(Num3 , " ", typeof Num3);

console.log(Num1.toFixed(2));
console.log(Num3.toFixed(2));
console.log(Num3.toPrecision(10));
console.log(Num3.toExponential(10));
console.log(Num3.toLocaleString());
console.log(Num3.toString(5));
console.log(Num3.valueOf());

console.log(Math.min(1000,50, 2000, 300, 400, 500));
console.log(Math.max(1000, 200, 3500, 4000, 5.00));
console.log(Math.round(99.499999));
console.log(Math.floor(99.999999));
console.log(Math.ceil(99.999999));
console.log(Math.round(99.999999));
console.log(Math.sqrt(49));
console.log(Math.sqrt(64));
console.log(Math.sqrt(100));
console.log(Math.random()*10);



//*              9)            Date and Time

let date = new Date()

console.log(date);
console.log(date.toString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toTimeString());
console.log(date.toLocaleDateString());
console.log(date.toDateString());


let dateThisYear = new Date("2024-01-01")

console.log(dateThisYear);
console.log(dateThisYear.getMonth());
console.log(dateThisYear.getDate());
console.log(dateThisYear.getDay());
console.log(dateThisYear.getTime());


//*               10)   Arrays

let Arr1 = [ "JS", "JAVA", "Python", "Rust", "Ruby"]

console.log(Arr1);

let ArrPush = Arr1.push("C++")
console.log(ArrPush);
console.log(Arr1);

let ArrPop = Arr1.pop()
console.log(ArrPop);
console.log(Arr1);

let ArrUnshift = Arr1.unshift("Golang")
console.log(ArrUnshift);
console.log(Arr1);

let ArrShift = Arr1.shift()
console.log(ArrShift);
console.log(Arr1);

let Arr2=Arr1.slice(1,4)
console.log(Arr2);
console.log(Arr1);

let Arr3 = Arr1.splice(1,3)
console.log(Arr3);
console.log(Arr1);

let Arr4 = [ "JS", "JAVA", "Python", "C#"]
let Arr5 = [ "Web-Development", "Andriod-Development", "Artifical Intellgence", "Game Development"]

let Arr6=Arr4.concat(Arr5)
console.log(Arr6);

let Arr7 = [...Arr4,...Arr5]        //* hear ... is called has spread operator
console.log(Arr7);

let Arr8 = [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, [10, 11, 12, [13, 14, [15]]]]]
console.log(Arr8);
console.log(Arr8.flat(Infinity));   //* it is used to make single array which are nested inside one another

let Arr9 = "Java_Script"
let Arr10=Array.from(Arr9)              //* this is used to make array
console.log(Arr10);
console.log(Array.isArray(Arr10));

let Arr11=Array.of(100, 200, 300, 400, 500)              //* this is used to make array from elements
console.log(Arr11);
console.log(Array.isArray(Arr11));                //* this is used to check it is array or not

// console.log(Arr1);
// console.log(Arr1);




















