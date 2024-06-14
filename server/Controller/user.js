const { query } = require("../Database/db");
const bcrypt = require('bcrypt');

const Register = async (req, res) => {
    const { nama_lengkap, email, nomer_whatsapp, password, konfirmasi_password } = req.body;
    if (password !== konfirmasi_password) {
        return res.status(400).json({ msg: "Password dan Konfirmasi Password tidak cocok" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        await query("INSERT INTO users (nama_lengkap, email, nomer_whatsapp, password, role_id) VALUES (?, ?, ?, ?, ?)", [nama_lengkap, email, nomer_whatsapp, hashedPassword, 1]); // role_id 1 untuk buyer
        res.json({ msg: "Registrasi Berhasil" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Registrasi Gagal" });
    }
};

module.exports = {
    Register,
};
