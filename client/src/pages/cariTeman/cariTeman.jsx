import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cariTeman.css";

import btnTemanImg from '../../assets/img/User_alt_fill_black.svg';
import profileTeman from '../../assets/img/user1.jpeg';
import groubAddImg from '../../assets/img/group_add_fil.svg';

// Data teman (untuk contoh)
const temanData = [
    { id: 1, name: "Aya Dahlia", interest: "Music Enthusiast", gender: "Laki-laki", category: "VVIP" },
    { id: 2, name: "Budi Santoso", interest: "Movie Buff", gender: "Laki-laki", category: "VIP" },
    { id: 3, name: "Cindy Melati", interest: "Bookworm", gender: "Perempuan", category: "Reguler" },
    // Tambahkan data teman lainnya di sini
];

export const Cariteman = () => {
    const navigate = useNavigate();
    const [genderFilter, setGenderFilter] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const [filteredTeman, setFilteredTeman] = useState(temanData);

    // Fungsi untuk memfilter data teman
    const filterTeman = (gender, category) => {
        let filtered = temanData;

        if (gender) {
            filtered = filtered.filter(teman => teman.gender === gender);
        }

        if (category) {
            filtered = filtered.filter(teman => teman.category === category);
        }

        setFilteredTeman(filtered);
    };

    // Event handler untuk perubahan pada filter gender
    const handleGenderChange = (e) => {
        const value = e.target.value;
        setGenderFilter(value);
        filterTeman(value, categoryFilter);
    };

    // Event handler untuk perubahan pada filter kategori
    const handleCategoryChange = (e) => {
        const value = e.target.value;
        setCategoryFilter(value);
        filterTeman(genderFilter, value);
    };

    return (
        <>
            <div className="cariteman">
                <div className="content">
                    <div className="container-fluid mx-5">
                        <div className="navigasi">Home / Cari Teman</div>
                        <div className="wrapper-navigasi-teman">
                            <div className="filter">
                                <select className="overlap-filter" value={genderFilter} onChange={handleGenderChange}>
                                    <option value="">Gender</option>
                                    <option value="Laki-laki">Laki-laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </select>
                                <select className="overlap-filter" value={categoryFilter} onChange={handleCategoryChange}>
                                    <option value="">Kategori Tiket</option>
                                    <option value="VVIP">VVIP</option>
                                    <option value="VIP">VIP</option>
                                    <option value="Reguler">Reguler</option>
                                </select>
                            </div>
                            <button className="button-teman" onClick={() => navigate('../teman')}>
                                Teman
                                <img src={btnTemanImg} alt="button-teman" className="button-teman-img" />
                            </button>
                        </div>
                        <div className="list-teman">
                            {filteredTeman.map((teman) => (
                                <div key={teman.id} className="box-teman">
                                    <img src={profileTeman} alt="" className="profile-teman" />
                                    <div className="box-detail-teman">
                                        <div className="wrapper-username">
                                            <h4 className="username-teman">{teman.name}</h4>
                                            <h4 className="minat-teman">{teman.interest}</h4>
                                        </div>
                                        <img src={groubAddImg} alt="" className="btn-add-teman" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
