


'use strict'

    let add = document.getElementById('add')
    
     


  function getRandom(min, max) {
        min = Math.ceil(1);
        max = Math.floor(21);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    let objectNum= prompt("How many objects do you want")
    let array=[]
    let totalSum=[]
    let hours=["6 AM","7 AM","8 AM","9 AM","10 AM","11 AM",
    "12 AM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM"]

    function Stores(location,min ,max ,AvgCookie ) {

    this.location=location;
    this.min= min;
    this.max = max;
    this.AvgCookie = AvgCookie;
    array.push(this)
  }
for (let index = 0; index < objectNum; index++) {
     
    let location= prompt("enter location");
    let min= prompt("enter the min");
    let max= prompt("enter the max");
    let AvgCookie= prompt("enter the avg cookie sales");
    
    let me= new Stores(location, min, max, AvgCookie)
    array.push(me)

    for (let index = 0; index < hours.length; index++) {
     let rand= AvgCookie*getRandom(1,21);
    totalSum.push(rand)   
    }}



    


let sum =0;

for (let j = 0; j < array.length-1; j++) {

    let Eul = document.createElement("ul");
    Eul.textContent= array[j].location
    add.appendChild(Eul)
    console.log( array[j] );

    for (let i= 0 ; i< hours.length ;i++) {
    

    let ulE= document.createElement('ul')
    

    ulE.textContent=`${hours[i]} Cookies per hour  ${totalSum[i]}`;
    sum = sum + totalSum[i];

    add.appendChild(ulE)
    }
    console.log("total is "+sum);
}

