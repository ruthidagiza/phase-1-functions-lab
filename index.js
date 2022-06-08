// Code your solution in this file!
let Hq = 42
function distanceFromHqInBlocks(value) {

 if (Hq >= value) {
     return Hq - value
 }
 else {
     return value - Hq
 }

}

function distanceFromHqInFeet(value){
 return distanceFromHqInBlocks(value)*264
}

function distanceTravelledInFeet(start, end) {
    if (end >= start){
        return (end-start)*264
    }
    else{
      return (start-end)*264
    }
}

function calculatesFarePrice(start, destination) {
 let feet = distanceTravelledInFeet(start,destination)

 if (feet <= 400) {
     return 0
 }
 else if(feet > 400 && feet <= 2000){
     return (feet - 400)*0.02

 }
 else if(feet > 2000 && feet <= 2500){
     return 25
 }
 else {
     return 'cannot travel that far'
 }
}
console.log (calculatesFarePrice(50,100))