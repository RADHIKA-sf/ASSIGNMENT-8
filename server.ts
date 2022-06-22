import express from "express";

const app = express();
import route from "./src/routes";
app.use(express.static('./dist/public'));

app.use(express.json());
app.use('/',route);
const port = 4000;
export const myURL = `http://localhost:4000`;

app.listen(4000, () => {
    console.log(`Listening on port 4000`);
    }
);