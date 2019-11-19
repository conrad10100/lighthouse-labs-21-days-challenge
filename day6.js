
const voterTurnout = (voter_signatures, voter_ids) => {
  // Code here!
  var i;
  if(voter_signatures.length!==voter_ids.length){
    return "FRAUD!";
  }
  else{
    for(i=0;i<voter_ids.length; i++){
      if(voter_ids[i]!==voter_signatures[i]){
        return "FRAUD!";
      }
    }
    return "All clear, we can count the votes!";
  }
  
}
