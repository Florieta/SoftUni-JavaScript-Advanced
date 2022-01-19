function solve(arr){
    const result = arr.sort((a, b) => {
        if (a.length > b.length){
            return 1;
        }else if(b.length > a.length){
return -1;
        }else{
            return a.localeCompare(b);
        }
    })
    console.log(result.join('\n'));
}