


'use strict'


    let add = document.getElementById('add')
    
     


  function getRandom(min, max) {
        min = Math.ceil(1);
        max = Math.floor(21);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    let array=[]
    let totalSum=[]
    let hours=["6 AM","7 AM","8 AM","9 AM","10 AM","11 AM",
    "12 AM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM"]

    function Stores(Location,min ,max ,AvgCookie ) {

    this.location= Location;
    this.min= min;
    this.max = max;
    this.AvgCookie = AvgCookie;
   
    
  }

  let Seattle=new Stores("Seattle",23,65,6.3);
  let Tokyo=new Stores("Tokyo" ,3,24,1.2);
  let Dubai=new Stores('Dubai',11,38,3.7);
  let Paris	=new Stores('Paris',20,38,2.3);
  let Lima	=new Stores('Lima',2,16,4.6);

  array=[Seattle,Tokyo,Dubai,Paris,Lima]


    let tableEL = document.createElement('table')
     add.appendChild(tableEL)
    let thEL = document.createElement('th')

    thEL.textContent= 'Hours';
    tableEL.appendChild(thEL)

    for (let index = 0; index < hours.length; index++) {
       let thEL = document.createElement('th')
       thEL.textContent= hours[index];
       tableEL.appendChild(thEL)
      }
      let thEL0 = document.createElement('th')
      thEL0.textContent= "Total";
      tableEL.appendChild(thEL0)
      
  

      Stores.prototype.render = function(){
        let tRow = document.createElement('tr')
         
         tableEL.appendChild(tRow)
         let thEL2 = document.createElement('th')
         thEL2.textContent=this.location;
         tRow.appendChild(thEL2)

         let sum =0
         for (let index = 0; index < hours.length; index++) {
          let rand = this.AvgCookie*getRandom(1,21);
          sum = sum+ rand;
          rand = rand.toFixed(0);
         let thEL = document.createElement('th')
         thEL.textContent=rand

         tRow.appendChild(thEL)
        }

    let tEL = document.createElement('th')
    
       tEL.textContent= sum.toFixed(0);
       tRow.appendChild(tEL)

      }
      
    for (let index = 0; index < array.length; index++) {
        array[index].render();
    
     }
     
        
 
    
     
        
        
      
     
  

