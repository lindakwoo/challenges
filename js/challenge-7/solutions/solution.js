let findSumIndices = (arr,num)=>{
    let tempArr =[]
    for(let i = 0;i<arr.length;i++){
        tempArr[i] = num-arr[i];
        if(tempArr.indexOf(arr[i])!==-1){
            return [tempArr.indexOf(arr[i]),i];
        }
    }
}
