function cars(commands) {
    let cars = {};

    for (let c of commands) {
        let [command1, obj, ...rest] = c.split(' ');
        let [command2, value] = rest ? rest : [];

        if (command1 === 'create') {
            if (command2 === 'inherit') {
                cars[obj] = Object.create(cars[value]);
            } else {
                cars[obj] = {}
            }
        } else if (command1 === 'set') {
            cars[obj][command2] = value
        } else if (command1 === 'print') {
            let car = [];
            for (let property in cars[obj]) {
                car.push(`${property}:${cars[obj][property]}`)
            }
            console.log(car.join(","))
        }
    }
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);