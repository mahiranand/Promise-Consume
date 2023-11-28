const path = require("path");
const fs = require("fs").promises;

fsProblem1 = (absolutePathOfRandomDirectory, randomNumberOfFiles) => {
  fs.access(absolutePathOfRandomDirectory)
    .then(() => {
      fs.access(absolutePathOfRandomDirectory);
    })
    .catch(() => {
      fs.mkdir(absolutePathOfRandomDirectory);
    })
    .then(() => {
      const arrOfPromise = [];
      const data = { name: "mahir", age: 21 };

      for (let i = 0; i < randomNumberOfFiles; i++) {
        const fileName = `file_${i}.json`;
        let promise = fs.writeFile(
          path.join(absolutePathOfRandomDirectory, fileName),
          JSON.stringify(data)
        );
        arrOfPromise.push(promise);
      }

      return Promise.all(arrOfPromise);
    })
    .then(() => {
      console.log("file Created");
      return fs.readdir(absolutePathOfRandomDirectory, "utf-8");
    })
    .then((files) => {
      for (let file of files) {
        fs.unlink(path.join(absolutePathOfRandomDirectory, file));
      }
      console.log("file deleted");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports.fsProblem1 = fsProblem1;