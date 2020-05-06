import express from "express";
import middleware from "./middleware";
import cliq from "./routes/cliq";
import path from "path";
import {
  makeErrorHandler
} from "@airbrake/node/dist/instrumentation/express";
import {
  Notifier
} from "@airbrake/node";
import config from "config"

const PORT = process.env.PORT || 3001;

const app = express();

const airbrake = new Notifier({
  projectId: config.get("AIRBRAKE_PROJECT_ID"),
  projectKey: config.get("AIRBRAKE_PROJECT_KEY")
});

//Add AirBreak middleware
app.use(makeMiddleware(airbrake));

//Apply other middleware
middleware(app);

//Serve Static
app.use(express.static("client/build"));

//Routes
app.use("/cliq", cliq);

//Error Handler
app.use(makeErrorHandler(airbrake));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));