
const busTimes = buses => {
  // Code here!
  var name= buses
  console.log(buses)
  for(const temp in buses){
    name[temp] = buses[temp].distance/buses[temp].speed
    console.log(buses[temp].distance)
    
  }return name
}
