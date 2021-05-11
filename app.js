const fs = require("fs");
const axios = require("axios");
const express = require("express");
const { kMaxLength } = require("buffer");

const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  const readFile = () => {
    fs.readFile("./data.txt", (err, data) => {
      if (err) throw err;
      content = data.toString();
      console.log(content);
    });
  };

  const writeFile = () => {
    fs.writeFile("text.txt", "Hello World", (err) => {
      if (err) throw err;
      console.log("The file has been saved");
    });
  };

  const getPost = (id) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        console.log(response.data);
      })
      // in `.catch()` we add the code to handel the error
      .catch((err) => {
        throw err;
      });
  };
  getPost(1);
  getPost(50);

  const getPostAsync = async (data) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + data
      );
      console.log(response.data);
    } catch (err) {
      throw err;
    }
  };

  const appendToFile = (data) => {
    fs.appendFile('data.txt', data, 'utf8' ,(err) => {
      if (err) throw err;
      console.log(`The ${data} was appended to file!`);
    });
  };
  // to add in new line
  appendToFile(`
dd`)

  const copyFile = (fileName) => {
    fs.copyFile(fileName + ".txt", "copy_of_" +fileName + ".txt", (err)=> {
      if (err) throw err;
  console.log('done');
  });
  };
  copyFile("data")

  const newPost = JSON.stringify({
    title: "JavaScript Basics",
    body: "This post contains information about javaScript ",
    // the id of the user who is going to create the post
    userId: 1,
  });
  
  const createPost = (post) => {
    post = JSON.parse(post)
    axios
      .post("https://jsonplaceholder.typicode.com/posts/" , post)
      .then((response) => {
        console.log(response.data);
      })
      // in `.catch()` we add the code to handel the error
      .catch((err) => {
        throw err;
      });
  };
  createPost(newPost)


});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
