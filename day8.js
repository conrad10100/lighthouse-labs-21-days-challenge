
const smartGarbage = (trash, bins) => {
    // Code here!
    //trash is type
    //bins is how many of each
    var a,b,c;
    a=bins.waste;
    b=bins.recycling;
    c=bins.compost;
    if(trash =="waste"){
      bins.waste = a+1;
    }else if(trash =="recycling"){
      bins.recycling=b+1;
    }else{
      bins.compost=c+1;
    }
    return bins;
}
