import express from "express";
import middleware from "./middleware";
import cliqtest from "./routes/cliqtest";

const PORT = process.env.PORT || 3000;

const app = express();
middleware(app);

//Routes
app.use("/cliqtest", cliqtest);

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
