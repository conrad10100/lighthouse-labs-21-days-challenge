
const termTopics = (interviews) => {
  // Code here!
  var array=[];
  var i,a,b,c;
  a=0;
  b=0;
  c=0;
  for(i=0; i<interviews.length;i++){
    if(interviews[i]=="smart city"){
      a=a+1;
    }else if(interviews[i]=="arts funding"){
      b=b+1;
    }else if(interviews[i]=="transportation"){
      c=c+1;
    }
  }
  array.push(a);
  array.push(b);
  array.push(c);
  return array;
  // Remember to return an array!
  
}
