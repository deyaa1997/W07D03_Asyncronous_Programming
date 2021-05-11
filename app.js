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
  readFile();

  const writeFile = () => {
    fs.writeFile("text.txt", "Hello World", (err) => {
      if (err) throw err;
      console.log("The file has been saved");
    });
  };
  writeFile();

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
  getPostAsync(1);
  getPostAsync(50);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
