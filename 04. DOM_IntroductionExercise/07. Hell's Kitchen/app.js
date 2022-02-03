function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const input = JSON.parse(document.querySelector("#inputs > textarea").value);
      const restaurants = [];

      for (let restaurant of input) {
         let [restaurantName, restaurantWorkersInfo] = restaurant.split(' - ');

         if (!restaurants.map(item => item.name).includes(restaurantName)) {
            restaurants.push({
               name: restaurantName,
               workers: []
            })
         }

         let restaurantWorkers = [];
         let [...restaurantWorkersData] = restaurantWorkersInfo.split(', ');
         restaurantWorkersData.forEach(record => {
            const workerObj = {};
            let [workerName, workerSalary] = record.split(' ');
            workerObj['name'] = workerName;
            workerObj['salary'] = Number(workerSalary);
            restaurantWorkers.push(workerObj)
         });

         const objToAddWorkers = restaurants.find(obj => obj.name === restaurantName);
         objToAddWorkers.workers = objToAddWorkers.workers.concat(restaurantWorkers);
      }

      for (let restaurant of restaurants) {
         let salarySUM = 0;
         let salaryMAX = 0;
         let workers = restaurant['workers'];

         for (let worker of workers) {
            salarySUM += worker.salary;
            if (worker.salary > salaryMAX) {
               salaryMAX = worker.salary;
            }
         }

         restaurant['salaryAVG'] = (Math.round(salarySUM / workers.length * 100) / 100).toFixed(2);
         restaurant['salaryMAX'] = salaryMAX.toFixed(2);
      }

      let bestRestaurants = restaurants.sort((a, b) => b.salaryAVG - a.salaryAVG);
      const bestRestaurant = bestRestaurants[0];

      document.querySelector("#bestRestaurant > p").innerText = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.salaryAVG} Best Salary: ${bestRestaurant.salaryMAX}`;

      let bestWorkers = bestRestaurant.workers.sort((a, b) => b.salary - a.salary);
      let output = '';
      for (let worker of bestWorkers) {
         output += `Name: ${worker.name} With Salary: ${worker.salary} `
      }
      document.querySelector("#workers > p").innerText = output
   }
}