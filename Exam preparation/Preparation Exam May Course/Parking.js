class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        vehicles = [];
    }

    addCar(carModel, carNumber) {

        if (this.vehicles.length >= this.capacity) {
            throw new Error('Not enough parking space.');
        }

        vehicles.push({
            carModel,
            carNumber,
            payed = false,
        });

        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        let car = vehicles.find(car => car.carNumber == carNumber);
        if (!car) {
            throw new Error(`"The car, you're looking for, is not found."`);
        }

        if (car.payed == false) {
            return `${carNumber} needs to pay before leaving the parking lot.`;
        }

        this.vehicles = this.vehicles.filter(obj => obj.carNumber != carNumber);

        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        let car = vehicles.find(car => car.carNumber == carNumber);
        if (!car) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }

        if (car.payed == true){
            return `${carNumber}'s driver has already payed his ticket.`;
        }else{
            car.payed = true;
            return `${carNumber}'s driver successfully payed for his stay.`;
        }
        
    } 

    getStatistics(carNumber) {
        let output = '';
        if (carNumber == undefined) {
            output += `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.\n`;
            this.vehicles
                .sort((a, b) => a.carModel.localeCompare(b.carModel))
                .forEach(curObj => {
                    let isPayed;
                    curObj.payed ? isPayed = `Has payed` : isPayed = "Not payed";
                    output += `${curObj.carModel} == ${curObj.carNumber} - ${isPayed}\n`
                })
            return output.trim();
        }
 
 
        for (const curCar of this.vehicles) {
            if (curCar.carNumber == carNumber) {
                let isPayed;
                curCar.payed ? isPayed = "Has payed" : isPayed = "Not payed";
       
                return `${curCar.carModel} == ${curCar.carNumber} - ${isPayed}`;
            }
        }
    }
}