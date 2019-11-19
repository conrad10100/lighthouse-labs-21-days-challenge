
const checkAir = function (samples, threshold) {
  // Code here!
  var clean=0.0, dirty=0.0, total;
  for(i =0; i<samples.length;i++){
    if(samples[i] ==="clean"){
      clean++  
    }else  if(samples[i]==="dirty"){
      dirty++
    }
    }
    total = dirty/samples.length;
    if(total<=threshold){
      return "Clean"
    }else{
      return "Polluted"
    }
}
