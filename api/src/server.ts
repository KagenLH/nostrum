import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Nostrum API.");
});

app.listen(port, () => {
    console.log(`Server running at https://localhost:${port}`);
});