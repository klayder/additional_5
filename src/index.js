module.exports = function check(str, bracketsConfig) {
  var testStr=str;
var tempStack=[];
var config=bracketsConfig;
var tempFlag=false;

/*for(let i=0;i<testStr.length;i++){
	for(var k=0;k<config.length;k++){
		if(testStr[i] === config[k][0]){
			if(config[k][0]===config[k][1]){
				if(!tempFlag){
					tempFlag=true;
					//Случай, когда скобки однотипные и встретилась она первый раз
				}else{
					tempFlag=false;
				}
			} else{
			tempStack.push(config[k][1]);
		}} else{
    	if(testStr[i] === config[k][1]){
		if(!(testStr[i] === tempStack.pop())){
			return false;
		}
      }
    }
	}
}

if(tempStack.length === 0) {return true; }else {return false;}*/
for(let i=0;i<testStr.length;i++){
    for(let k=0;k<config.length;k++){
        if(testStr[i] === config[k][1]){
            if(config[k][1] === config[k][0]){
                if(tempFlag){
                   alert("вторая симметричная");
                   tempFlag=false;

                   if(!(testStr[i] === tempStack.pop())){
                     //  alert("бида")
                     return false;
                   }else{
					  tempStack.pop(); 
				   }
                }else{
                   alert("1 симметричная");
                   tempStack.push(config[k][1]);
                   tempFlag=true;
                }  
            } else{
               tempStack.push(config[k][1]);
            }
        }    
    }
}
if(tempStack.length === 0) {return true; }else {return false;}

}
