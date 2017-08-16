/**
 * Created by Dev-Adel on 7/13/2017.
 */
var faker = require('faker');
function generateData () {
  var patients = [];
  var history = [];
  for (var id = 0; id < 50; id++) {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var email = faker.internet.email();

    var historyID = faker.random.uuid();

    patients.push({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "email": email
    });

    history.push({
      "id": id,
      "uuid": historyID
      });
  }
  return { "patients": patients, "history": history }
}
module.exports = generateData;
