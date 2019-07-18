//object destructuring

// const client = {
//     name: "Miguel",
//     type: "Premium",
//     data: {
//         location: {
//             city: "Tijuana",
//             country: "Mex"
//         },
//         account:{
//             date: "16-07-2019",
//             money:4000
//         }
//     }
// }

//Old method
// const clientName=client.name;
// const clientType=client.type;
// console.log(clientType);

//New method
// let {name,type,data:{location:{city,country},account:{date,money}}}=client;

// console.log(money);

//object literal enhancement
// const n="Angelo";
// const a=30;

// const student={
//     n,
//     a
// }

// console.log(student.n);

const people = [
    {name:"Carlos",age:30},
    {name:"Chris",age:26},
    {name:"Kleibert",age:28,learning:"Javascript"},
    {name:"Travis",age:25},
    {name:"Michael",age:30},
    {name:"Angelo",age:34},
    {name:"Miguel",age:19},
    {name:"Sergio",age:42},
    {name:"Adam",age:28}
]

console.table(people);

const olders= people.filter(person=> person.age>30);//parameter => return

console.table(olders);

const Kleibert= people.find(person=> person.name=== "Kleibert");

console.table(Kleibert);

let {learning}=Kleibert;
console.log(learning);

let total= people.reduce((total,person)=> total + person.age,0);

console.log(total);

// average of age
console.log(total/people.length);




