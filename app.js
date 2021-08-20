


'use strict'


let add = document.getElementById('add')
let Aat=document.getElementById('Aat')
let info=document.getElementById('info')
let Aon=document.getElementById('Aon')



let array=[]
let totalSum=[]
let hours=["6 AM","7 AM","8 AM","9 AM","10 AM","11 AM",
"12 AM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM"]

function Stores(Location,min ,max ,AvgCookie ) {

this.location= Location;
this.min= min;
this.max = max;
this.AvgCookie = AvgCookie;
this.randCust=[];
this.AvaCookperHour=[];
this.total =0;

}

let Seattle=new Stores("Seattle",23,65,6.3);
let Tokyo=new Stores("Tokyo" ,3,24,1.2);
let Dubai=new Stores('Dubai',11,38,3.7);
let Paris	=new Stores('Paris',20,38,2.3);
let Lima	=new Stores('Lima',2,16,4.6);

array=[Seattle,Tokyo,Dubai,Paris,Lima]
Stores.prototype.render = function(){

    let tRow = document.createElement('tr')
     tableEL.appendChild(tRow)

     let thEL2 = document.createElement('th')
     thEL2.textContent=this.location;
     tRow.appendChild(thEL2)


     this.calcAvgCookperHour();
     for (let index = 0; index < hours.length; index++) { 
     let thEL = document.createElement('th')
     thEL.textContent=this.AvaCookperHour[index];
     tRow.appendChild(thEL)
    }
    
    this.total
  }
let myForm= document.getElementById('myForm')

myForm.addEventListener('submit',addStores)

function addStores(event){
  event.preventDefault();
  let formLoc = event.target.STN.value;
  let Minform= event.target.Minimum.value;
  let Maxform= event.target.Maximum.value;
  let ACform= event.target.AC.value;

  let FormEl= new Stores(formLoc,Minform,Maxform,ACform);
  array.push(FormEl);
  array[1].render
}
Stores.prototype.render2 = function(){

  let olEl=document.createElement('ul')
  Aat.appendChild(olEl)
  let liEl=document.createElement('li')
  liEl.textContent=this.location;
  olEl.appendChild(liEl)
}
Stores.prototype.getRandom = function() {
  for (let index = 0; index < hours.length; index++) {
    let min = Math.ceil(this.min);
    let max = Math.floor(this.max);
    let randcus= Math.floor(Math.random() * (max - min + 1) + min);
    this.randCust.push(randcus);
  }  
}
Stores.prototype.calcAvgCookperHour= function(){
  
  this.getRandom();
  for (let index = 0; index < hours.length; index++) {
  this.AvaCookperHour[index]= Math.ceil( this.AvgCookie*this.randCust[index]);
  this.total=this.total+this.AvaCookperHour[index];
}
}
let tableEL=document.createElement('table');
  add.appendChild(tableEL);



let clicked3=false;


function viewHours(){
  if(clicked3){
    removeEventListener("click", viewHours());
  }


  let olEl2=document.createElement('ul')
  Aon.appendChild(olEl2)
  
  for (let index = 0; index < hours.length; index++) {
   let liEl3 = document.createElement('li')
   liEl3.textContent= hours[index];
   olEl2.appendChild(liEl3)
  }
  clicked3=true;
}
  
let clicked4=false;

function Sales(){

  if(clicked4){
    removeEventListener("click", viewHours());
  }

  let thEL=document.createElement('th');
  thEL.textContent= 'Hours';
  tableEL.appendChild(thEL)
  for (let index = 0; index < hours.length; index++) {
    let thEL = document.createElement('th')
    thEL.textContent= hours[index];
    tableEL.appendChild(thEL)
   }

  
  for (let index = 0; index < array.length; index++) {
    array[index].render();
  }
  
  let thEL0 = document.createElement('th')
  thEL0.textContent= "Total";
  tableEL.appendChild(thEL0)
  let A=0;
  for (let index = 0; index < hours.length; index++) {
   let T=0;
    for (let i = 0; i < array.length; i++) {
      array[i]
      T= T+array[i].AvaCookperHour[A]
    }


  
  let thEL10 = document.createElement('th')      
  thEL10.textContent= T
  tableEL.appendChild(thEL10)
    A++;
 }
 clicked4=true;
}
let clicked2= false;

function locations(){
  
    if(clicked2){
      removeEventListener("click", locations());
    }
  let pEl=document.createElement('p');
   pEl.textContent="Locations:"
  Aat.appendChild(pEl)
  for (let index = 0; index < array.length; index++) {
 
  array[index].render2();
  }
  clicked2=true;
}
let clicked1= false;
function contact(){
  if(clicked1){
    removeEventListener("click", contact())
  }
  let pEl=document.createElement('p');
  pEl.textContent="Contact Us:"
  info.appendChild(pEl);
  let pHEl=document.createElement('p');
  pHEl.textContent="+962- 798936369 "
  info.appendChild(pHEl);
  let a = document.createElement('a'); 
  let link = document.createTextNode("This is link");
  a.appendChild(link); 
  a.title = "This is Link"; 
  a.href = "https://github.com/OmaxrAli"; 
  info.appendChild(a); 

  
  
  clicked1=true
}


// ------------------------- form




