// To create a database
use("Ticketbooking");

// to create a collection
db.createCollection("users");

// insert one document into the collection users

// db.users.insertOne({
//   userName: "Balaji S",
//   email: "sbalaji18125@gmail.com",
//   contact: "9876543121",
//   address: "5th block , Jayanagar",
//   gender: "male",
// });

// to insert multiple documents into the collection users

db.users.insertMany([
  {
    userName: "Virat kohli",
    email: "virat.kohli@gmail.com",
    contact: "9876543121",
    address: "5th block , Jayanagar",
    gender: "male",
  },
  {
    userName: "Virat kohli",
    email: "virat.kohli@gmail.com",
    contact: "9875564654",
    address: "5th block , Jayanagar",
    gender: "male",
  },

  {
    userName: "Anushka sharama",
    email: "anushka@gmail.com",
    contact: "9876543121",
    address: "5th block , Jayanagar",
    gender: "female",
  },

  {
    userName: "Narendra Modi",
    email: "Narendra.modi@gmail.com",
    contact: "987455121",
    address: "9th block , yelahanka",
    gender: "male",
  },

  {
    userName: "Sachin Tendulkar",
    email: "sachin@gmail.com",
    contact: "9564645481",
    address: "10th block , Jayanagar",
    gender: "male",
  },
]);
