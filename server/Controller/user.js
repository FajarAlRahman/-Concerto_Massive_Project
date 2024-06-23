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
        //console.log(`User registered: ${full_name} with ID: ${userId}`);
        res.json({ msg: "Registrasi Berhasil", userId });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Registrasi Gagal" });
    }
};

const SavePreferences = async (req, res) => {
    const { userId, genres, artists } = req.body;
    //console.log(`Saving preferences for User ID: ${userId}`);
    try {
        if (genres.length > 0) {
            for (const genre of genres) {
                const genreResult = await query("SELECT id FROM genres WHERE name = ?", [genre]);
                const genreId = genreResult[0]?.id;
                if (genreId) {
                    await query("INSERT INTO userpreferences (user_id, genre_id) VALUES (?, ?)", [userId, genreId]);
                    //console.log(`Genre preference saved: User ID: ${userId}, Genre ID: ${genreId}`);
                }
            }
        }

        if (artists.length > 0) {
            for (const artist of artists) {
                const artistResult = await query("SELECT id FROM artists WHERE name = ?", [artist]);
                const artistId = artistResult[0]?.id;
                if (artistId) {
                    await query("INSERT INTO userpreferences (user_id, artist_id) VALUES (?, ?)", [userId, artistId]);
                    //console.log(`Artist preference saved: User ID: ${userId}, Artist ID: ${artistId}`);
                }
            }
        }

        res.json({ msg: "Preferensi Berhasil Disimpan" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Gagal Menyimpan Preferensi" });
    }
};

const Login = async (req, res) => {
    const { email, password } = req.body;
    //console.log(`Login attempt for email: ${email}`);
    try {
        const userResult = await query("SELECT * FROM users WHERE email = ?", [email]);
        if (userResult.length === 0) {
            //console.log(`Login failed: Email not found - ${email}`);
            return res.status(400).json({ msg: "Email tidak ditemukan" });
        }

        const user = userResult[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            //console.log(`Login failed: Incorrect password for email - ${email}`);
            return res.status(400).json({ msg: "Password salah" });
        }

        req.session.userId = user.id; // Simpan userId ke session
        //console.log(`Login successful: ${email}, User ID: ${user.id}`);
        //console.log("Session after login:", req.session); // Log session after login to verify

        res.json({ userId: user.id, full_name: user.full_name, email: user.email, msg: "Login Berhasil" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Login Gagal" });
    }
};

module.exports = {
    Register,
    SavePreferences,
    Login,
};
