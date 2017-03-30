var faker = require('faker')


var books = []

for (var bid = 1, id = 1; bid <= 50; bid++) {

  var bookName = faker.commerce.productName() + " Book";
  var publisher = faker.random.arrayElement(["Pearson", "Wiley","Oxford University Press","China Publishing Group Corporation"]);
  var category = faker.random.arrayElement(["Health", "IT","Enginerring","Fiction", "Reference", "Business"]);
  var price = faker.commerce.price(9.00, 30.00, 2, "");

  // loop all the bookstores
  for(var sid = 1; sid <= 20; sid++, id++) {
    books.push({
      "id": id,
      "product_id": bid,
      "store_id": sid,
      "name": bookName,
      "publisher": publisher,
      "category": category,
      "quantity": faker.random.number({min:5, max:30}), 
      "price": price,
      "unit": "USD"
    });
  }

}

console.log(JSON.stringify(books));


