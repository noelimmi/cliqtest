import express from "express";
import middleware from "./middleware";
import cliq from "./routes/cliq";
import path from "path";

const PORT = process.env.PORT || 3001;

const app = express();
middleware(app);

//Routes
app.use("/cliq", cliq);

app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));