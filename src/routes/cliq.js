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

router.post("/convert2jsobject", (req, res, next) => {
  try {
    const {
      data
    } = req.body;
    console.log(data);
    JSON.parse(data);
    res.status(200).json({
      status: 200,
      message: "Successfully parsed to JS object."
    })
  } catch (error) {
    console.error(`Error - ${error.message}`);
    res.status(500).json({
      status: 500,
      message: "Internal server error"
    })
    next(error)
  }
});

export default router;