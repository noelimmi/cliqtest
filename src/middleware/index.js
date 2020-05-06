import morgan from "morgan";
import express from "express";
import cors from "cors";

export default app => {
  app.use(cors())
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true
  }));
  app.use(morgan("dev"));
};