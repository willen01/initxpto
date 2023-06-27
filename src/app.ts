import express, { Request, Response } from "express";

const app = express();


app.get("/home", (req: Request, res: Response) => {
    res.send("página inicial")
})

app.get("/clients", (req: Request, res: Response) => {
    res.send("página de clientes")
})

app.listen(3333, () => {
    console.log("Server road on port 3333");
})