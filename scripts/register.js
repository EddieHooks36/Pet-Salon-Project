let petSalon = {
    name:"The Fashion Pet",
    phone: "111-111-1111",
    address: {
        street: "Fake Street",
        zip: 12345,
        number: 123
    },
    hours:{
        open: "9:00am",
        close: "5:00pm"
    },
    pets:[]
    
}
function Pet (name, age, gender, breed, service, owners, phone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.ownername = owners;
    this.contactPhone = phone;
}

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");

function register(){
    
    console.log(inputName.value, inputAge.value);
   
    let newPet = new Pet (inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value);
    
    console.log(newPet);
    console.log(petSalon.pets)
}
function displayifo(){

}

function init(){
    let scooby = new Pet("Scooby",50,"Male","Dane","Grooming","Shaggy","111-111-1111");
    let gigi = new Pet("Gigi",12,"Female","Grooming","Eddie","111-111-1111");
    let scrappy = new Pet("Scrappy", 3 , "male", "Dane", "bathe","shaggy","111-111-1111");

    petSalon.pets.push(scooby, gigi, scrappy);
}


window.onload = init;