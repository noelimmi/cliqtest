import express from "express";

const router = express.Router();

router.get("/callback", (req, res) => {
  console.log(req.body);
  res.json({
    text: "This is response from my own server."
  });
});

router.post("/callback", (req, res) => {
  console.log(req.body);
  res.json({
    output: {
      text: "This is response from my own server."
    }
  });
});

export default router;