import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./pembayaran.css";
import iconKeranjangPink from '../../assets/img/Basket_alt_3_fill_pink.svg';
import briImg from '../../assets/img/briva.svg';
import bniImg from '../../assets/img/bni.svg';
import mandiriImg from '../../assets/img/mandiri.svg';
import permataImg from '../../assets/img/permata.svg';
import gopayImg from '../../assets/img/gopay.svg';
import danaImg from '../../assets/img/dana.svg';
import shopeeImg from '../../assets/img/shopeepay.svg';
// import Modal from "../../components/ui/Modal";

function Pembayaran() {
    const [user, setUser] = useState(null);
    const [ticket, setTicket] = useState(null);
    const [concert, setConcert] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedPayment, setSelectedPayment] = useState("Bank Transfer");
    const [/* isModalOpen */, setIsModalOpen] = useState(false);
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

        const fetchConcertData = async () => {
            const concertId = sessionStorage.getItem('selectedConcertId');
            try {
                const concertResponse = await axios.get(`http://localhost:3000/concerts/${concertId}`, { withCredentials: true });
                setConcert(concertResponse.data);
            } catch (error) {
                console.error("Error fetching concert data:", error);
            }
        };

        const fetchTicketData = () => {
            const selectedTicket = JSON.parse(sessionStorage.getItem('selectedTicket'));
            if (selectedTicket) {
                setTicket(selectedTicket);
                setTotalPrice(selectedTicket.price + 5000); // Harga tiket ditambah biaya admin
            }
        };

        fetchUserData();
        fetchConcertData();
        fetchTicketData();
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
                ticketId: ticket.id,
                quantity: 1
            }, { withCredentials: true });

            if (response.data.transactionId) {
                setPaymentResult("Berhasil");
            } else {
                setPaymentResult("Gagal");
            }
        } catch (error) {
            console.error("Error saving transaction:", error);
            setPaymentResult("Gagal");
        }
        
        // Redirect to home page after payment
        navigate('/');
    };

    // const handleModalClose = () => {
    //     setIsModalOpen(false);
    //     setPaymentResult(null);
    // };

    if (!user || !concert || !ticket) return <p>Loading...</p>;

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
                                    <div className='payment-flex'>
                                        <p>{ticket.type} - {concert.name}</p>
                                        <p>Rp {ticket.price.toLocaleString()}</p>
                                    </div>
                                    <div className='devider' />
                                    <div className='payment-flex'>
                                        <p>Sub Total</p>
                                        <p>Rp {ticket.price.toLocaleString()}</p>
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
                    </div>
                </div>
                {/* <Modal isOpen={isModalOpen} onClose={handleModalClose}>
                    <div className='modal-body'>
                        <div className='head-body'>
                            <img src={iconKeranjangPink} alt="success" />
                            <h2>{paymentResult === "Berhasil" ? "Transaksi Berhasil!" : "Transaksi Gagal"}</h2>
                        </div>
                        <div className='body-content'>
                            <p>{paymentResult === "Berhasil" ? "Pembayaran berhasil dilakukan, cek email atau WhatsApp Anda untuk mendapatkan E-Tiket." : "Pembayaran gagal, silakan coba lagi."}</p>
                        </div>
                        <div className='body-end'>
                            <p>Anda perlu teman nonton? Klik <a href='#'>di sini</a></p>
                        </div>
                        <div className='button-close'>
                            <button onClick={handleModalClose}>Cek Detail</button>
                        </div>
                    </div>
                </Modal> */}
            </div>
        </div>
    );
}

export default Pembayaran;
