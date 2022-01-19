function solve(arr){
    const result = [];
    let biggest = Number.MIN_SAFE_INTEGER;
    
arr.forEach((el) => {
if (el >= biggest){
    result.push(el);
    biggest = el;
}
    })
return result;
}