import morgan from "morgan";
import express from "express";

export default app => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("dev"));
};
