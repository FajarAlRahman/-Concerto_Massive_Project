import React, { useState } from "react";
import { CgChevronRight } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import "./pendapatan.css";
import commercialImg from "../../assets/img/commercial.png";
import cashImg from "../../assets/img/cash.png";
import ticketImg from "../../assets/img/ticket.png";

export const Pendapatan = () => {
    const [activeMenu, setActiveMenu] = useState("Pendapatan");

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    return (
        <>
            <div className="pendapatan">
                <div className="content">
                    <div className="container-fluid mx-5">
                        <div className="navigasi">Home / Konser Anda</div>
                        <h1 className="header">Lihat Pendapatan Anda</h1>
                        <div className="content-pendapatan">
                        <div className="box-content-menu">
                                    <h1 className="header-menu">Pendapatan</h1>
                                    <div className="tool-menu">
                                        <div className="box-tool">
                                            <img src={commercialImg} alt="commercialImg" className="icon-tool" />
                                            <div className="detail-tool">
                                                <h3>Jumlah Konser</h3>
                                                <h5>1 Konser</h5>
                                            </div>
                                        </div>
                                        <div className="box-tool">
                                            <img src={cashImg} alt="commercialImg" className="icon-tool" />
                                            <div className="detail-tool">
                                                <h3>Total Pendapatan</h3>
                                                <h5>Rp 1.000.000</h5>
                                            </div>
                                        </div>
                                        <div className="box-tool">
                                            <img src={ticketImg} alt="commercialImg" className="icon-tool" />
                                            <div className="detail-tool">
                                                <h3>Jumlah Tiket Terjual</h3>
                                                <h5>100 Tiket</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-menu-pendapatan">
                                        <table id="data-table">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Nama Konser</th>
                                                    <th>Metode Pembayaran</th>
                                                    <th>Jumlah Tiket</th>
                                                    <th>Total Bayar</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            /</div>
                    </div>
                </div>
            </div>
        </>
    );
};
