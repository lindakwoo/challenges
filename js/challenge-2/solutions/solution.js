let letterCount = (str)=>{
    str = str.toLowerCase().split(" ").join("");
    let letterObj = {};
    let finalArray = [];
    for(let i = 0;i<str.length;i++){
        if(!letterObj[str[i]]){
            letterObj[str[i]]=1;
        } else{
            letterObj[str[i]]++;
        }
    }
    let charCode = 97;
    for(let i = 1;i<27;i++){
        if(letterObj[String.fromCharCode(charCode)]){
            finalArray.push(letterObj[String.fromCharCode(charCode)])
        } else{
            finalArray.push(0);
        }
        charCode++
    }
    return finalArray;
}
