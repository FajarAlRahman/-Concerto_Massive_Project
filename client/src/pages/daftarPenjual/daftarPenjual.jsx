// import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { React, useRef, useState, useEffect } from "react";
// import {faCheck, }
import "./daftarPenjual.css";

import hideImg from "../../assets/img/View_hide_fill.png"
import background from "../../assets/img/Background.jpeg"

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const DaftarPenjual = () => {
    const navigate = useNavigate();


    return (
        <div className="pendaftaranPenjual">
            <img className="icon" alt="" src={background} />
            <div className="pendaftaran__child"></div>
            <div className="pendaftaran__item"></div>
            <b className="pendaftaran__text">Pendaftaran</b>
            <b className="pendaftaran__text2">Yuk, daftarkan dirimu sekarang!</b>
            <b className="concerto">concerto.</b>

    
            <div className="input-container" style={{ top: 245 }}>
                <input
                    type="text"
                    id = "username"
                    name="nama_lengkap"
                    // ref={userRef}
                    className="input-field"
                    placeholder="Nama Lengkap" 
                    // autocomplate="off"
                    // onChange={(e)=> setUser(e.target.value)} 
                    // required
                    // aria-invalid = {validName ? "false" : "true"}
                    // aria-describedby = "uidnote"
                    // onFocus = {() => setUserFocus(true)}
                    // onBlur = {() => setUserFocus(false)}
                    />
            </div>
            <div className="input-container" style={{ top: 316 }}>
                <input
                    type="email"
                    name="email"
                    className="input-field"
                    placeholder="Email" />
            </div>
            <div className="input-container" style={{ top: 387 }}>
                <input
                    type="text"
                    name="nomer_whatsapp"
                    className="input-field"
                    placeholder="Nomer WhatsApp" />
            </div>
            <div className="input-container" style={{ top: 458 }}>
                <input
                    type="password"
                    name="password"
                    className="input-field"
                    placeholder="Password" />
                <img className="view-hide-fill-icon" alt="" src={hideImg} />
            </div>
            <div className="input-container" style={{ top: 529 }}>
                <input
                    type="password"
                    name="konfirmasi_password"
                    className="input-field"
                    placeholder="Konfirmasi Password" />
                <img className="view-hide-fill-icon" alt="" src={hideImg} />
            </div>
            <div className="daftar-sekarang-wrapper">
                <button type="button" className="daftar-sekarang-button" onClick={() => navigate('../homePenjual')}>
                    Daftar Sekarang
                </button>
            </div>

            <div className="sudah-memiliki-akun" >Sudah memiliki akun?</div>
            <a type="button" className="masuk" onClick={() => navigate('../loginPenjual')}>Masuk</a>
        </div>
    );
}



export default DaftarPenjual;
