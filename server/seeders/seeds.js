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
  const createdUsers = await User.collection.insertMany(userData);
   let createdBooks = [];
      for (let i = 0; i < 100; i += 1) {
      const title = faker.lorem.words(Math.round(Math.random() * 20) + 1);
      const description = faker.lorem.words(Math.round(Math.random() * 40) + 1);
      const genere = faker.lorem.words(Math.round(Math.random() * 20) + 1);
      const author = faker.lorem.words(Math.round(Math.random() * 15) + 1);
      const rent = faker.lorem.num(Math.round(Math.random() * 5) + 1);
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      const { username, _id: userId } = createdUsers.ops[randomUserIndex];
      const createdBook = await Book.create({ title, description, author, username, rent});
      // const updatedUser = await User.updateOne(
      //   { _id: userId },
      //   { $push: { booklist : createdBook._id } }
      // );
      createdBooks.push(createdBook);
    }
    //create reactions
    for (let i = 0; i < 100; i += 1) {
      const reviewtext = faker.lorem.words(Math.round(Math.random() * 40) + 1);
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      const { username } = createdUsers.ops[randomUserIndex];
      const randomBookIndex = Math.floor(Math.random() * createdBooks.length);
      const { _id: bookId } = createdBooks[randomBookIndex];
      await Book.updateOne(
        { _id: bookId },
        { $push: { reviews: { reviewtext, username } } },
        { runValidators: true }
      );
    }
    // // create genere
    // for (let i = 0; i < 100; i += 1) {
    //   const genereBody = faker.lorem.words(Math.round(Math.random() * 15) + 1);
    //   // const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    //   // const { username } = createdUsers.ops[randomUserIndex];
    //   const randomBookIndex = Math.floor(Math.random() * createdBooks.length);
    //   const { _id: bookId } = createdBooks[randomBookIndex];
    //   await Book.updateOne(
    //     { _id: bookId },
    //     { $push: { genere: { genereBody } } },
    //     { runValidators: true }
    //   );
    // }
    console.log("all done!");
    process.exit(0);
});