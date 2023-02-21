var DataPeople = [{
    "voornaam": "Piet",
    "achternaam": "Heijn",
    "nationaliteit": "Nederlandse",
    "leeftijd": 47,
    "gewicht": 86
 },
 {
    "voornaam": "Masud",
    "achternaam": "Mohammed",
    "nationaliteit": "Iraans",
    "leeftijd": 37,
    "gewicht": 79
 },
 {
    "voornaam": "Marie",
    "achternaam": "Visser",
    "nationaliteit": "Belgische",
    "leeftijd": 42,
    "gewicht": 69
 },
 {
    "voornaam": "Abdullah",
    "achternaam": "Öcalan",
    "nationaliteit": "Turks",
    "leeftijd": 73,
    "gewicht": 85
 },
 {
    "voornaam": "Bjorn",
    "achternaam": "Hakke",
    "nationaliteit": "Zweeds",
    "leeftijd": 18,
    "gewicht": 71
 },
 {
    "voornaam": "Jouke",
    "achternaam": "Dijkstra",
    "nationaliteit": "Fries",
    "leeftijd": 29,
    "gewicht": 82
 },
 {
    "voornaam": "Bo",
    "achternaam": "Wáng",
    "nationaliteit": "Chinees",
    "leeftijd": 38,
    "gewicht": 65
 }]
 var Items = []
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
    Items.push(item)
    holder.appendChild(item)
 }
 console.log(Items)


 document.getElementById("TriggerFilter").onclick = function(){
   var number = document.getElementById("Filter").innerText
   for (let index = 0; index < DataPeople.length; index++) {
      if (DataPeople[index].leeftijd < number) {
         Items[index].style.display = "none"
      }
      else{
         Items[index].style.display = "flex"
      }
   }
 }