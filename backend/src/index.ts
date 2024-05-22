import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = 3001;
const URL = "https://jsonplaceholder.typicode.com";

app.use(cors<Request>());

app.get("/", (_: Request, res: Response) => {
  res.send({ status: "ok" });
});

app.get("/todos", (_: Request, res: Response) => {
  const fn = async () => {
    try {
      fetch(`${URL}/todos`)
        .then((response) => response.json())
        .then((json) => {
          res.send(json);
        });
    } catch (error) {
      console.log(error);
    }
  };
  void fn();
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
