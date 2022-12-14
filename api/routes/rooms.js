import express from "express";
<<<<<<< Updated upstream
=======
import {createRoom,deleteRoom,getRoom,getRooms,updateRoom,} from "../controllers/room.js";
import { verifyAdmin } from "../utilities/verifyToken.js";
>>>>>>> Stashed changes

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Tova sa staite")
});

export default router