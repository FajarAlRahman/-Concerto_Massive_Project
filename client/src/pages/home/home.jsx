import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./home.css";

import banner1 from '../../assets/img/banner1.png';
// import compassImg from '../../assets/img/Compass_fill.svg';
// import searchImg from '../../assets/img/Search.svg';
// import groubAddImg from '../../assets/img/group_add_fil.svg';
// import basketImg from '../../assets/img/Basket_alt_3_fill.svg';
// import profileImg from '../../assets/img/profile.jpeg';
// import linkedInImg from '../../assets/img/linkedin.svg';
// import twitterImg from '../../assets/img/twitter.svg';
// import facebookImg from '../../assets/img/facebook.svg';

import pinImg from '../../assets/img/Pin_fill_konser.svg';
import dateRangeImg from '../../assets/img/Date_range_fill_konser.svg';
import sampulKonser from '../../assets/img/sheilaon7.jpeg';
import person1 from '../../assets/img/person1.png';
import person2 from '../../assets/img/person2.png';
import profileTestimoni from '../../assets/img/profileTestimoni.jpg';

export const Home = () => {
    const [rating, setRating] = useState(5);

    useEffect(() => {
        const konserListHorizontals = document.querySelectorAll('.konser-list-horizontal');

        konserListHorizontals.forEach(konserListHorizontal => {
            konserListHorizontal.addEventListener('wheel', function (e) {
                if (e.deltaY !== 0) {
                    e.preventDefault();
                    if (e.deltaY > 0) {
                        konserListHorizontal.scrollLeft += 50;
                    } else {
                        konserListHorizontal.scrollLeft -= 50;
                    }
                }
            }, { passive: false });
        });

        return () => {
            konserListHorizontals.forEach(konserListHorizontal => {
                konserListHorizontal.removeEventListener('wheel', function (e) {
                    if (e.deltaY !== 0) {
                        e.preventDefault();
                        if (e.deltaY > 0) {
                            konserListHorizontal.scrollLeft += 50;
                        } else {
                            konserListHorizontal.scrollLeft -= 50;
                        }
                    }
                });
            });
        };
    }, []);

    const navigate = useNavigate();

    return (
        <>
            <div className="home">

                {/* Spotlight */}
                <div className="spotlight">
                    <div className="container-fluid mx-5">
                        <div id="carouselExampleDark" className="carousel carousel-dark slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="1000">
                                    <img src={banner1} className="img-banner d-block w-100" alt="..." />
                                    {/* <div className="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div> */}
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src={banner1} className="d-block w-100" alt="..." />
                                    {/* <div className="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p>
                                    </div> */}
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src={banner1} className="d-block w-100" alt="..." />
                                    {/* <div className="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
                                    </div> */}
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content Rekomendasi */}
                <div className="rekomendasi">
                    <div className="container-fluid mx-5">
                        <div className="label">Rekomendasi Konser
                            <a className="lihat-semua" href="">Lihat Semua</a>
                        </div>
                        <div className="konser-list-horizontal">
                            {[...Array(12)].map((_, index) => {
                                return (
                                    <div key={index} className="konser">
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
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Content Konser Terbaru */}
                <section className="konser-terbaru">
                    <div className="container-fluid mx-5">
                        <div className="label">Konser Terbaru
                            <a className="lihat-semua" href="">Lihat Semua</a>
                        </div>
                        <div className="konser-list-horizontal">
                            {[...Array(12)].map((_, index) => {
                                return (
                                    <div key={index} className="konser">
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
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Buat Konser */}
                <section className="buat-konser">
                    <div className="left-section">
                        <img className="person1-buat-konser" src={person1} alt="person1" />
                        <img className="person2-buat-konser" src={person2} alt="person2" />
                    </div>
                    <div className="right-section">
                        <div className="label">Buat Acara Anda sendiri</div>
                        <p className="text-buat-konser">Daftarkan acara Anda gratis di sini dan nikmati keuntungannya</p>
                        <button type="button" className="btn btn-buat-konser">Buat Konser</button>
                    </div>
                </section>

                {/* Testimoni */}
                <section className="testimoni">
                    <div className="container-fluid mx-5">
                        {[...Array(3)].map((_, index) => {
                            return (
                                <div key={index} className="box-testimoni">
                                    <div className="header-testimoni">
                                        <img className="profile-testimoni" src={profileTestimoni} alt="profileTestimoni" />
                                        <div className="right-header-testimoni">
                                            <div className="username-testimoni">Fadil Toriq</div>
                                            <div className="rating-testimoni">
                                                {[...Array(5)].map((star, starIndex) => {
                                                    const currentRating = starIndex + 1;

                                                    return (
                                                        <label key={starIndex}>
                                                            <input className="input-star" type="radio" name="rating" value={currentRating} />
                                                            <FaStar className="rating-star" size={50} color={currentRating <= (rating) ? "#ffc107" : "#e4e5e9"} />
                                                        </label>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-testimoni">
                                        Websitenya bagus, jadi gak perlu bingung mau beli tiket konser. Rekomen banget buat orang mau nyari tiket konser musik, lumayan lengkap juga.
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section>

            
            </div >
        </>
    );
}
