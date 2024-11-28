import express, { Application } from "express";
import cors from "cors";
import routes from "./router";

export const app: Application = express();

app.use(cors());
app.use(express.json());
routes(app);