import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

import compassImg from '../../../assets/img/Compass_fill.svg';
import searchImg from '../../../assets/img/Search.svg';
import groubAddImg from '../../../assets/img/group_add_fil.svg';
import basketImg from '../../../assets/img/Basket_alt_3_fill.svg';
import profileImg from '../../../assets/img/profile.jpeg';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dar" >
        <div className="container-fluid mx-5">
          <Link className="navbar-brand" to="/">concerto.</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <form className="search d-flex" role="search">
                <div className="input-group flex-nowrap">
                  <span className="input-group-text" id="addon-wrapping">
                    <img className="search-icon" alt="Search fill" src={searchImg} />
                  </span>
                  <input type="search" className="form-control" placeholder="Cari Konser" aria-label="search" aria-describedby="addon-wrapping" />
                </div>
              </form>
              <li className="nav-item">
                <Link className="nav-link" to="/jelajah">
                  <img className="menu-icon" alt="menu-icon" src={compassImg} />
                  Jelajah
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cariTeman">
                  <img className="groub-icon" alt="menu-icon" src={groubAddImg} />
                  Cari Teman
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/keranjang">
                  <img className="menu-icon" alt="menu-icon" src={basketImg} />
                  Keranjang
                </Link>
              </li>
            </ul>
          </div>
          <div className="profile">
            <Link className="nav-link mx-0" to="/login">
              <img className="menu-profile" alt="menu-icon" src={profileImg} />
            </Link>
          </div>
        </div>
      </nav >
    </>
  );
};

export default Navbar;
