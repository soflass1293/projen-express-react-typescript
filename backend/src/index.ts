import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

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
      void fetch(`${URL}/todos`)
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

app.get("/posts", (_: Request, res: Response) => {
  const fn = async () => {
    try {
      void fetch(`${URL}/posts`)
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

app.get("/albums", (_: Request, res: Response) => {
  const fn = async () => {
    try {
      void fetch(`${URL}/albums`)
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

app.get("/photos", (_: Request, res: Response) => {
  const fn = async () => {
    try {
      void fetch(`${URL}/photos`)
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
