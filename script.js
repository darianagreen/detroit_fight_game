//creacion de eleccion del jugador 1 de los personajes

var nombresPersonajesPlayer1 = ['!','!']; //exclamacion porque anade al principio los nombres de heroes y los pasa al nombre del boton que llevara a la pagina de combate de los tres personajes elegidos

let Chloe = document.getElementById("Chloe");
let Connor = document.getElementById("Connor");
let Hank = document.getElementById("Hank");
let Luther = document.getElementById("Luther");
let Josh = document.getElementById("Josh");
let Lucy = document.getElementById("Lucy");
let North = document.getElementById("North");
let Marcus = document.getElementById("Marcus");
let Kara = document.getElementById("Kara");



var pushName = function(name) {
    nombresPersonajesPlayer1.unshift(name);
document.getElementById("fight1").innerHTML =  "Fight with " + nombresPersonajesPlayer1[0] + " " + nombresPersonajesPlayer1[1] + " " + nombresPersonajesPlayer1[2];//aqui funciona el array , sin embargo cuando le intento asignar el numero al personaje, queda Undefined
    };
    
    Chloe.onclick = function() { pushName("Chloe");};
    Connor.onclick = function() {pushName("Connor");};
    Hank.onclick = function() {pushName("Hank");};
    Luther.onclick = function() {pushName("Luther")};
    Josh.onclick = function() {pushName("Josh")};
    Lucy.onclick = function(){pushName("Lucy")};
    North.onclick = function(){pushName("North")};
    Markus.onclick = function(){pushName("Marcus")};
    Kara.onclick = function() {pushName("Kara")};

    console.log(nombresPersonajesPlayer1);

    
//creacion de eleccion del jugador 2 de los personajes
var nombresPersonajesPlayer2 = ["!", "!"];

let Kamsky = document.getElementById("Kamsky");
let Tracy = document.getElementById("Tracy");
let Ralph = document.getElementById("Ralph");
let Simon = document.getElementById("Simon");
let RK900 = document.getElementById("RK900");
let Allen = document.getElementById("Allen");
let Reed = document.getElementById("Reed");
let Todd= document.getElementById("Todd");
let Amanda = document.getElementById("Amanda");


var pushName2 = function(name) {
    nombresPersonajesPlayer2.unshift(name);
    document.getElementById("fight2").innerHTML =  "Fight with " + nombresPersonajesPlayer2[0] + " " + nombresPersonajesPlayer2[1] + " " + nombresPersonajesPlayer2[2];//aqui funciona el array , sin embargo cuando le intento asignar el numero al personaje, queda Undefined
}

Kamsky.onclick = function(){pushName2("Kamsky")};
Tracy.onclick = function(){pushName2("Tracy")};
Ralph.onclick = function(){pushName2("Ralph")};
Simon.onclick = function(){pushName2("Simon")};
RK900.onclick = function(){pushName2("RK900")};
Allen.onclick = function(){pushName2("Allen")};
Reed.onclick = function(){pushName2("Reed")};
Todd.onclick = function(){pushName2("Todd")};
Amanda.onclick = function(){pushName2("Amanda")};
console.log(nombresPersonajesPlayer2);



//Botones Fight de los dos personajes

let buttonFight1 = document.getElementById('fight1');
let buttonFight2 = document.getElementById('fight2');


