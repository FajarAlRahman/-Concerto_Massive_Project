const { query } = require("../Database/db");
const { sendEmail } = require("./sendEmail");

const getUserById = async (req, res) => {
    const userId = req.session.userId;
    try {
        const user = await query(`SELECT * FROM users WHERE id = ?`, [userId]);
        res.json(user[0]);
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ error: "Gagal mengambil data pengguna" });
    }
};

const saveTransaction = async (req, res) => {
    const { userId, totalAmount, ticketId, quantity } = req.body;
    try {
        const transaction = await query(`
            INSERT INTO transactions (user_id, total_amount, payment_method, status, created_at)
            VALUES (?, ?, ?, 'pending', NOW())`, [userId, totalAmount, 'Bank Transfer']);
        
        const transactionId = transaction.insertId;
        await query(`
            INSERT INTO transactionitems (transaction_id, ticket_id, quantity)
            VALUES (?, ?, ?)`, [transactionId, ticketId, quantity]);

        const [user] = await query('SELECT email FROM users WHERE id = ?', [userId]);
        const [ticket] = await query('SELECT type, price FROM tickets WHERE id = ?', [ticketId]);
        const [concert] = await query('SELECT name FROM concerts WHERE id = (SELECT concert_id FROM tickets WHERE id = ?)', [ticketId]);

        await sendEmail(user.email, concert.name, ticket.type, ticket.price);

        res.json({ transactionId });
    } catch (error) {
        console.error("Error saving transaction:", error);
        res.status(500).json({ error: "Gagal menyimpan transaksi" });
    }
};

module.exports = {
    getUserById,
    saveTransaction
};
