   'use strict'

    let add = document.getElementById('add')
    
     


  

    let array=[]
    let totalSum=[]
    let hours=["6 AM","7 AM","8 AM","9 AM","10 AM","11 AM",
    "12 AM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM"]


    function getRandom(min, max) {
        min = Math.ceil(1);
        max = Math.floor(21);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }
 
  
    

    let Seattle =  {
      location: 'Seattle',
      MinC: 23,
      MaxC: 65,
      AvgCookie: 6.3
    };
    let Tokyo =  {
      location: 'Tokyo',
      MinC: 3,
      MaxC: 24,
      AvgCookie: 1.2
    };
    let Dubai =  {
      location: 'Dubai',
      MinC: 11,
      MaxC: 38,
      AvgCookie: 3.7
    };
    let Paris =  {
      location: 'Paris',
      MinC: 20,
      MaxC: 38,
      AvgCookie: 2.3
    };
    let Lima =  {
      location: 'Lima',
      MinC: 2,
      MaxC: 16,
      AvgCookie: 4.6
    };

    array=[Seattle,Tokyo,Dubai,Paris,Lima]

    for (let i = 0; i < array.length; i++) {
      
      for (let index = 0; index < hours.length; index++) {
       let rand = array[1].AvgCookie*getRandom(1,21)
      totalSum.push(rand)   
      }
    }
    
    


let sum =0;

for (let j = 0; j < array.length; j++) {

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

