import http from "http";
import express from "express";
import cors from "cors";

const bodyParser = require('body-parser');
const itemsRouter = require('./routes/items');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/items', itemsRouter);

const { PORT = 9000 } = process.env;
const server = http.createServer(app);

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);