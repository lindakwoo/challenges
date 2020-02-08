let combos = (arr)=>{
    let ind = 0;
    let finArr = [];
    let tempArr = [];
    for(let i = 0;i<arr.length;i++){

        tempArr = arr.filter((item,index)=>{
            return index!==ind;
        })
console.log(tempArr)
        finArr.push(tempArr.reduce((a,b)=>{
            return a*b;
        }))
        ind++;
    }
    return finArr;
}
