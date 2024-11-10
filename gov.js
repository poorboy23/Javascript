//prime numbers
showPrimes(10);


function showPrimes(limit){
    if (limit<2){
        return "No primes"
    }else{

        for(let i=2;i<=limit;i++){
           
                let factors=0
                for(let j=2;j<i;j++){
                    if(i%j===0){
                       factors+=1;
                       break; 
                    }
                
                }
                if(factors==0){

                    console.log(i)
                }
                
            }
        
        }
    


}


//objects

let person={
    name:"Govardhan",
    age:23,
    college:"UNT",
    job:function(){
        console.log("iam developer")
    }
}

let person2={
    name:"Keerthi",
    age:22,
    college:"UNT",
    job:function(){
        console.log("iam Kid")
    }
}


//constructor function

function Person(name,age,college){
    this.peru=name;
    this.vayasu=age;
    this.univ=college;
    this.role=function(){
        console.log("Iam a student")
    }

}

const p1=new Person("Govardhan",23,"UNT");

const p2=new Person("Keerthi",22,"UNT");


console.log(p1.peru);
console.log(p2);


//exercise
address={street:"Hanumesh nagar",
    city:"Hyderabad",
    zipcode:5151801
};

showAdrress(address)
function showAdrress(address){
    for(let key in address){
        console.log(key)
    }
}
//constructor funtcion
function  Address(street,city,zipcode){
     this.street=street;
     this.city=city;
     this.zipcode=zipcode;

}

const myaddress1=new Address("20/212b1","Hanumeshnagar","Guntakal");
const myaddress2=new Address("20/212b1","Hanumeshnagar","Guntakal");

console.log(objequal(myaddress1,myaddress2));
console.log(objsame(myaddress1,myaddress2));

function objequal(ad1,ad2){
    for(let key in ad1){
        if(ad1[key] !==ad2[key]){
            return false;
        }
    }
    return true;

}
function objsame(ad1,ad2){
    if(ad1===ad2){
        return true;
    }
   
    return false;

}


//shopping


let priceRanges=[{label:"$",tooltip:"Low price",minprice:0,maxprice:10},
    {label:"$$",tooltip:"med price",minprice:11,maxprice:20},
    {label:"$$$",tooltip:"High price",minprice:20,maxprice:100}
];

let restrents=[{name:"chickfila",avgperperson:4},
    {name:"dominos",avgperperson:15},
    {name:"chowrastha",avgperperson:30},
    {name:"desidistrict",avgperperson:40}];


    // Assuming you have a button with the id "myButton"
let button1 = document.getElementById("b1");
let buttonValue = button1.value ; 
 
const button2 = document.getElementById("b2");
const button3 = document.getElementById("b3");

function handleClick() { 
    let namesHtml = ""

for(let obj of restrents){
    if(obj.avgperperson<10){
        namesHtml +=`<h2>${obj.name}</h2>`
        document.getElementById("text").innerHTML=`<h2>${obj.name}</h2>`
    }
}
}
function handleClick2(){ 
for(let obj of restrents){
    if(obj.avgperperson>10 &&obj.avgperperson<=20){
        document.getElementById("text").innerHTML=`<h2>${obj.name}</h2>`
   }
}
}
function handleClick3(){ 
    let namesHtml = ""
    for(let obj of restrents){
        if(obj.avgperperson>20){
            namesHtml +=`<h2>${obj.name}</h2>`   
       }
    }
    document.getElementById("text").innerHTML=`${namesHtml}`
}

button1.addEventListener("click", handleClick);
button2.addEventListener("click", handleClick2);
button3.addEventListener("click", handleClick3);

//array methods

const types=[1,2,3,4,5];

types.push(1,3);

//for add start
types.unshift("s","a","a");
console.log(types);

//middle
types.splice(0,0,"k","R");
console.log(types);

//for remove at last
types.pop();

//for removing starting ele
types.shift();

//for removing middle
types.splice(2,5)

console.log(types.indexOf(1));
console.log(types.indexOf(1,2));
console.log(types.lastIndexOf(1));

//arrow functions

let courseObjs=[{name:"english",code:"ENG2345"},{name:"Telugu",code:"TEL123"},{name:"english",code:"ENG345"}]

console.log(courseObjs.find((course)=>course.name==="english"));

//emptying array
//1
courseObjs=[]
//2
courseObjs.length=0;
//3
courseObjs.splice(0,courseObjs.length)
//4
while (courseObjs.length>0){

    courseObjs.pop()
}


//concat and slice methods

let courses=[1,3,4,5,6];

let courses2=[4,6,7];

let combined=courses.concat(courses2)

console.log(combined);

let slicedarr=combined.slice(2,4);
console.log(slicedarr)

let abj1=[1,3,4,5,56,6];
let abj2=abj1;
// let abj2=[...abj1];

console.log(abj1)

console.log(abj2===abj1)


//FOR OF

// for(let num of abj1){
//     confir
// }
//iterating over array

abj1.forEach(num=>{

    if (num%2===0){

        console.log(num);
    }
});
//sorting arrays

let numvars=[1,3,5,6,7,80,19,7];

numvars.sort()

console.log(numvars)

console.log("-------")
//sort object

//sort is differnet in javascript it sort lexically using ascii it converts to string and sorts -----
numvars=[{id:1,course:"Javascript"},{id:2,course:"Spring"}]

numvars.sort()

console.log(numvars)
numvars=[1,3,5,6,7,80,19,7,-2];
//filter positve numbers 
const filteredNum=numvars.filter(num=>num>=0);
console.log(filteredNum)
//exercise 
//range


arrayRange(-10,9)
function arrayRange(min,max){
    let resultarray=[]
    for (let i=min;i<=max;i++){
        resultarray.push(i)
    }
    console.log(resultarray)
}


console.log(includes([14,5,6,7,8],5))

//includes
function includes(arr,searchele){

    for(let i of arr){
        if (i===searchele){
            return true;
        }
    }
    return false;

}
let arrn=[1,4,5,6];
let val=arrn.find((num)=> {
    if(num===4){
    return true
}});
console.log(val);