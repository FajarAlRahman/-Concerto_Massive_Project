const { query } = require("../Database/db");
const bcrypt = require('bcrypt');

const Register = async (req, res) => {
    const { full_name, email, phone_number, password, konfirmasi_password } = req.body;
    if (password !== konfirmasi_password) {
        return res.status(400).json({ msg: "Password dan Konfirmasi Password tidak cocok" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const userResult = await query("INSERT INTO users (full_name, email, phone_number, password, role_id) VALUES (?, ?, ?, ?, ?)", [full_name, email, phone_number, hashedPassword, 1]); // role_id 1 untuk buyer
        const userId = userResult.insertId;
        res.json({ msg: "Registrasi Berhasil", userId });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Registrasi Gagal" });
    }
};

const SavePreferences = async (req, res) => {
    const { userId, genres, artists } = req.body;
    try {
        if (genres.length > 0) {
            for (const genre of genres) {
                const genreResult = await query("SELECT id FROM genres WHERE name = ?", [genre]);
                const genreId = genreResult[0]?.id;
                if (genreId) {
                    await query("INSERT INTO userpreferences (user_id, genre_id) VALUES (?, ?)", [userId, genreId]);
                }
            }
        }

        if (artists.length > 0) {
            for (const artist of artists) {
                const artistResult = await query("SELECT id FROM artists WHERE name = ?", [artist]);
                const artistId = artistResult[0]?.id;
                if (artistId) {
                    await query("INSERT INTO userpreferences (user_id, artist_id) VALUES (?, ?)", [userId, artistId]);
                }
            }
        }

        res.json({ msg: "Preferensi Berhasil Disimpan" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Gagal Menyimpan Preferensi" });
    }
};

module.exports = {
    Register,
    SavePreferences,
};

