//console.log("Hi! I am practicing node.js")


 //1 for loop

/* for(i=0;i<100;i=i+1){
let btn="<button>submit</button><br>"
    console.log (btn)
}
for(i=0;i<100;i=i+1){
    console.log (i+"<br/>")
   }
  
   
   2 while loop

   var x=0
while(x<100){
    console.log(x+"from while loop<br/>")
    x=x+1;   
}


3. do while loop
var y=0
do{
    console.log(y+"from do while loop<br/>")
    y=y+1;   
}
while(y<100)

4.regular function

function addTwo(){
    let num1=5;
    let num2=10;
    let sum=num1+num2;
    console.log(sum)
    }
    addTwo()
   
    4. parameter
   
    function addTwo(a,b){
    let num1=a;
    let num2=b;
    let sum=num1+num2;
    console.log(sum)
    }
    addTwo(15,25)
   
    5. function return
   
    function naya (){
       return "hello";
    }
    let res=naya()+5
    console.log(res)
   
    6.Array function

    naya =()=>{
        return "50";
     }
     let res= naya ()+5
     console.log(res)

7.Immediately invoked function (IIF)

( ( )=> {
    console.log("I am IIF")
 })()


8. Anonymous function

  let anygivenname =()=>{
    console.log("I am anonymous")
  }
   anygivenname();

9.a. if

 var age=30;
 if (age>18){
    console.log("you are an adult")
}
    var age=30;
   var city="Dhaka";
   if (age>18 && city=="Dhaka"){
    console.log("you are an adult")
}
9.b. if else
 
 var age=20;
 var city="Dhaka";
 if (age>18 && city=="Dhaka"){
    console.log("you are an adult")
 }
else{
    console.log("you are an child")   

}
9.c. if else if

var marks=84;
if(marks <=100 && marks >=80){
    console.log("A+");
}
else if(marks <80 && marks >=70){
    console.log("A");
}
else if(marks <70 && marks >=60){
    console.log("A-");
}
else if(marks <60 && marks >=50){
    console.log("B");
}
else if(marks <50 && marks >=40){
    console.log("C");
}
else if(marks <40 && marks >=33){
    console.log("D");
}
else{
    console.log("F");
}

10. Switch case

var marks=14;
switch(true){

case(marks <=100 && marks >=80):
console.log("A+");
break;

case(marks <80 && marks >=70):
console.log("A");
break;

case(marks <70 && marks >=60):
console.log("A-");
break;

case(marks <60 && marks >=50):
console.log("B");
break;

case(marks <50 && marks >=40):
console.log("C");
break;

case(marks <40 && marks >=33):
console.log("D");
break;

default:
    console.log("F");
}

11.a. for loop over Array, b. Array forEach method, c. Array concat, d. Array from, e. Array Includes,
   f. Array IndexOf, g. Array pop,push,reverse, h.Array sort,sort reverse and slice, splice
a. for loop over Array

var category=["milk","tea","coffee","juice"];

var i;
for(i=0;i<category.length;i=i+1){
console.log(category[i]+"<br>")
}

b. Array forEach method

var numArray=[32,43,55,67,87,93,99];
numArray.forEach(function (item){
console.log(item+"<br>")
})

c. Array concat

var arr1=["aaraf","zayan","faizan","farzad"];
var arr2=["naya","guddi"];
var arr3=arr1.concat(arr2);
console.log(arr3)

d. Array from

var title="Learn with Rabbi";
var titleArray=Array.from(title);
console.log(titleArray[11])

e. Array Includes

var numArray=[20,30,48,57,68,78,98];
var result=numArray.includes(100);
console.log(result)

f. Array IndexOf

var numArray=[20,30,48,57,68,78,98];
var result=numArray.indexOf(100);
console.log(result)


g. Array pop,push,reverse

i.pop

var numArray=[32,43,54,65,76,87,98];
numArray.pop();
console.log(numArray)

ii.push

var numArray=[32,43,54,65,76,87,98];
numArray.push(100);
numArray.push(189);
console.log(numArray)

iii.reverse

var numArray=[32,43,54,65,76,87,98];
var result=numArray.reverse();
console.log(result)

h.Array sort,sort reverse and slice, splice

i.sort
var numArray=[22,99,44,55,66,33,11];
numArray.sort();
console.log(numArray)

ii.sort.reverse

var numArray=[22,99,44,55,66,33,11];
numArray.sort().reverse();
console.log(numArray)

iii.slice

var numArray=[32,43,54,65,76,87,98];
var result=numArray.slice(1,3);
console.log(result)

iv.Array splice (remove)

var numArray=[32,43,54,65,76,87,98];
numArray.splice(1,3);
console.log(numArray)

v.Array splice (add)

var numArray=[32,43,54,65,76,87,98];
numArray.splice(1,3,100);
console.log(numArray)

12. String Method{a.CharAt(),b.concat(),c.indexOf(),d.lastIndexOf,e.replace(),f.substring(),g.slice()
      h.LowerCase(),i.UpperCase(),j.trim()}

a.charAt()
var country = "Bangladesh";
console.log(country.charAt(0));

b.concat()
var country1 = "Bangladesh";
var country2 = "India";
console.log(country1.concat(country2))

c.indexOf()
var country = "Bangladesh";
console.log(country.indexOf("g"))

d.lastIndex()
var country = "Bangladesh";
console.log(country.lastIndexOf("a"))

e.replace()
var country = "Bangladesh";
console.log(
    country.replace("desh","-DESHI"))

f.substring()
var country = "Bangladesh";
console.log(
    country.substring(6,10))


g.slice()
var country = "Bangladesh";
console.log(
    country.slice(0,6))

h.LowerCase()
var country = "Bangladesh";
console.log(
    country.toLowerCase())

i.UpperCase()

var country = "Bangladesh";
console.log(
    country.toUpperCase())

j.trim()
var country1="   Bangladesh   ";
var country2=country1.trim();
console.log(
    country1.length)*/
