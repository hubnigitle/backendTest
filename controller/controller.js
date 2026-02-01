import { daftarProduk, daftarKategori, nextIdProduk } from "../data/data";


// add produk
export const addProduk = (req, res) => {
    try {
        const { name, price, stock } = req.body;

    // cek tidak bisa tambah jika produk sudah ada
    const produkExist = daftarProduk.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (produkExist) {
        return res.status(400).json({
            message: "Produk sudah ada",
        });
    }

    const newProduk = {
        id: nextIdProduk(),
        name,
        price,
        stock,
    };
    daftarProduk.push(newProduk);
    res.status(201).json({
        message: "Produk berhasil ditambahkan",
        produk: newProduk,
    });
    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan pada server",
        });
    }
};