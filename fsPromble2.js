const fs = require("fs").promises;

const fsProblem2 = (filePath) => {
  fs.readFile(filePath, "utf-8")
    .then((data) => {
      data = data.toUpperCase();
      return fs.writeFile("./upperCaseFile.txt", data);
    })
    .then(() => {
      return fs.writeFile("./filenames.txt", "upperCaseFile.txt\n");
    })
    .then(() => {
      return fs.readFile("./upperCaseFile.txt", "utf-8");
    })
    .then((data) => {
      data = data
        .toLowerCase()
        .split("\n")
        .filter((e) => e !== "")
        .join()
        .split(".")
        .join("\n");
      return fs.writeFile("./lowercaseSentenceFile.txt", data);
    })
    .then(() => {
      return fs.appendFile("./filenames.txt", "lowercaseSentenceFile.txt\n");
    })
    .then(() => {
      return fs.readFile("./lowercaseSentenceFile.txt", "utf-8");
    })
    .then((data) => {
      return fs.writeFile("./sortedFile.txt", data);
    })
    .then(() => {
      return fs.appendFile("./filenames.txt", "sortedFile.txt");
    })
    .then(() => {
      return fs.readFile("./filenames.txt", "utf-8");
    })
    .then((data) => {
      data = data.split("\n");
      for( let file of data) {
        fs.unlink(file);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports.fsProblem2 = fsProblem2;
