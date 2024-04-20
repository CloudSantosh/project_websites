let xp=0;
let health=100;
let gold=50;
let currentWeapon=0;
let fighting;
let monterHealth;
let inventory =['stick'];

const xpText=document.querySelector("#xpText");
const healthText=document.querySelector("#healthText");
const goldText=document.querySelector("#goldText");

const button1=document.querySelector("#button1");
const button2=document.querySelector("#button2");
const button3=document.querySelector("#button3");

const monsterStats=document.querySelector("#monsterStats");
const monsterName=document.querySelector("#monsterName");
const monsterHealth=document.querySelector("#monsterHealth");
const text=document.querySelector("#text");

 // Initialize buttons

 button1.onclick=goStore;
 button2.onclick=goCave;
 button3.onclick=fightDragon;

 function goStore(){
    button1.innerText="Buy 10 health (10 gold)";
    button2.innerText="Buy Weapon (30 gold)";
    button3.innerText="Go to Town Square";
    button1.onclick=buyHealth;
    button2.onclick=buyWeapon;
    

    text.innerText="You have Entered the Stored";
 }

function goCave(){
    button1.innnerText=""
}
