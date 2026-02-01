import express from "express";
import { daftarProduk } from "../data/data.js";

const router = express.Router();

//read all produk
router.get("/allProduk", (req, res) => {
    res.status(200).json(daftarProduk);
})

export default router;
