import React from "react";
import { useNavigate } from "react-router-dom";
import "./cariTeman.css";



import btnTemanImg from '../../assets/img/User_alt_fill_black.svg';
import profileTeman from '../../assets/img/user1.jpeg';
import pinImg from '../../assets/img/Pin_fill.svg';
import vectorImg from '../../assets/img/Vector.svg';
import dateRangeImg from '../../assets/img/Date_range_fill.svg';
import groubAddImg from '../../assets/img/group_add_fil.svg';



export const Cariteman = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="cariteman">

                {/* Navbar */}
                {/* <nav class="navbar navbar-expand-lg bg-dar">
                    <div class="container-fluid mx-5">
                        <a class="navbar-brand" href="#">concerto.</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <form class="search d-flex" role="search">
                                    <div class="input-group flex-nowrap">
                                        <span class="input-group-text" id="addon-wrapping">
                                            <img className="search-icon" alt="Search fill" src={searchImg} />
                                        </span>
                                        <input type="search" class="form-control" placeholder="Cari Konser" aria-label="search" aria-describedby="addon-wrapping" />
                                    </div>
                                </form>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">
                                        <img className="menu-icon" alt="menu-icon" src={compassImg} />
                                        Jelajah
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#" onClick={() => navigate('#')}>
                                        <img className="groub-icon" alt="menu-icon" src={groubAddImg} />
                                        Cari Teman
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#" onClick={() => navigate('#')}>
                                        <img className="menu-icon" alt="menu-icon" src={basketImg} />
                                        Keranjang
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="profile">
                            <a class="nav-link mx-0" aria-current="page" href="#">
                                <img className="menu-profile" alt="menu-icon" src={profileImg} />
                            </a>
                        </div>
                    </div>
                </nav> */}


                {/* Navigasi */}
                <div className="content">
                    <div className="container-fluid mx-5">
                        <div className="navigasi">Home / Cari Teman</div>
                        <div className="wrapper-navigasi-teman">
                            {/* Filter */}
                            <div className="filter">
                                <div className="overlap-filter1">
                                    <img className="icon-filter1" alt="Pin fill" src={pinImg} />
                                    <div className="text-filter1">Gender</div>
                                    <img className="vector" alt="Vector" src={vectorImg} />
                                </div>
                                <div className="overlap-filter2">
                                    <img className="icon-filter2" alt="Date range fill" src={dateRangeImg} />
                                    <div className="text-filter2">Kategori Tiket</div>
                                    <img className="vector" alt="Vector" src={vectorImg} />
                                </div>
                            </div>


                            <div className="button-teman">
                                Teman
                                <img src={btnTemanImg} alt="button-teman" className="button-teman-img" />
                            </div>
                        </div>


                        <div className="list-teman">
                            {[...Array(8)].map((_, index) => {
                                return (
                                    <>
                                        <div className="box-teman">
                                            <img src={profileTeman} alt="" className="profile-teman" />
                                            <div className="box-detail-teman">
                                                <div className="wrapper-username">
                                                    <h4 className="username-teman">Aya Dahlia</h4>
                                                    <h4 className="minat-teman">Music Enthusiast</h4>
                                                </div>
                                                <img src={groubAddImg} alt="" className="btn-add-teman" />
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div >
                    </div>
                </div>


                {/* footer */}
                {/* <div className="footer">
                    <div className="container-fluid mx-5">
                        <div className="overlap-footer">
                            <div className="description">
                                <a class="footer-brand" href="#">concerto.</a>
                                <p className="text-description">concerto adalah platform layanan penjualan tiket konser musik
                                    yang memungkinkan siapa saja membuat, berbagi, menemukan, dan menghadiri acara yang
                                    mengobarkan semangat dan memperkaya kehidupan mereka.</p>
                                <div className="social-media">
                                    <img className="icon-social-media" src={facebookImg} alt="facebook Img" />
                                    <img className="icon-social-media" src={twitterImg} alt="twitter Img" />
                                    <img className="icon-social-media" src={linkedInImg} alt="linkedIn Img" />
                                </div>
                            </div>

                            <div className="my-account">
                                <h1 className="concerto-1">
                                    concerto
                                    <span className="titik">.</span>
                                </h1>
                                <p className="tentang-kami-hubungi">
                                    Tentang kami&nbsp;&nbsp;
                                    <br />
                                    Hubungi kami <br />
                                    Bagaimana itu bekerja <br />
                                    Ketentuan
                                </p>
                            </div>

                            <div className="stay-in-the-loop">
                                <div className="title-text-stay">Dapatkan Informasi Terbaru</div>
                                <p className="text-stay">
                                    Bergabunglah dengan email kami untuk terus mengikuti perkembangan terbaru kami untuk Acara dan konser
                                    musik
                                </p>

                                <div className="field-email">
                                    <form action="">
                                        <div class="input mb-3">
                                            <input type="text" class="form-control text-form" placeholder="Masukkan alamat email Anda..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                            <button class="ikuti-sekarang" type="button" id="button-addon2">Ikuti Sekarang</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="copyright-line" ></div>
                        <div className="copyright">
                            <p className="copyright-text">Copyright © 2024 Garuda Akasha</p>
                        </div>
                    </div>
                </div> */}

            </div>

        </>
    );
};
