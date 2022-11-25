import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Tova sa users")
});

export default router