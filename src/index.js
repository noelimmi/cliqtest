import express from "express";
import middleware from "./middleware";
import cliq from "./routes/cliq";

const PORT = process.env.PORT || 3000;

const app = express();
middleware(app);

//Routes
app.use("/cliq", cliq);

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));