var faker = require('faker')


var bookstores = []

for (var id = 1; id <= 20; id++) {
  var streeAddress = faker.address.streetAddress();
  var city = faker.address.city();
  var country = faker.address.country();
  
  var phoneNumber = faker.phone.phoneNumberFormat();

  bookstores.push({
    "id": id,
    "street": streeAddress,
    "city": city,
    "country": country,
    "phone": phoneNumber
  });
}


console.log(JSON.stringify(bookstores));


