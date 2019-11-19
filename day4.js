
const registerToVote = (name, unregisteredVoters) => {
  // Code here!
  var i;
  let notReg = [];
 for (i = 0; i < unregisteredVoters.length; i++) {
  if(name!=unregisteredVoters[i]){
    notReg.push(unregisteredVoters[i]);
  }
  }
  console.log(name);
  console.log(unregisteredVoters);
  return notReg;
  // Remember to return a value!
}
