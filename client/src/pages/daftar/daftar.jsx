import { useNavigate } from "react-router-dom";
import { React, useState } from "react";
import "./daftar.css";

import hideImg from "../../assets/img/View_hide_fill.png";
import background from "../../assets/img/Background.jpeg";

export const Daftar = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        nama_lengkap: '',
        email: '',
        nomer_whatsapp: '',
        password: '',
        konfirmasi_password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleRegister = () => {
        localStorage.setItem('userData', JSON.stringify(userData));
        navigate('../minati');
    };

    return (
        <div className="pendaftaran">
            <img className="icon" alt="" src={background} />
            <div className="pendaftaran__child"></div>
            <div className="pendaftaran__item"></div>
            <b className="pendaftaran__text">Pendaftaran</b>
            <b className="pendaftaran__text2">Yuk, daftarkan dirimu sekarang!</b>
            <b className="concerto">concerto.</b>

            <div className="input-container" style={{ top: 245 }}>
                <input
                    type="text"
                    id="username"
                    name="nama_lengkap"
                    className="input-field"
                    placeholder="Nama Lengkap"
                    onChange={handleChange}
                />
            </div>
            <div className="input-container" style={{ top: 316 }}>
                <input
                    type="email"
                    name="email"
                    className="input-field"
                    placeholder="Email"
                    onChange={handleChange}
                />
            </div>
            <div className="input-container" style={{ top: 387 }}>
                <input
                    type="text"
                    name="nomer_whatsapp"
                    className="input-field"
                    placeholder="Nomer WhatsApp"
                    onChange={handleChange}
                />
            </div>
            <div className="input-container" style={{ top: 458 }}>
                <input
                    type="password"
                    name="password"
                    className="input-field"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <img className="view-hide-fill-icon" alt="" src={hideImg} />
            </div>
            <div className="input-container" style={{ top: 529 }}>
                <input
                    type="password"
                    name="konfirmasi_password"
                    className="input-field"
                    placeholder="Konfirmasi Password"
                    onChange={handleChange}
                />
                <img className="view-hide-fill-icon" alt="" src={hideImg} />
            </div>
            <div className="daftar-sekarang-wrapper">
                <button type="button" className="daftar-sekarang-button" onClick={handleRegister}>
                    Daftar Sekarang
                </button>
            </div>

            <div className="sudah-memiliki-akun">Sudah memiliki akun?</div>
            <a type="button" className="masuk" onClick={() => navigate('../login')}>Masuk</a>
        </div>
    );
}

export default Daftar;
