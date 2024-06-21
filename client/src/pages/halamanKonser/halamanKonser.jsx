import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import "./halamanKonser.css";

import sampulKonser from '../../assets/img/sheilaon7.jpeg';
import iconLokasi from '../../assets/img/Pin_fill_black.svg';
import iconTgl from '../../assets/img/Date_range_fill_black.svg';
import iconKeranjangPink from '../../assets/img/Basket_alt_3_fill_pink.svg';

export const HalamanKonser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [concert, setConcert] = useState(null);

    useEffect(() => {
        const fetchConcert = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/concerts/${id}`, { withCredentials: true });
                console.log("Fetched Concert Data:", response.data);
                setConcert(response.data);
            } catch (error) {
                console.error("Error fetching concert:", error);
            }
        };
        fetchConcert();
    }, [id]);

    if (!concert) return <p>Loading...</p>;

    return (
        <>
            <div className="halamanKonser">
                <div className="content">
                    <div className="container-fluid mx-5">
                        <div className="navigasi">Home / Jelajah / Konser</div>

                        <div className="content-konser">
                            <h1 className="nama-konser">{concert.name}</h1>
                            <div className="wrapper-lokasi-tgl">
                                <div className="lokasi-konser">
                                    <img src={iconLokasi} alt="pinLokasi" className="icon-lokasi-tgl" />
                                    <h4 className="text-lokasi-konser">{concert.venue}</h4>
                                </div>
                                <div className="tgl-konser">
                                    <img src={iconTgl} alt="" className="icon-lokasi-tgl" />
                                    <h4 className="text-tgl-konser">{new Date(concert.date).toLocaleDateString()}</h4>
                                </div>
                            </div>
                            <div className="genre-konser">
                                <span>Genre : </span> {concert.genre}
                            </div>
                            <div className="artis-konser">
                                <span>Artis : </span> {concert.artist}
                            </div>
                            <div className="sampul-konser">
                                <img src={sampulKonser} alt="sampulKonser" className="img-sampul-konser" />
                            </div>
                            <h2 className="label-detail-konser">Detail Konser</h2>
                            <div className="detail-konser">
                                <p>
                                    <span className="span-text-konser">Highlight</span><br />
                                    {concert.description}
                                </p>
                            </div>
                            <h2 className="label-detail-konser">Pilihan Tiket</h2>
                            <div className="pilihan-tiket">
                                <form action="">
                                    {concert.tickets && concert.tickets.map(ticket => (
                                        <div className="form-check" key={ticket.id}>
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id={`flexRadioDefault${ticket.id}`} />
                                            <label className="form-check-label" htmlFor={`flexRadioDefault${ticket.id}`}>
                                                <div className="wrapper-label-tiket">
                                                    <h3 className="label-tiket">{ticket.type}</h3>
                                                    <h5 className="text-harga">Harga</h5>
                                                    <h3 className="harga-tiket">Rp {ticket.price.toLocaleString()}</h3>
                                                </div>
                                            </label>
                                        </div>
                                    ))}
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
