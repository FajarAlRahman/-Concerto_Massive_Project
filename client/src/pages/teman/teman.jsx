import React from "react";
import { useNavigate } from "react-router-dom";
import "./teman.css";

import btnTemanImg from '../../assets/img/User_alt_fill_black.svg';
import profileTeman from '../../assets/img/user1.jpeg';
import chatIcon from '../../assets/img/comment_duotone_line.svg';

const temanData = [
    { id: 1, name: "Aya Dahlia", interest: "Music Enthusiast", gender: "Perempuan", category: "VVIP" },
    { id: 2, name: "Budi Santoso", interest: "Movie Buff", gender: "Laki-laki", category: "VIP" },
    { id: 3, name: "Cindy Melati", interest: "Bookworm", gender: "Perempuan", category: "Reguler" },
];

export const Teman = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="teman">
                <div className="content">
                    <div className="container-fluid mx-5">
                        <div className="navigasi">Home / Cari Teman / Teman</div>
                        <div className="list-teman">
                            {temanData.map((teman) => (
                                <div key={teman.id} className="box-teman">
                                    <img src={profileTeman} alt="" className="profile-teman" />
                                    <div className="box-detail-teman">
                                        <div className="wrapper-username">
                                            <h4 className="username-teman">{teman.name}</h4>
                                            <h4 className="minat-teman">{teman.interest}</h4>
                                        </div>
                                        <button className="btn-chat" onClick={() => navigate('../chat')}>
                                            <img src={chatIcon} alt="" className="btn-add-chat" />
                                        </button>
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
