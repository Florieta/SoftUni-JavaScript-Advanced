function solve(input) {
    const juice = {};
    const bottles = {};
  
    input.forEach(line => {
      const [flavor, quantity] = line.split(' => ');
  
      if (!juice[flavor]) {
        juice[flavor] = Number(quantity);
      } else {
        juice[flavor] += Number(quantity);
      }
  
      if (juice[flavor] >= 1000) {
        bottles[flavor] = Math.floor(juice[flavor] / 1000);
      }
    });
  
    Object.entries(bottles).forEach(bottle =>
      console.log(`${bottle[0]} => ${bottle[1]}`)
    );
  }