import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import "./pembayaran.css";
import Modal from "../../components/ui/Modal";

{/* Note : Setelah klik bayark sekarang akan keluar modal untuk melihat 
    detai, kemudian halamn pembayaran akan berubah menjadi payment result */}

import briImg from '../../assets/img/briva.svg';
import bniImg from '../../assets/img/bni.svg';
import mandiriImg from '../../assets/img/mandiri.svg';
import permataImg from '../../assets/img/permata.svg';
import gopayImg from '../../assets/img/gopay.svg';
import danaImg from '../../assets/img/dana.svg';
import shopeeImg from '../../assets/img/shopeepay.svg';
import berhasilImg  from '../../assets/img/berhasil.svg';
import gagalImg  from '../../assets/img/gagal.svg';

function Pembayaran() {
    const [user, setUser] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedPayment, setSelectedPayment] = useState("Bank Transfer");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [paymentResult, setPaymentResult] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userResponse = await axios.get('http://localhost:3000/user', { withCredentials: true });
                setUser(userResponse.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        const fetchCartItems = () => {
            const isDirectPurchase = JSON.parse(sessionStorage.getItem('isDirectPurchase'));
            if (isDirectPurchase) {
                const selectedTicket = JSON.parse(sessionStorage.getItem('cartItems'))[0]; // Get the ticket item from session storage
                setCartItems([selectedTicket]);
                setTotalPrice(selectedTicket.price + 5000);
            } else {
                const items = JSON.parse(sessionStorage.getItem('cartItems'));
                if (items) {
                    setCartItems(items);
                    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
                    setTotalPrice(subtotal + 5000);
                }
            }
        };

        fetchUserData();
        fetchCartItems();
    }, []);

    const handleBayarSekarang = async () => {
        if (!selectedPayment) {
            alert("Pilih metode pembayaran terlebih dahulu");
            return;
        }

        setIsModalOpen(true);

        try {
            const response = await axios.post('http://localhost:3000/saveTransaction', {
                userId: user.id,
                totalAmount: totalPrice,
                items: cartItems.map(item => ({
                    ticketId: item.ticket_id,  // Ubah ke ticket_id
                    quantity: item.quantity || 1
                })),
                isDirectPurchase: JSON.parse(sessionStorage.getItem('isDirectPurchase'))
            }, { withCredentials: true });

            if (response.data.transactionId) {
                setPaymentResult("Berhasil");
                sessionStorage.removeItem('cartItems');
                sessionStorage.removeItem('isDirectPurchase');
            } else {
                setPaymentResult("Gagal");
            }
        } catch (error) {
            console.error("Error saving transaction:", error);
            setPaymentResult("Gagal");
        }

        navigate('/home');
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        // setPaymentResult(
        //     Math.floor(Math.random() * 2) === 0 ? "Berhasil" : "Gagal"
        // );
    };

    if (!user || cartItems.length === 0) return <p>Loading...</p>;

    return (
        <div className="pembayaran">
            <div className="content">
                <div className='container-fluid mx-5'>
                    <div className="navigasi">Home / Jelajah / Konser / Pembayaran</div>
                    <div className="content-pembayaran">
                        <div className='grid-payment'>
                            <div className='grid-payment-left'>
                                <div className='payment-method'>
                                    <h1>Metode Pembayaran</h1>
                                    <div className={`card-payment ${selectedPayment === "BRI" ? "selected" : ""}`} onClick={() => setSelectedPayment("BRI")}>
                                        <h3>BRI Virtual Account</h3>
                                        <img className="paymentImg" src={briImg} alt='briva' />
                                    </div>
                                    <div className={`card-payment ${selectedPayment === "BNI" ? "selected" : ""}`} onClick={() => setSelectedPayment("BNI")}>
                                        <h3>BNI Virtual Account</h3>
                                        <img className="paymentImg" src={bniImg} alt='bni' />
                                    </div>
                                    <div className={`card-payment ${selectedPayment === "Mandiri" ? "selected" : ""}`} onClick={() => setSelectedPayment("Mandiri")}>
                                        <h3>Mandiri Virtual Account</h3>
                                        <img className="paymentImg" src={mandiriImg} alt='mandiri' />
                                    </div>
                                    <div className={`card-payment ${selectedPayment === "Bank Transfer" ? "selected" : ""}`} onClick={() => setSelectedPayment("Bank Transfer")}>
                                        <h3>Bank Transfer</h3>
                                        <img className="paymentImg" src={permataImg} alt='permata' />
                                    </div>
                                    <div className={`card-payment ${selectedPayment === "Gopay" ? "selected" : ""}`} onClick={() => setSelectedPayment("Gopay")}>
                                        <h3>GOPAY</h3>
                                        <img className="paymentImg" src={gopayImg} alt='gopay' />
                                    </div>
                                    <div className={`card-payment ${selectedPayment === "Dana" ? "selected" : ""}`} onClick={() => setSelectedPayment("Dana")}>
                                        <h3>DANA</h3>
                                        <img className="paymentImg" src={danaImg} alt='dana' />
                                    </div>
                                    <div className={`card-payment ${selectedPayment === "Shopeepay" ? "selected" : ""}`} onClick={() => setSelectedPayment("Shopeepay")}>
                                        <h3>Shoopeepay</h3>
                                        <img className="paymentImg" src={shopeeImg} alt='shopeepay' />
                                    </div>
                                </div>
                            </div>
                            <div className='grid-payment-right'>
                                <div className='payment-detail'>
                                    <h3>{user.full_name}</h3>
                                    <p>{user.email}</p>
                                    <p>{user.phone_number}</p>
                                    <div className='devider' />
                                    {cartItems.map((item, index) => (
                                        <div key={index}>
                                            <div className='payment-flex'>
                                                <p>{item.type} - {item.concert_name}</p>
                                                <p>Rp {item.price.toLocaleString()}</p>
                                            </div>
                                            <div className='devider' />
                                        </div>
                                    ))}
                                    <div className='payment-flex'>
                                        <p>Sub Total</p>
                                        <p>Rp {(totalPrice - 5000).toLocaleString()}</p>
                                    </div>
                                    <div className='payment-flex'>
                                        <p>Biaya Admin</p>
                                        <p>Rp 5,000</p>
                                    </div>
                                    <div className='devider' />
                                    <div className='payment-flex'>
                                        <p>Metode Pembayaran</p>
                                        <p>{selectedPayment}</p>
                                    </div>
                                    <div className='devider' />
                                    <div className='payment-flex'>
                                        <p>Total</p>
                                        <p>Rp {totalPrice.toLocaleString()}</p>
                                    </div>
                                    <div className='devider' />
                                    <div className='payment-button'>
                                        <button onClick={handleBayarSekarang}>Bayar Sekarang</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Note : Setelah klik bayark sekarang akan keluar modal untuk melihat 
                        detai, kemudian halamn pembayaran akan berubah menjadi payment result */}
                        {/* Payment resul */} 
                        {/* <div className='payment-result'>
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
                                        { paymentResult === "Berhasil" ? navigate('../home') : "" };
                                    }}
                                >
                                    {paymentResult === "Berhasil" ? "Kembali" : "Pesan Ulang"}
                                </button>
                            </div>
                        </div> */}
                        {/* End Payment resul */}


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
    );
}

export default Pembayaran;
