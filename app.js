


function object(location,min ,max ,AvgCookie ) {

    this.location=location;
    this.min= min;
    this.max = max;
    this.AvgCookie = AvgCookie;

   
  }

  function getRandom(min, max) {
        min = Math.ceil(1);
        max = Math.floor(21);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    let objectNum= prompt("How many objects do you want")
    let array=[]
    let totalSum=[]

for (let index = 0; index < objectNum; index++) {
     
    let location= prompt("enter location");
    let min= prompt("enter the min");
    let max= prompt("enter the max");
    let AvgCookie= prompt("enter the avg cookie sales");
    
    let me= new object(location, min, max, AvgCookie)
    array.push(me)

    for (let index = 0; index < 12; index++) {
     let rand= AvgCookie*getRandom(1,21);
    totalSum.push(rand)
        
    }
    

}
let sum =0;
for ( j = 0; j < array.length; j++) {

    
    console.log( array[j] );

    for ( i= 0 ; i< totalSum.length ;i++) {
    
    console.log("Cookies per hour "+ totalSum[i]);
    sum = sum + totalSum[i];
    }
    console.log("total is "+sum);
}

