import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./halamanKonser.css";

import sampulKonser from '../../assets/img/sheilaon7.jpeg';
import iconLokasi from '../../assets/img/Pin_fill_black.svg';
import iconTgl from '../../assets/img/Date_range_fill_black.svg';
import iconKeranjangPink from '../../assets/img/Basket_alt_3_fill_pink.svg';
import basketImg from '../../assets/img/Basket_alt_3_fill.svg';
import profileImg from '../../assets/img/profile.jpeg';
import linkedInImg from '../../assets/img/linkedin.svg';
import twitterImg from '../../assets/img/twitter.svg';
import facebookImg from '../../assets/img/facebook.svg';
import Navbar from "../../components/common/Navbar/Navbar";

export const HalamanKonser = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="halamanKonser">
                <div className="content">
                    <div className="container-fluid mx-5">
                        <div className="navigasi">Home / Jelajah / Konser</div>

                        <div className="content-konser">
                            <h1 className="nama-konser">Sheila On 7</h1>
                            <div className="wrapper-lokasi-tgl">
                                <div className="lokasi-konser">
                                    <img src={iconLokasi} alt="pinLokasi" className="icon-lokasi-tgl" />
                                    <h4 className="text-lokasi-konser">Sahid Raya Hotel & Convention Yogyakarta</h4>
                                </div>
                                <div className="tgl-konser">
                                    <img src={iconTgl} alt="" className="icon-lokasi-tgl" />
                                    <h4 className="text-tgl-konser">Rabu, 04 September 2024</h4>
                                </div>
                            </div>
                            <div className="genre-konser">
                                <span>Genre : </span> Pop
                            </div>
                            <div className="artis-konser">
                                <span>Artis : </span> Sheila On 7
                            </div>
                            <div className="sampul-konser">
                                <img src={sampulKonser} alt="sampulKonser" className="img-sampul-konser" />
                            </div>
                            <h2 className="label-detail-konser">Detail Konser</h2>
                            <div className="detail-konser">
                                <p>
                                    <span className="span-text-konser">Highlight</span><br />
                                    SHEILA ON 7 LIVE IN CONCERT<br />
                                    4 SEPTEMBER '24<br />
                                    INDRAPRASTA GRAND BALLROOM SAHID RAYA HOTEL & CONVENTION YOGYAKARTA<br />
                                    OPEN GATE: 18.00 <br />
                                    SHOW MULAI: 20.00 <br />
                                    <br />
                                    <br /><span className="span-text-konser">Highlight</span><br />
                                    <ul>
                                        <li>
                                            Wajib telah mendapatkan vaksin dan memiliki aplikasi PeduliLindungi
                                        </li>
                                        <li>
                                            Wajib menggunakan masker selama acara berlangsung

                                        </li>
                                        <li>
                                            Wajib menjaga protokol kesehatan yang berlaku

                                        </li>
                                        <li>
                                            Disarankan tidak membawa anak-anak di bawah 18 tahun
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <h2 className="label-detail-konser">Pilihan Tiket</h2>
                            <div className="pilihan-tiket">
                                <form action="">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            <div className="wrapper-label-tiket">
                                                <h3 className="label-tiket">VVIP</h3>
                                                <h5 className="text-harga">Harga</h5>
                                                <h3 className="harga-tiket">Rp 750.000</h3>
                                            </div>
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            <div className="wrapper-label-tiket">
                                                <h3 className="label-tiket">VIP</h3>
                                                <h5 className="text-harga">Harga</h5>
                                                <h3 className="harga-tiket">Rp 500.000</h3>
                                            </div>
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                        <label class="form-check-label" for="flexRadioDefault3">
                                            <div className="wrapper-label-tiket">
                                                <h3 className="label-tiket">Reguler</h3>
                                                <h5 className="text-harga">Harga</h5>
                                                <h3 className="harga-tiket">Rp 250.000</h3>
                                            </div>
                                        </label>
                                    </div>

                                    <div className="wrapper-tiket">
                                        <div className="total">
                                            <h5 className="label-total">Total</h5>
                                            <h3 className="total-harga">Rp 0</h3>
                                        </div>
                                        <button type="button" className="btn btn-pilihan-keranjang" onClick={() => navigate('#')}>
                                            <img src={iconKeranjangPink} alt="" className="icon-btn-pilihan-tiket" />
                                            Beli Tiket
                                        </button>
                                        <button type="button" className="btn btn-pilihan-beli" onClick={() => navigate('../pembayaran')}>Pesan Sekarang</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}