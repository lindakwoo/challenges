let findOutlier = (arr)=>{
    let odd = [];
    let even = [];
    for(item of arr){
        if((item % 2)===0){
            even.push(item);
        }else{
            odd.push(item);
        }
    }
    return even.length>odd.length? odd[0]:even[0]
}
