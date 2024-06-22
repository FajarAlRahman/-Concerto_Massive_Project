import React from "react";
import { useNavigate } from "react-router-dom";
import "./jelajah.css";

import filterPinImg from '../../assets/img/Pin_fill.svg';
import vectorImg from '../../assets/img/Vector.svg';
import filterDateRangeImg from '../../assets/img/Date_range_fill.svg';
import walletImg from '../../assets/img/Wallet_fill.svg';


import pinImg from '../../assets/img/Pin_fill_konser.svg';
import dateRangeImg from '../../assets/img/Date_range_fill_konser.svg';
import sampulKonser from '../../assets/img/sheilaon7.jpeg';


export const Jelajah = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="jelajah">

                {/* Navigasi */}
                <div className="content">
                    <div className="container-fluid mx-5">
                        <div className="navigasi">Home / Jelajah</div>

                        {/* Filter */}
                        <div className="filter">
                            <div className="overlap-filter">
                                <img className="icon-filter" alt="Pin fill" src={filterPinImg} />
                                <div className="text-filter">Lokasi</div>
                                <img className="vector" alt="Vector" src={vectorImg} />
                            </div>
                            <div className="overlap-filter">
                                <img className="icon-filter" alt="Date range fill" src={filterDateRangeImg} />
                                <div className="text-filter">Tanggal</div>
                                <img className="vector" alt="Vector" src={vectorImg} />
                            </div>
                            <div className="overlap-filter">
                                <img className="icon-filter" alt="Wallet fill" src={walletImg} />
                                <div className="text-filter">Harga</div>
                                <img className="vector" alt="Vector" src={vectorImg} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search Result */}
                <div className="search-result">
                    <div className="container-fluid mx-5">
                        <div className="konser-search-result">
                            {[...Array(12)].map((_, index) => {
                                return (
                                    <>
                                        <div className="konser">
                                            <img className="sampul" src={sampulKonser} alt="" />
                                            <div className="label-konser">Sheila On 7</div>
                                            <div className="tanggal-konser">
                                                <img className="icon-konser" alt="Date range fill" src={dateRangeImg} />
                                                04 September 2024
                                            </div>
                                            <div className="lokasi-konser">
                                                <img className="icon-konser" alt="Pin fill" src={pinImg} />
                                                Sahid Raya Hotel & Convention Yogyakarta
                                            </div>
                                            <div className="footer-konser">
                                                <div className="harga-konser">Rp 250.000</div>
                                                <button type="button" className="btn btn-konser" onClick={() => navigate('../halamanKonser')}>Beli Tiket</button>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};
