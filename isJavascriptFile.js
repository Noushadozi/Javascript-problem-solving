function isJavascriptFile(fileName){
    if(typeof fileName != "string" || fileName == 0){
        return "provide valid input";
    }
    else{
        if(fileName.endsWith(".js")){
            return true;
        }
        else{
            return false;
        }
    }
}


let result = isJavascriptFile("index.js");
console.log(result);


