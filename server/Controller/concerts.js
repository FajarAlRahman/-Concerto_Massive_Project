const { query } = require("../Database/db");

const getAllConcerts = async (req, res) => {
    try {
        const concerts = await query(`
            SELECT concerts.*, MAX(tickets.price) as max_price 
            FROM concerts 
            LEFT JOIN tickets ON concerts.id = tickets.concert_id 
            GROUP BY concerts.id 
            ORDER BY concerts.name ASC
        `);
        res.json(concerts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Gagal mengambil data konser" });
    }
};

const getRecommendedConcerts = async (req, res) => {
    console.log("Session during getRecommendedConcerts:", req.session);
    const userId = req.session.userId;
    console.log("User ID:", userId);

    if (!userId) {
        return res.status(400).json({ error: "User ID is required" });
    }

    try {
        const genres = await query("SELECT genre_id FROM userpreferences WHERE user_id = ? AND genre_id IS NOT NULL", [userId]);
        const artists = await query("SELECT artist_id FROM userpreferences WHERE user_id = ? AND artist_id IS NOT NULL", [userId]);

        console.log("Genres:", genres);
        console.log("Artists:", artists);

        const genreIds = genres.map(g => g.genre_id).filter(id => id !== null);
        const artistIds = artists.map(a => a.artist_id).filter(id => id !== null);

        console.log("Filtered Genre IDs:", genreIds);
        console.log("Filtered Artist IDs:", artistIds);

        let queryStr = `
            SELECT concerts.*, MAX(tickets.price) as max_price 
            FROM concerts 
            LEFT JOIN concert_genres ON concerts.id = concert_genres.concert_id 
            LEFT JOIN concert_artists ON concerts.id = concert_artists.concert_id 
            LEFT JOIN tickets ON concerts.id = tickets.concert_id 
            WHERE 1=1
        `;

        if (genreIds.length > 0 && artistIds.length > 0) {
            queryStr += ` AND (concert_genres.genre_id IN (${genreIds.join(",")}) OR concert_artists.artist_id IN (${artistIds.join(",")}))`;
        } else if (genreIds.length > 0) {
            queryStr += ` AND concert_genres.genre_id IN (${genreIds.join(",")})`;
        } else if (artistIds.length > 0) {
            queryStr += ` AND concert_artists.artist_id IN (${artistIds.join(",")})`;
        }

        queryStr += " GROUP BY concerts.id ORDER BY concerts.name ASC";

        console.log("Query String:", queryStr);

        const recommendedConcerts = await query(queryStr);
        console.log("Recommended Concerts:", recommendedConcerts);

        res.json(recommendedConcerts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Gagal mengambil data rekomendasi konser" });
    }
};

module.exports = {
    getAllConcerts,
    getRecommendedConcerts
};
