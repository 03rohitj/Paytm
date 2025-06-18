import express from "express";
import cors from "cors";
const app = express();
import { PORT, JWT_SECRET } from "./config";

import mainRouter from "./routes/index";

app.use(cors());    //CORS defines a way for client web applications that are loaded in one domain to interact with resources in a different domain. Also interaction between backend and front-end.
app.use(express.json());    //To use json() middleware which is used for parsing incoming request bodies as JSON objects

app.use("/api/v1", mainRouter);

app.listen(PORT, (err) => {
    if(err) console.error(err);
    else
        console.log("Server listeneing to PORT : ", PORT);
});