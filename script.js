var DataPeople = [{
    "voornaam": "Piet",
    "achternaam": "Heijn",
    "nationaliteit": "Nederlandse",
    "leeftijd": 47,
    "gewicht": 86
 }]
 var holder = document.getElementById("PeopleHolder");
 for (i = 0; i < DataPeople.length; i++){
    var item = document.createElement("div")
    var Data = DataPeople[i]
    var PersonNumber = document.createElement("h1")
    var Name = document.createElement("p")
    var LastName = document.createElement("p")
    var Country = document.createElement("p")
    var Age = document.createElement("p")
    var Weight = document.createElement("p")
    
    PersonNumber.innerText = `Person ${i + 1}`
    Name.innerText = `Name: ${Data.voornaam}`
    LastName.innerText = "Last Name: " + Data.achternaam
    Country.innerText = `Nationality: ${Data.nationaliteit}`
    Age.innerText = `Age: ${Data.leeftijd}`
    Weight.innerText = `Weight: ${Data.gewicht}`

    item.appendChild(PersonNumber)
    item.appendChild(Name)
    item.appendChild(LastName)
    item.appendChild(Country)
    item.appendChild(Age)
    item.appendChild(Weight)
    item.classList.add("Item")
    holder.appendChild(item)
 }
