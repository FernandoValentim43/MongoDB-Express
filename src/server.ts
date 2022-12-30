import express from 'express';
const door = 3001;
const app = express();

const routes = require("./routes")
app.use(routes)


app.listen(3001, () => {
  console.log(`Application started on port ${door}!`);
});
