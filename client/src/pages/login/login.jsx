import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

import hideImg from "../../assets/img/View_hide_fill.png"


export const Login = () => {

    const navigate = useNavigate();

    return (
        <>
            <div class="p-login">
                <div class="overlap-wrapper">
                    <div class="overlap">
                        <div class="rectangle"></div>
                        <div class="div"></div>
                        <div class="text-wrapper">Masuk</div>
                        <div class="group">
                            <div class="overlap-group">
                                <input type="email" class="input-field" placeholder="Email" />
                            </div>
                        </div>
                        <div class="overlap-group-wrapper">
                            <div class="overlap-group">
                                <input type="text" class="input-field" placeholder="Password" />
                                <img class="view-hide-fill" src={hideImg} />
                            </div>
                        </div>
                        <button class="frame" onClick={() => navigate('../home')}>
                            <div class="text-wrapper-4" >Masuk</div>
                        </button>
                        <button class="div-wrapper" onClick={() => navigate('../daftar')}>
                            <div class="text-wrapper-4" >Daftar</div>
                        </button>
                        {/* <div class="text-wrapper-5">Masuk sebagai penjual</div> */}
                        <div class="text-wrapper-6">Lupa password</div>
                        <div class="text-wrapper-7">concerto.</div>
                    </div>
                </div>
            </div>

        </>
    );
}

// export default Login;