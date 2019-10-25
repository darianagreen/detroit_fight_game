//Page 2 Battle

//Personajes del Player1
//document.getElementById("firstRoundPlayer1").hidden=false;
//document.getElementById("secondRoundPlayer1").hidden=false;
//document.getElementById("thirdRoundPlayer1").hidden =false;

let firstRoundPlayer1 = document.getElementById("firstRoundPlayer1");
let secondRoundPlayer1 = document.getElementById("secondRoundPlayer1");
let thirdRoundPlayer1 = document.getElementById("thirdRoundPlayer1");


//firstRoundPlayer1.src = "images/"+ nombresPersonajesPlayer1[1] + ".jpg"


//Personajes del Player2
let firstRoundPlayer2 = document.getElementById("firstRoundPlayer2");
let secondRoundPlayer2 = document.getElementById("secondRoundPlayer2");
let thirdRoundPlayer2 = document.getElementById("thirdRoundPlayer2");

//document.getElementById("firstRoundPlayer2").hidden=false;;
 ////document.getElementById("secondRoundPlayer2").hidden=true;
 //document.getElementById("thirdRoundPlayer2").hidden=true;



//Creamos plantilla para los personajes del juego

class Personajes {
    constructor(Vida = 100, Fuerza = 10){
        this.Nombre = "";
        this.Vida = Vida;
        this.Fuerza = Fuerza;
    }
    atacar(Enemigo){
        return Enemigo.Vida - this.Fuerza;
    }
}
//Declaramos turno

let turno = 0
//Creacion de nuevos personajes con numero de vidas y fuerza cada vez random 

let per1 = new Personajes(Math.floor(Math.random()*(100-80)+80), Math.floor(Math.random()*(20-10)+10));
per1.Nombre = "Chloe";

let per2 = new Personajes(Math.floor(Math.random()*(100-80)+80), Math.floor(Math.random()*(20-10)+10));
per2.Nombre = "Kamsky";

console.log(`Vida del P1: ${per1.Vida}`);
console.log(`Vida del P2: ${per2.Vida}`);


//Botones Fight de los dos personajes

let buttonFight1 = document.getElementById('fight1');
let buttonFight2 = document.getElementById('fight2');
let buttonFight3 = document.getElementById('fight3');
let buttonFight4 = document.getElementById('fight4');
let buttonFight5 = document.getElementById('fight5');
let buttonFight6 = document.getElementById('fight6');
buttonFight3.hidden = true;
buttonFight4.hidden = true;
buttonFight5.hidden = true;
buttonFight6.hidden = true;

//Display contador de Vidas de los dos personajes
let vidasP1 = document.getElementById('vidasP1');
let vidasP2 =document.getElementById('vidasP2');

//display del ganador y numero de turnos del Player1 y Player2

let gameResult1 = document.getElementById('gameResult1');

let gameResult2 = document.getElementById('gameResult2')

// Main function - the players are fighting


//if Player 1 starts first:
let fightPlayer1 = () => {

    do{
        turno++;
        console.log(`Turno: ${turno}`)
        per2.Vida = per1.atacar(per2);
        console.log(`Vida del P2: ${per2.Vida}`);
        vidasP2.innerHTML = "Vida "+ per2.Nombre +" = " + per2.Vida
        per1.Vida = per2.atacar(per1);
        console.log(`Vida del P1: ${per1.Vida}`);
        vidasP1.innerHTML = "Vida " + per1.Nombre + " = " + per1.Vida
    }while(per1.Vida >= 0 && per2.Vida >= 0);
    resultDisplay1();

};

//if Player 2 starts first:
let fightPlayer2 =() => {
    do{
    turno++;
    console.log(`Turno: ${turno}`)
    per1.Vida = per2.atacar(per1);
    console.log(`Vida del P1: ${per1.Vida}`);
    vidasP1.innerHTML = "Vida " + per1.Nombre+ " = " + per1.Vida
    per2.Vida = per1.atacar(per2);
    console.log(`Vida del P2: ${per2.Vida}`);
    vidasP2.innerHTML = "Vida " + per2.Nombre + " = " + per2.Vida

}while(per1.Vida >=0 && per2.Vida >= 0);
console.log(per1);
console.log(per2);
resultDisplay1();
};

//Game starts by each player clicking on FIGHT button
//Player 1 starts (cada nuevo boton debe activar la lucha del siguiente de los 3 personajes):

buttonFight1.onclick = fightPlayer1;
buttonFight3.onclick = fightPlayer1;
buttonFight5.onclick = fightPlayer1;

//Player2 starts:(cada nuevo boton debe activar la lucha del siguiente de los 3 personajes):

    buttonFight2.onclick = fightPlayer2;
    buttonFight4.onclick = fightPlayer2;
    buttonFight6.onclick = fightPlayer1;


    //Muestra el resultado de la partida  1 - se esconden boton 1 y boton 2 y parecen boton 3 y 4 

    let resultDisplay1 =function(){
    if (per1.Vida <=0 && per1.Vida < per2.Vida)
    {
gameResult2.innerHTML = 'Gana: ' + per2.Nombre +' en el Turno: ' + turno;
buttonFight2.hidden =true;
buttonFight1.hidden = true;
buttonFight3.hidden =false;
buttonFight4.hidden =false;
   }else{
       if(per2.Vida <=0){
           gameResult1.innerHTML = 'Gana:' + per1.Nombre  +' en el Turno: ' + turno;
           buttonFight2.hidden =true;
           buttonFight1.hidden = true;
           buttonFight3.hidden =false;
           buttonFight4.hidden =false;}
       }
    }

    //Muestra el resultado de la partida 2se esconden boton 3 y boton 4 y parecen boton 5 y 6 

    let resultDisplay2 =function(){
        if (per1.Vida <=0 && per1.Vida < per2.Vida)
        {
    gameResult2.innerHTML = 'Gana: ' + per2.Nombre +' en el Turno: ' + turno;
    buttonFight3.hidden =true;
    buttonFight4.hidden = true;
    buttonFight5.hidden =false;
    buttonFight6.hidden =false;
       }else{
           if(per2.Vida <=0){
               gameResult1.innerHTML = 'Gana:' + per1.Nombre  +' en el Turno: ' + turno;
               buttonFight3.hidden =true;
               buttonFight4.hidden = true;
               buttonFight5.hidden =false;
               buttonFight6.hidden =false;
           }
        }
    } 