import React, { useEffect, useState } from "react";
// import { FaLocationDot } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./pembayaran.css";
import Modal from "../../components/ui/Modal";

import iconLokasi from '../../assets/img/Pin_fill_black.svg';
import iconTgl from '../../assets/img/Date_range_fill_black.svg';
import briImg from '../../assets/img/briva.svg';
import bniImg from '../../assets/img/bni.svg';
import mandiriImg from '../../assets/img/mandiri.svg';
import permataImg from '../../assets/img/permata.svg';
import gopayImg from '../../assets/img/gopay.svg';
import danaImg from '../../assets/img/dana.svg';
import shopeeImg from '../../assets/img/shopeepay.svg';
import berhasilImg  from '../../assets/img/berhasil.svg';
import gagalImg  from '../../assets/img/gagal.svg';


function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`;
}

function Pembayaran() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(600);
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [paymentResult, setPaymentResult] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCountdown) => {
                if (prevCountdown <= 0) {
                    clearInterval(timer);
                    return 0;
                } else {
                    return prevCountdown - 1;
                }
            });
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [selectedPayment, paymentResult]);

    const handleModalClose = () => {
        setIsModalOpen(false);
        setPaymentResult(
            Math.floor(Math.random() * 2) === 0 ? "Berhasil" : "Gagal"
        );
    };

    const handleBayarSekarang = () => {
        if (selectedPayment === null) {
            alert("Pilih metode pembayaran terlebih dahulu");
            return;
        }
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="pembayaran">
                <div className="content">
                    <div className='container-fluid mx-5'>
                        {/* <div className='breadcrumb'>
                            <span>
                                <a href='#'>Home</a> /{" "}
                            </span>
                            <span>
                                <a href='#'>Jelajah</a> /{" "}
                            </span>
                            <span>Sheila On 7</span>
                        </div> */}
                        <div className="navigasi">Home / Jelajah / Konser / Pembayaran</div>
                        <div className="content-pembayaran">
                        <div className='header'>
                            <h1>Sheila On 7</h1>
                        </div>
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
                            {/*
                        <div className='text-heading'>
                            <p>
                                <FaLocationDot size={10} /> Sahid Raya Hotel & Convention Yogyakarta
                            </p>
                            <p>
                                <FaCalendarAlt size={24} /> Rabu, 04 September 2024
                            </p>
                        </div> */}
                            {paymentResult === null ? (
                                <>
                                    <div className='payment-time'>
                                        <p>Sisa waktu pembayaran transaksi</p>
                                        <p className='timer'>{formatTime(countdown)}</p>
                                    </div>
                                    <div className='payment-header'>
                                        <h1>Metode Pembayaran</h1>
                                    </div>
                                    <div className='grid-payment'>
                                        <div className='grid-payment-left'>
                                            <div
                                                className={`card-payment ${selectedPayment === "BRI" ? "selected" : ""
                                                    }`}
                                                onClick={() => setSelectedPayment("BRI")}
                                            >
                                                <h3>BRI Virtual Account</h3>
                                                <img className="paymentImg"  src={briImg} alt='briva' />
                                            </div>
                                            <div
                                                className={`card-payment ${selectedPayment === "BNI" ? "selected" : ""
                                                    }`}
                                                onClick={() => setSelectedPayment("BNI")}
                                            >
                                                <h3>BNI Virtual Account</h3>
                                                <img className="paymentImg" src={bniImg} alt='bni' />
                                            </div>
                                            <div
                                                className={`card-payment ${selectedPayment === "Mandiri" ? "selected" : ""
                                                    }`}
                                                onClick={() => setSelectedPayment("Mandiri")}
                                            >
                                                <h3>Mandiri Virtual Account</h3>
                                                <img className="paymentImg" src={mandiriImg} alt='mandiri' />
                                            </div>
                                            <div
                                                className={`card-payment ${selectedPayment === "Transfer" ? "selected" : ""
                                                    }`}
                                                onClick={() => setSelectedPayment("Transfer")}
                                            >
                                                <h3>Bank Transfer</h3>
                                                <img className="paymentImg" src={permataImg} alt='permata' />
                                            </div>
                                            <div
                                                className={`card-payment ${selectedPayment === "Gopay" ? "selected" : ""
                                                    }`}
                                                onClick={() => setSelectedPayment("Gopay")}
                                            >
                                                <h3>GOPAY</h3>
                                                <img className="paymentImg" src={gopayImg} alt='gopay' />
                                            </div>
                                            <div
                                                className={`card-payment ${selectedPayment === "Dana" ? "selected" : ""
                                                    }`}
                                                onClick={() => setSelectedPayment("Dana")}
                                            >
                                                <h3>DANA</h3>
                                                <img className="paymentImg" src={danaImg} alt='dana' />
                                            </div>
                                            <div
                                                className={`card-payment ${selectedPayment === "Shopeepay" ? "selected" : ""
                                                    }`}
                                                onClick={() => setSelectedPayment("Shopeepay")}
                                            >
                                                <h3>Shoopeepay</h3>
                                                <img className="paymentImg" src={shopeeImg} alt='shopeepay' />
                                            </div>
                                        </div>
                                        <div className='grid-payment-right'>
                                            <div className='payment-detail'>
                                                <h3>Rania Dahayu</h3>
                                                <p>raniadayu@gmail.com</p>
                                                <p>+6288812345678</p>
                                                <div className='devider' />
                                                <div className='payment-flex'>
                                                    <p>VVIP ....</p>
                                                    <p>Rp 750.000</p>
                                                </div>
                                                <div className='devider' />
                                                <div className='payment-flex'>
                                                    <p>Sub Total</p>
                                                    <p>Rp 750.000</p>
                                                </div>
                                                <div className='payment-flex'>
                                                    <input
                                                        placeholder='Masukkan voucher'
                                                        className='input-vocher'
                                                    />
                                                    <p>Rp 0</p>
                                                </div>
                                                <div className='payment-flex'>
                                                    <p>Biaya Admin</p>
                                                    <p>Rp 5.000</p>
                                                </div>
                                                <div className='devider' />
                                                <div className='payment-flex'>
                                                    <p>Metode Pembayaran</p>
                                                    <p>...</p>
                                                </div>
                                                <div className='devider' />
                                                <div className='payment-flex'>
                                                    <p>Total</p>
                                                    <p>Rp 750.000</p>
                                                </div>
                                                <div className='devider' />
                                                <div className='payment-button'>
                                                    <button onClick={handleBayarSekarang}>Bayar Sekarang</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className='payment-result'>
                                    <div className='payment-result-header'>
                                        {paymentResult === "Berhasil" ? (
                                            <img className="icon-check" src={berhasilImg} alt='berhasil' />
                                        ) : (
                                            <img className="icon-check" src={gagalImg} alt='gagal' />
                                        )}
                                        <h1
                                            style={{
                                                color: paymentResult === "Berhasil" ? "#0F720D" : "#D70D0D",
                                            }}
                                        >
                                            {paymentResult === "Berhasil"
                                                ? "Pembayaran Berhasil"
                                                : "Pembayaran Gagal"}
                                        </h1>
                                    </div>
                                    <div className='payment-result-body'>
                                        <div className='payment-result-detail'>
                                            <p>Nomor Pesanan</p>
                                            <span>CN785358</span>
                                        </div>
                                        <div className='devider' />
                                        <p>Nomor Pesanan</p>
                                        <div className='payment-result-detail'>
                                            <p>Tiket</p>
                                            <span>VVIP - Sheila On 7</span>
                                        </div>
                                        <div className='payment-result-detail'>
                                            <p />
                                            <span>Senin, 4 Mei 2024 09.20</span>
                                        </div>
                                        <div className='devider' />
                                        <p>Detail Pembayaran</p>
                                        <div className='payment-result-detail'>
                                            <p>Total Pembayaran</p>
                                            <span>Rp 750.000</span>
                                        </div>
                                        <div className='payment-result-detail'>
                                            <p />
                                            <span>{selectedPayment}</span>
                                        </div>
                                    </div>
                                    <div className='payment-result-footer'>
                                        <button
                                            style={{
                                                backgroundColor:
                                                    paymentResult === "Berhasil" ? "#0F720D" : "#D70D0D",
                                            }}
                                            onClick={() => {
                                                setPaymentResult(null);
                                                {paymentResult === "Berhasil" ? navigate('../home'): ""};
                                            }}
                                        >
                                            {paymentResult === "Berhasil" ? "Kembali" : "Pesan Ulang"}
                                        </button>
                                    </div>
                                </div>
                            )}
                            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                                <div className='modal-body'>
                                    <div className='head-body'>
                                        <FaCheckCircle className="icon-check" color='#DF20A3' size={84} />
                                        <h2>Transaksi Berhasil!</h2>
                                    </div>
                                    <div className='body-content'>
                                        <p>
                                            Pembayaran berhasil dilakukan, cek email atau WhatsApp Anda untuk
                                            mendapatkan E-Tiket.{" "}
                                        </p>
                                    </div>
                                    <div className='body-end'>
                                        <p>
                                            Anda perlu teman nonton? Klik <a href='#'>di sini</a>
                                        </p>
                                    </div>
                                    <div className='btn button-close'>
                                        <button onClick={handleModalClose}>Cek Detail</button>
                                    </div>
                                </div>
                            </Modal>
                            ;
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pembayaran;
