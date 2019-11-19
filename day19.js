
const pumpkinSpice = money => {
  var pie=0, latte=0, macaron=0, size=0
  var arr=[0,0,0,0];
  while(money>0){
    if (money>=5){
      pie++
      money = money-5
      size = size+30
    }else if (money >=3){
      latte++
      money = money-3
      size = size+15
    }else if(money>=1){
      macaron++
      money = money -1
      size=size+3
    }
  }
  return [pie,latte,macaron, size]
}
