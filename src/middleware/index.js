import morgan from "morgan";
import express from "express";
import {
  makeMiddleware
} from "@airbrake/node/dist/instrumentation/express";
import {
  Notifier
} from "@airbrake/node";
import cors from "cors";
import config from "config"

const airbrake = new Notifier({
  projectId: config.get("AIRBRAKE_PROJECT_ID"),
  projectKey: config.get("AIRBRAKE_PROJECT_KEY")
});

export default app => {
  app.use(cors())
  app.use(makeMiddleware(airbrake));
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true
  }));
  app.use(morgan("dev"));
};