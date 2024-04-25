let a=10

while(a<=100){
    let b=1
    //  console.log(`the value of ${b} is ${a}`)
     a=a+10
     ++b
}


do{
    // console.log(a)
    a--
}while(a>=50)


//? for of loop

let val1="Java_Script"
let Val2=[100, 200, 300, 400, 500]

for(let Val of val1){
    // console.log(Val)
}
for(let Val of Val2){
    // console.log(Val)
}


let map=new Map()
map.set("Cource_1","JS" )
map.set("Cource_2", "C++")
map.set("Cource_3","Java" )
map.set("Cource_4", "Python")
map.set("Cource_5","Ruby" )

// console.log(map, typeof map);

for (const [K,V] of map) {    //? we can put in array key value seprate in map object created by new key word
     console.log(K,V)
}

let obj1={
    name1:'js',
    name2:'java',
}

// for (const names of obj1) {
//     console.log(names);
// }               //! it is not iteravable  using forof


for (const k in obj1) {
 console.log(k,obj1[k]);
}


for (const key in Val2) {
  console.log(key,Val2[key]);
}



//? forEach

Val2.forEach((val,i,a)=>{
    console.log(val,i,a)
})


function det(val){
    console.log(val)
}

Val2.forEach(det)


let arr2=[
{
    name:'js',
    ext:"js",
    role:'web'
},
{
    name:'java',
    ext:"java",
    role:'java'
},
{
    name:'python',
    ext:"py",
    role:'web'
},
]

function deatils(v1){
    console.log(v1.name);
    console.log(v1.ext);
    console.log(v1.role);
}

arr2.forEach(deatils)

