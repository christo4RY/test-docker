const express = require("express");

const app = express();
app.use(express.static("public"));

app.use((req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json([
    {
      id: 1,
      title: "To Kill a Mockingbird",
    },
    {
      id: 2,
      title: "1984",
    },
    {
      id: 3,
      title: "The Great Gatsby",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
    },
  ]);
});
app.listen(3000, () => {
  console.log("server is running...");
});
