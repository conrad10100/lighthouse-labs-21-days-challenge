
const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  // Code here!
  var base, temp;
  if(numberOfPeople<30){
    base = 1;
    temp = base.toFixed(2)
  }else{
    base = 1.25;
    temp = base.toFixed(2)
  }
  base = base+distanceTraveled*0.25;
  return "$"+base.toFixed(2)
}
