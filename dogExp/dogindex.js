const fs = require("fs");
const path = require("path");
const superagent = require("superagent");

////////////////////////////////////////////////////////////
/// callbacks... (baby callback hell)
fs.readFile(path.join(__dirname, "dog.txt"), "utf-8", (err, breedName) => {
  if (err) {
    console.log("something wrong in line no. 9");
    return;
  }
  superagent
    .get(`https://dog.ceo/api/breed/${breedName}/images/random`)
    .end((error, result) => {
      if (error) {
        console.log("something wrong in line no. 16");
        return;
      }
      fs.writeFile("dogImage.txt", `${result.body.message}`, (err, msg) => {
        if (err) {
          console.log("something wrong in line no. 21");
          return;
        }
        console.log("dog Image 1 Fetched:", result.body.message);
      });
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////
// Superagent return Promish ============>> use .then && .catch methods....

fs.readFile(path.join(__dirname, "dogPro.txt"), "utf-8", (err, breedName) => {
  if (err) {
    console.log("something wrong in line no. 35");
    return;
  }
  superagent
    .get(`https://dog.ceo/api/breed/${breedName}/images/random`)
    .then((res) => {
      fs.writeFile("dogProImage.txt", `${res.body.message}`, (err, msg) => {
        if (err) {
          console.log("something wrong in line no. 45");
          return;
        }
        console.log("dog Image 2 Fetched :", res.body.message);
      });
    })
    .catch((err) => console.log("something wrong in dogPro..."));
});

//////////////////////////////////////////////////////////////////////////////////////////////
// callback hell  ============================> Promise

// A Function That Return Promise for Read a file
const readFilePromise = (file) => {
  return new Promise((res, rej) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        rej("something Wrong");
      }
      res(data);
    });
  });
};

// A Function That Return Promise for Write a file
const WriteFilePromise = (file, data) => {
  return new Promise((res, rej) => {
    fs.writeFile(file, data, (err) => {
      if (err) {
        rej("written file rejected");
      }
      res(data);
    });
  });
};

// use methods to handle result...
readFilePromise(path.join(__dirname, "dogPromise.txt"))
  .then((BreedName) => {
    return superagent.get(
      `https://dog.ceo/api/breed/${BreedName}/images/random`
    );
  })
  .then((dogImg) => {
    return WriteFilePromise(
      path.join(__dirname, "dogImagePromise.txt"),
      dogImg.body.message
    );
  })
  .then((data) => {
    console.log("Dog Image 3 Fetched:", data);
  })
  .catch((err) => {
    console.log(err.message);
  });

///////////////////////////////////////////////////////////////////
// Use Async & await to handle callback hell....

const readAsync = (file) => {
  return new Promise((res, rej) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        rej("something Wrong");
      }
      res(data);
    });
  });
};

// A Function That Return Promise for Write a file
const WriteNewAsyncFile = (file, data) => {
  return new Promise((res, rej) => {
    fs.writeFile(file, data, (err) => {
      if (err) {
        rej("written file rejected");
      }
      res(data);
    });
  });
};

const getDogImage = async () => {
  try{
    const dogBreed = await readAsync(path.join(__dirname, "dogAsync.txt"));

  const imagePath = await superagent.get(
    `https://dog.ceo/api/breed/${dogBreed}/images/random`
  );

  await WriteNewAsyncFile(
    path.join(__dirname, "dogSyncImage.txt"),
    imagePath.body.message
  );

  console.log("dog Image 4 Fetched:", imagePath.body.message);
  } catch(err){
    console.log('Error')
    throw(
        'Error'
    )
  }
};
getDogImage();
