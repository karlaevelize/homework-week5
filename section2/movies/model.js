const Sequelize = require("sequelize");
const db = require("../sequelize-rest");

const Movie = db.define("movie", {
  title: Sequelize.STRING,
  yearOfRelease: Sequelize.CHAR,
  synopsis: Sequelize.STRING
});

db.sync()
  .then(() => Movie.truncate())
  .then(() =>
    Promise.all([
      Movie.create({
        title: "Harry Potter and the Philosopher's Stone",
        yearOfRelease: 2001,
        synopsis:
          "Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him."
      }),
      Movie.create({
        title: "Harry Potter and the Chamber of Secrets",
        yearOfRelease: 2002,
        synopsis:
          "A house elf warns Harry against returning to Hogwarts, but he decides to ignore it. When students and creatures at the school begin to get petrified, Harry finds himself surrounded in mystery."
      }),
      Movie.create({
        title: "Harry Potter and the Prisoner of Azkaban",
        yearOfRelease: 2004,
        synopsis:
          "Harry Potter learns that Sirius Black has escaped from the prison of Azkaban and is planning to kill him. Meanwhile, Hagrid is distraught when his hippogriff, Buckbeak, is sentenced to death."
      })
    ])
  )
  .catch(console.error);

module.exports = Movie;
