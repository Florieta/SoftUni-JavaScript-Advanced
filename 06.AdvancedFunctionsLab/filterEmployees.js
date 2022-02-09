function filterEmployees(data, filter) {
    let employees = JSON.parse(data);
    if (filter !== 'all') {
        const [criterion, value] = filter.split('-');
        employees = employees.filter(e => e[criterion] === value);
    }

    for (let [i, v] of employees.entries()) {
        console.log(`${i}. ${v.first_name} ${v.last_name} - ${v.email}`)
    }
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
);