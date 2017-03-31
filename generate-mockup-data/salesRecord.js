var faker = require('faker')


var records = []

// for (var bid = 1, id = 1; bid <= 50; bid++) {

//   var bookName = faker.commerce.productName() + " Book";
//   var publisher = faker.random.arrayElement(["Pearson", "Wiley","Oxford University Press","China Publishing Group Corporation"]);
//   var category = faker.random.arrayElement(["Health", "IT","Enginerring","Fiction", "Reference", "Business"]);
//   var price = faker.commerce.price(9.00, 30.00, 2, "");

//   // loop all the bookstores
//   for(var sid = 1; sid <= 20; sid++, id++) {
//     records.push({
//       "id": id,
//       "product_id": bid,
//       "store_id": sid,
//       "name": bookName,
//       "publisher": publisher,
//       "category": category,
//       "quantity": faker.random.number({min:5, max:30}), 
//       "price": price,
//       "unit": "USD"
//     });
//   }

// }
for(var i = 1; i <= 50000; i++) {
  records.push({
    'id': i,
    'timestamp': faker.date.between('2017-01-01', '2017-04-10'),
    'author' : faker.name.findName(),
    'publisher' : faker.random.arrayElement(["Pearson", "Wiley","Oxford University Press","China Publishing Group Corporation", " 	Phoenix Publishing and Media Company", "Random House", "American Book Publishing"]),
    'page' : faker.random.number({min:90, max:800}),
    'gender' : faker.random.arrayElement(["Male", "Female"]),
    'age' : faker.random.number({min:14, max:70}),
    'bookName' : faker.commerce.product() + " Book",
    'category' : faker.random.arrayElement(["Health", "IT","Enginerring","Fiction", "Reference", "Business", "Romance novel", "Non-fiction", "Comedy", "Travel", "History", "Science"]),
    'storeid': faker.random.number({min:1, max:10}),
    'price': faker.random.number({min:40, max:500}),
  });
}

console.log(JSON.stringify(records));


