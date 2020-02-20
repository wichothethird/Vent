

function getAllTickets(jsonObj){
    var lista = [];
    var content = "<ul>"
    for (var i=0; i < jsonObj.length;i++){
        let ticket = new Ticket(jsonObj[i]);
        lista.push(ticket);
        content += ticket.printlist();
        console.log(ticket.printlist())
    }
    content += "</ul>";

    return [lista, content];
}



function getTickets() {
    
    const http = new XMLHttpRequest();
    //Onload - is a http property that is set to a callback function
    //Onload gets triggered when there is a response from the server (request was completed successful)
    //This doesnt mean that we got what we asked for 
    //this is why we use http status to check if the request 
    http.onload = ()=>{
        
        if (http.status == 200) {
            console.log("Connection status Code: "+ http.status) 
            //Set the response into JSON format 
            var jsonObj = JSON.parse(http.responseText);
            //Function accept JSON
            //var message = "<ul><li>" + jsonObj[0].product +"</li> <li>a la perga!!</li></ul>";
            var werContainer = document.getElementById("wer"); 
            


            var [listOfTickets, message] = getAllTickets(jsonObj);
            werContainer.innerHTML = message;


            console.log("here is the first Object " + listOfTickets[0].id);
            console.log("JSON OBJECT Length" + jsonObj.length);
                 
        }

};
        /*
        Open method takes on three parameters
        1. the type of http request POST GET etc
        2. location of the file in the server 
        3. boolean value
        */
    
    http.open('GET','http://localhost:3000/getTickets');
    http.send();
};


const boton = document.getElementById('tickets');
boton.addEventListener('click',getTickets,false);



//Remember that elem2 Could have more than one element tie to the same class name.'
//that is why we use the index.
//var elem2 = document.getElementsByClassName('logo');
//var elemento = document.getElementById('wer');



//console.log(elem2[0].firstChild.nodeValue);





































































function Hero(level, name){ 
    this.level = level;
    this.name = name;

}
  


var hero1 = new Hero(2, "Wicho")

console.log(Object.getPrototypeOf(hero1))

Hero.prototype.greet = ()=>{
    return "Hello I am a Hero!!!";
}

console.log(hero1.greet());


function Warrior(level, name, weapon){
    Hero.call(this, level, name);
    this.weapon = weapon;
}
Warrior.prototype = Object.create(Hero.prototype);
Warrior.prototype.attack = function(){
    return "You have been hit with " + this.weapon;
}

var hero2 = new Warrior(1, "Jose", "axe");


console.log(hero2.attack());


function Healer(level, name, tool){
    Hero.call(this, level, name);
    this.tool = tool;

};
Healer.prototype = Object.create(Hero.prototype)
Healer.prototype.heal = function(){
    return "I will heal you with this  " + this.tool;
}

Healer.prototype.greet = function(){
    return "this is a healer sayinh hi cmapachema";
}
var hero3 = new Healer(3, "Sasuke", "wond");
console.log(hero3.heal());
console.log(hero3)
console.log(Object.getPrototypeOf(hero3));



console.log(hero1.greet());
console.log(hero2.greet());
console.log(hero3.greet());

