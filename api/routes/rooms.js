import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Tova sa staite")
});

export default router