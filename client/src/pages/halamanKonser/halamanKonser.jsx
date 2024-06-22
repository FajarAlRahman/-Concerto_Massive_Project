import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import "./halamanKonser.css";
import Modal from "../../components/ui/Modal";

import sampulKonser from '../../assets/img/sheilaon7.jpeg';
import iconLokasi from '../../assets/img/Pin_fill_black.svg';
import iconTgl from '../../assets/img/Date_range_fill_black.svg';
import iconKeranjangPink from '../../assets/img/Basket_alt_3_fill_pink.svg';


export const HalamanKonser = () => {
    const navigate = useNavigate();
    const [selectedTicketPrice, setSelectedTicketPrice] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTicketChange = (price) => {
        setSelectedTicketPrice(price);
    };

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

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
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="flexRadioDefault" 
                                            id="flexRadioDefault1" 
                                            onChange={() => handleTicketChange(750000)}
                                        />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            <div className="wrapper-label-tiket">
                                                <h3 className="label-tiket">VVIP</h3>
                                                <h5 className="text-harga">Harga</h5>
                                                <h3 className="harga-tiket">Rp 750.000</h3>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="flexRadioDefault" 
                                            id="flexRadioDefault2" 
                                            onChange={() => handleTicketChange(500000)}
                                        />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            <div className="wrapper-label-tiket">
                                                <h3 className="label-tiket">VIP</h3>
                                                <h5 className="text-harga">Harga</h5>
                                                <h3 className="harga-tiket">Rp 500.000</h3>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="flexRadioDefault" 
                                            id="flexRadioDefault3" 
                                            onChange={() => handleTicketChange(250000)}
                                        />
                                        <label className="form-check-label" htmlFor="flexRadioDefault3">
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
                                            <h3 className="total-harga">Rp {selectedTicketPrice.toLocaleString()}</h3>
                                        </div>
                                        <button type="button" className="btn btn-pilihan-keranjang" onClick={handleModalOpen}>
                                            <img src={iconKeranjangPink} alt="" className="icon-btn-pilihan-tiket" />
                                            Beli Tiket
                                        </button>
                                        <button type="button" className="btn btn-pilihan-beli" onClick={handleModalOpen}>Pesan Sekarang</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={handleModalClose}>
                <div className='modal-body'>
                    <div className='head-body'>
                        {/* <FaCheckCircle className="icon-check" color='#DF20A3' size={84} /> */}
                        <h3 className="title-modal-hlm-konser">Konfirmasi</h3>
                    </div>
                    <div className='body-content'>
                        <div className="data-diri-modal">
                            <h6>E-Tiket Anda akan langsung dikirim ke</h6>
                            <h6>Email : <span>randahayu@gmail.com</span></h6>
                            <h6>WhatsApp : <span>088812345678</span></h6>
                        </div>
                        <div className="item-tiket-modal">
                            <h6>List item yang dibeli</h6>
                            <h6>Pilihan Tiket : <span>VVIP</span></h6>
                            <h6>Jumlah : <span>1 Tiket</span></h6>
                        </div>
                    </div>
                    <div className='body-end'>
                        <p>
                        Anda yakin ingin melanjutkan? <br/>
                        Jika Anda ingin mengubah Email atau WhatsApp Anda silakan ke <br/>
                        <a href="#">Pengaturan Akun</a>
                        </p>
                    </div>
                    <div className='btn-wrapper-modal'>
                        <button type='button' className='btn btn-close-modal' onClick={handleModalClose}>Batalkan</button>
                        <button type='button' className='btn btn-lanjut-modal' onClick={() => navigate('../pembayaran')}>Ya, Lanjutkan</button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
