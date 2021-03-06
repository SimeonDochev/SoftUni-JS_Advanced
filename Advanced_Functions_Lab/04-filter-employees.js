function solution(data, criteria) {
    const employees = JSON.parse(data);
    const [attribute, value] = criteria.split('-');
    let idx = 0;

    if (criteria == 'all') {
        for (let emp of employees) {
            console.log(`${idx}. ${emp['first_name']} ${emp['last_name']} - ${emp['email']}`);
            idx++;
        }
    } else {
        for (let emp of employees) {
            if (emp[attribute] == value) {
                console.log(`${idx}. ${emp['first_name']} ${emp['last_name']} - ${emp['email']}`);
                idx++;
            }
        }
    }
}

solution(`[{
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
    'all');
console.log('--------');
solution(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson');