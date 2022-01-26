const faker = require("faker");
const db = require("../config/connection");
const { User, Book, Genere} = require("../models");
db.once("open", async () => {
  await Book.deleteMany({});
  await User.deleteMany({});
  await Genere.deleteMany({});
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
      const title = faker.lorem.words(Math.round(Math.random() * 10) + 1);
      const description = faker.lorem.words(Math.round(Math.random() * 40) + 1);
      // const name = faker.lorem.words(Math.round(Math.random() * 15) + 1);
      const author = faker.lorem.words(Math.round(Math.random() * 5) + 1);
      //const rent = faker.random.number({ min: 5, max: 10 });
      // const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      // const { username, _id: userId } = createdUsers.ops[randomUserIndex];
      
      // const updatedgenere = await Genere.create(
      //   { _id: genereId },
      //   { $push: { name : genere._id } }
      // );
      const createdBook = await Book.create({ title, description,author});
      createdBooks.push(createdBook);
    }
    
    let createdGeneres = [];
    for (let i = 0; i < 100; i += 1) {
      const name = faker.lorem.words(Math.round(Math.random() * 15) + 1);
      // const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      // const { username } = createdUsers.ops[randomUserIndex];
      const createdGenere = await Genere.create({ name });
      const randomBookIndex = Math.floor(Math.random() * createdBooks.length);
      const { _id: bookId } = createdBooks[randomBookIndex];
      await Book.updateOne(
        { _id: bookId },
        { $push: { genere:  name  } },
        { runValidators: true }
      ); 
      createdGeneres.push(createdGenere);
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
    // create genere
    
    
    console.log("all done!");
    process.exit(0);
});