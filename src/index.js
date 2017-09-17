module.exports = function check(str, bracketsConfig) {
  var testStr=str;
var tempStack=[];
var config=bracketsConfig;
var tempFlag=false;
var sameBracketsStack=[];

for(let i=0;i<testStr.length;i++){
    for(let k=0;k<config.length;k++){
        if(testStr[i] === config[k][0]){
            if(!(config[k][0] === config[k][1])){
				tempStack.unshift(config[k][1]);
			}else{
				if(!(sameBracketsStack[0] === testStr[i])){
					tempStack.unshift(config[k][1]);
					sameBracketsStack.unshift(config[k][1]);
				}else{
					if(!(testStr[i] === tempStack[0])){
					   return false;
				    }else{
						tempStack.shift();
						sameBracketsStack.shift();
					}
					
					
				}
			}
        }else{
			if(testStr[i] === config[k][1]){
				if(!(testStr[i] === tempStack[0])){
					return false;
				}else{
					tempStack.shift();
				}
			}
		}    
    }
}
if(tempStack.length === 0) {return true; }else {return false;}

}
