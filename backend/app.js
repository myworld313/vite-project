import cors from "cors";
import express from "express";
import systemRoutes from "./routes/systemRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { notFound } from "./middleware/notFound.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", systemRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
