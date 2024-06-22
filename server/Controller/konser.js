const { query } = require("../Database/db");


const addKonser = async (req, res) => {
  const { namaKonser, sampulKonser, lokasiKonser, genre, artis, detailKonser, tglKonser } = req.body;
  try {
    await query("INSERT INTO konser (nama_konser, sampul_konser, lokasi_konser, genre, artis, detail_konser, tgl_konser) VALUES(?,?,?,?,?,?,?)", [namaKonser, sampulKonser, lokasiKonser, genre, artis, detailKonser, tglKonser]);
    return res.status(200).json({
      pesan: "penambahan konser berhasil",
      data: {
        ...req.body,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

//   const getKonser = async (req, res) => {
//     // const { namaKonser, sampulKonser, lokasiKonser, genre, artis, detailKonser, tglKonser } = req.body;
//     try {
//       await query("select * from konser");
//       return res.status(200).json({
//         pesan: "Konser berhasil diakses",
//         data: {
//           ...req.body,
//         },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

const getKonser = async (req, res) => {
  try {
    const result = await query("SELECT * FROM konser");
    return res.status(200).json({ data: result });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addKonser,
  getKonser
};