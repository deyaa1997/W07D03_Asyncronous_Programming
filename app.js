const fs = require("fs");
const axios = require("axios");
const express = require("express")

const app = express()

const port = 3000;

app.use(express.json());

app.get("/" , (req,res) => {
    const readFile = () => {
        fs.readFile("./data.txt", (err, data) => {
            if (err) throw err;
            content = data.toString();
            console.log(content);
          });
      };
      readFile()

      const writeFile = () => {
        fs.writeFile("text.txt", "Hello World", (err) => {
            if (err) throw err;
            console.log("The file has been saved");
          });
      };
      writeFile();

})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });