import express from "express";
import getMangaList from "../controllers/mangalist.controller.js";
import mdLogin from "../controllers/mdlogin.controller.js";

const router = express.Router();

router.get("/mangaList", getMangaList);
router.post("/login", mdLogin);

export default router;
