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
<<<<<<< HEAD
    output: {
      text: "This is response from my own server."
    }
=======
    text: "This is response from my own server."
>>>>>>> 92858ab317745e29945daa789de18abd99d5c78b
  });
});

export default router;