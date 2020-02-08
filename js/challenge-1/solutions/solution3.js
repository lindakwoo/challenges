let letterCount = (str)=>{
    str = str.toLowerCase().split(" ").join("");
    let finalArray = new Array(26).fill(0)
    for(let i = 0;i<str.length;i++){
        finalArray[str[i].charCodeAt()-97]++
    }
    return finalArray;
}
