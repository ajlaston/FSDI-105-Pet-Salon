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

    // petCount() {
    //     document.getElementById("count").innerHTML=`<h2>Number of Pets: ${salon.pets.length}</h2>`
    // },
 
}

// object destructuring

let {name,phone,address:{street,number},workingHours:{open,close},petCount,petName}=salon;

// document.getElementById("info").innerHTML=`<h2>${name} (${phone}), ${street} ${number} <br>
// it is open from ${open} to ${close} </h2>`;

var petId = 0;
function Pet(name,age,service,ownername,contactPhone) {
    //creating pet ID
    this.id="pet" + petId;
    petId+=1;

    this.hunger=10;
    this.happiness=5;
    this.name=name;
    this.age=age;
    this.ownername=ownername;
    this.contactPhone=contactPhone;
    this.service=service;
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

function registerPet(){
    var txtName = document.getElementById("PetName");
    var txtAge = document.getElementById("PetAge");
    var txtServices = document.getElementById("services");
    var txtOwnerName = document.getElementById("OwnerName");
    var txtPhone = document.getElementById("PhoneNumber");

    var age = parseInt(txtAge.value);
    var thePet = new Pet(txtName.value,txtAge.value,txtServices.value,txtOwnerName.value,txtPhone.value)

    console.table(thePet);
    salon.pets.push(thePet);
    eraseForm(txtName);
    displayTable(thePet);
    display(thePet);
    alert("you have " + salon.pets.length + " pets in the Salon");
   
    


}

function display(aPet){
    var list = document.getElementById("petList");
    var li =document.createElement("li");
    li.innerText= aPet.id + "-----" +aPet.name + "----" + aPet.service;
    li.classList.add("petList");
   
}


function eraseForm (){
    // txtName.value=" "
    document.getElementById("PetName").value=" ";
   document.getElementById("PetAge").value=" ";
document.getElementById("services").value=" ";
  document.getElementById("OwnerName").value=" ";
  document.getElementById("PhoneNumber").value=" ";
}

function displayTable(aPet){
    var tbody = document.getElementById("listBody");
    var row = `<tr id=${aPet.id}><td>${aPet.id}</td> <td>${aPet.name}</td> <td>${aPet.age}</td> <td>${aPet.service}</td> <td>${aPet.ownername}</td> 
    <td>${aPet.contactPhone}<button onclick="remove(${aPet.id});">remove</button>  </td></tr>`;
    tbody.innerHTML+=row;
}

function remove(idpet){
    console.log("I want to remove" + idpet);
    var indexDelete=0;
    for(var i=0;i<salon.pets.length;i++){
        var indexPet=salon.pets[i]
        if(indexPet.id===idpet)
        {
            indexDelete=i;
        }
    }
   
    salon.pets.splice(indexDelete,1);
    var tr = idpet;
    tr.remove();
 
}

function petSearch(){
    var txtsearch = document.getElementById("search");
    var searchString=txtsearch.value;

    var foundedPet = 0;
    for(var i=0;i<salon.pets.length;i++){
        var searchPet=salon.pets[i]
        if(searchPet.name===searchString)
        {
            foundedPet=i;
        }
    }
    var theFoundedPet=salon.pets[foundedPet];
    document.getElementById("listBody").innerHTML= `<td>${theFoundedPet.id}</td> <td>${theFoundedPet.name}</td> <td>${theFoundedPet.age}</td>
    <td>${theFoundedPet.service}</td> <td>${theFoundedPet.ownername}</td> <td>${theFoundedPet.contactPhone}</td>`;
    console.log(theFoundedPet);
}

// function petSearch(){
//     document.getElementById("listBody").innerHTML = salon.pets;
// }


const pet1 = new Pet("Zoey",2,"shower","Travis","65475689");
const pet2 = new Pet("Janis",2,"hair cut","Sabrina","65473932");
const pet3 = new Pet("Ozzy",6,"shower","Yair","4785905");

// console.log("Pet ID:" + pet2.id);
// pet1.feed();
// pet1.status();
// pet1.feed();
// pet1.status();
// pet1.ownerContact();



// // console.log(pet1)

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);

// console.table(salon.pets);

// // petCount();

// console.log("Pet Names:");
// pet1.petName();
// pet2.petName();
// pet3.petName();

