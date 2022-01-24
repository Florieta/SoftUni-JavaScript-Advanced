function solve(arr){
   // const result = arr.sort();
    
   // let orderNumber = 1;
   //result.forEach((el) => {
   //     console.log(`${orderNumber}.${el}`);
    //    orderNumber++;
  //  })
  arr.sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < arr.length; i++) {
      console.log(`${i+1}.${arr[i]}`)
  }
}



solve(['John',
    'Bob',
    'Christina',
'Ema']);