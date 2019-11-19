
const whereCanIPark = (spots, vehicle) => {
  // Code here!
  var hold,i,j;
  if(vehicle==="regular"){
    hold = "R";
  }else if(vehicle ==="small"){
    hold ="S";
  }
  else if(vehicle==="motorcycle"){
    hold="M";
  }
  for(i=0;i<spots.length;i++){
    for(j=0;j<spots[i].length;j++){
      if(spots[i][j]===hold){
        return[j,i]
      }
    }
  }
  return false;
}
