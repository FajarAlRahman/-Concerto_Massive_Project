import React from "react";
import "./minati.css";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import axios from "axios";

export const Minati = () => {

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const userData = JSON.parse(localStorage.getItem('userData'));

    try {
      const response = await axios.post('http://localhost:3000/register', userData);
      if (response.status === 200) {
        localStorage.removeItem('userData');
        navigate('../home');
      } else {
        console.log("Registrasi gagal");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <div className="minati">
        <div className="layer">
          <div className="header">
            <h1 className="text-header-1">
              Beritahu kami apa yang Anda minati?
            </h1>
            <h3 className="text-header-2">Pilih minimal 3 kategori</h3>
          </div>
          <div className="container">
            <div className="genre-section">
              <h3 className="label">Genre Musik</h3>
              <div className="choice">
                <Button name="Pop" />
                <Button name="Jazz" />
                <Button name="Dangdut" />
                <Button name="Rock" />
                <Button name="Klasik" />
                <Button name="Hip Hop" />
                <Button name="Country" />
                <Button name="Blues" />
                <Button name="Reggae" />
                <Button name="Dance" />
                <Button name="R&B" />
                <Button name="Rap" />
                <Button name="Metal" />
                <Button name="Lainnya" />
              </div>
            </div>

            <div className="artis-section">
              <h3 className="label">Artis</h3>
              <div className="choice">
                <Button name="Noah" />
                <Button name="Slank" />
                <Button name="Sheila on 7" />
                <Button name="Dewa 19" />
                <Button name="ST12" />
                <Button name="JKT 48" />
                <Button name="d'Masiv" />
                <Button name="Smash" />
                <Button name="Pop" />
                <Button name="Iwan Fals" />
                <Button name="Melly Goeslaw" />
                <Button name="Nadhif" />
                <Button name="Lyodra Margareta" />
                <Button name="Tiara Andini" />
                <Button name="Lainnya" />
              </div>
            </div>

            <div className="btnNav">
              <button type="button" className="btn btnSkip" onClick={handleSubmit}>Lewati</button>
              <button type="button" className="btn btnNext" onClick={handleSubmit}>Lanjutkan</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Minati;
