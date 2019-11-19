
const chooseStations = (stations) => {
  // Code here!
  let goodStations =[];

  for(const station of stations){
    if(station[1]>=20 &&( station[2]=='school' ||  station[2]=='community centre')){
      goodStations.push(station[0]);
    }
  }  
  return goodStations;
  // Remember to return a value!
}
