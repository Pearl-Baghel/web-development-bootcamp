console.log("This is lecture 53 for external javascript ");

function greet(name, greetText="Greeting from javascript")// default value
{
    let name1="name1";// local scope only inside block
    console.log(greetText + " " + name);
    console.log(name + " is a good girl");
}

function sum(a,b,c){
    let d=a+b+c;
    return d;
}
let name0 = "Pearl";
let name1 = "Pooja";
let name2 = "Palak";
let name3 = "Priya";
let greetText ="Good Morning";
greet(name0,greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3);// default value will be used 

let returnval =sum(1,2,3);
console.log(returnval);
// console.log(name0 + " is a good girl");
// console.log(name1 + " is a good girl");
// console.log(name2 + " is a good girl");
// console.log(name3 + " is a good girl");