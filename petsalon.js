const salon = { //object
    name:"Fashion Pets",
    phone:"664-3445897",
    address:{ //object inside
        street:"5th Avenue",
        number:"25-A"
    },
    workingHours:{ //object inside
        open:"8:00 am ",
        close:"5:00 pm"
    },
    pets:[], //empty array

    petCount() {
        document.getElementById("count").innerHTML=`<h2>Number of Pets: ${salon.pets.length}</h2>`
    },
 
}

// object destructuring

let {name,phone,address:{street,number},workingHours:{open,close},petCount,petName}=salon;

document.getElementById("info").innerHTML=`<h2>${name} (${phone}), ${street} ${number} <br>
it is open from ${open} to ${close} </h2>`;

function Pet(name,age,service,ownername,contactPhone) {
    this.hunger=10;
    this.happiness=5;
    this.name=name;
    this.age=age;
    this.ownername=ownername;
    this.contactPhone=contactPhone;
    this.service=service;
    this.name=name;
    this.feed=function(){
        this.hunger=-10;
        this.happiness+=10;
    };
    this.status=function(){
        console.log(this.name + "hunger: " + this.hunger + "happiness: "
        + this.happiness); 
    };
    this.ownerContact= function(){
        console.log("Owner Name:" + this.ownername + "\n"+ "Phone:" + this.contactPhone);
    };
    this.petName= function(){
        console.log(this.name)
    }
}

const pet1 = new Pet("Zoey",2,"shower","Travis","65475689");
const pet2 = new Pet("Janis",2,"hair cut","Sabrina","65473932");
const pet3 = new Pet("Ozzy",6,"shower","Yair","4785905");

pet1.feed();
pet1.status();
pet1.feed();
pet1.status();
pet1.ownerContact();



// console.log(pet1)

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);

console.table(salon.pets);

petCount();

console.log("Pet Names:");
pet1.petName();
pet2.petName();
pet3.petName();

