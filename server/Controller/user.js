const { query } = require("../Database/db");
const sequelize = require("sequelize");
const bcrypt = require('bcrypt');


const Register = async(req, res) => {
    const [userName, userEmail, noTlpUser, password, confPassword] = req.body;
    if (password !== confPassword) return res.status(400).json({msg:"Password dan Confirm Password tidak cocok"});
    // const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        // await user.create({
        //     username = userName,
        //     user_email = userEmail,
        //     user_no_tlp = noTlpUser,
        //     password = hashedPassword
        // });
        
        await query("INSERT INTO user (username, user_email, user_no_tlp, password) VALUES(?,?,?,?)", [userName, userEmail, noTlpUser, hashedPassword]);
        res.json({msg: "Register Berhasil..."})
    } catch (error) {
        console.log(error);
    }
}


// const addUser = async (req, res) => {
//     const { userName, password, userEmail } = req.body;
//     try {

//         const hashedPassword = await bcrypt.hash(password, 10);

//         await query("INSERT INTO user (username, password, user_email) VALUES(?,?,?)", [userName, hashedPassword, userEmail]);
//         return res.status(200).json({
//             pesan: "penambahan user berhasil",
//             data: {
//                 ...req.body,
//             },
//         });
//     } catch (error) {
//         console.log(error);
//     }
// };

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await query("SELECT username, user_email FROM user where id_user = ?", [id]);
        return res.status(200).json({ data: result });
    } catch (error) {
        return res.status(400).json({ pesan: "ada yg salah", error });
    }
};

const getUserByEmail = async (req, res) => {
    const { email } = req.body;
    try {
        const result = await query("SELECT username, user_email FROM user where user_email = ?", [email]);
        return res.status(200).json({ data: result });
    } catch (error) {
        return res.status(400).json({ pesan: "ada yg salah", error });
    }
};

// const getSiswa = async (req, res) => {
//   try {
//     const result = await query("SELECT * FROM mahasiswa");
//     return res.status(200).json({ data: result });
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = {
    Register,
    // addUser,
    getUserById
};