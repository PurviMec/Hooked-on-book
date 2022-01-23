const faker = require("faker");

const db = require("../config/connection");
const { User, Book } = require("../models");

db.once("open", async () => {
  await Book.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  // let createdBooks = [];

  //     for (let i = 0; i < 100; i += 1) {
  //     const bookTitles = faker.lorem.words(Math.round(Math.random() * 20) + 1);

  //     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //     const { username, _id: userId } = createdUsers.ops[randomUserIndex];

  //     const createdBooks = await Book.create({ bookTitles, username });

  //     const updatedUser = await User.updateOne(
  //       { _id: userId },
  //       { $push: { createdBooks: createdThought._id } }
  //     );

  //     createdThoughts.push(createdBooks);
  //   }
});








