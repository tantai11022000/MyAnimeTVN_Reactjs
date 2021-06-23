import React, { Component } from 'react';
import '../Header/header.css'
class Header extends Component {
    render() {
        return (
            <div>
                {/* header */}
                <nav id="header">
                    <div className="container">
                        <div className="row" style={{ width: '100%' }}>
                            <a className="navbar-brand">
                                <img src="https://animetvn.com/images/logo.png" alt="AnimeTVN" />
                            </a>
                            <div className="wrap-search-bar col-md-6 row">
                                <input id="SearchBarAnime" style={{ height: '34px' }} type="text" name="searchbar" placeholder="Nhập tên anime" className="col-lg-10 col-md-6 col-sm-6" />
                                <button className="btn btn-primary">
                                </button>
                            </div>
                            <div className="dropdown" style={{ marginTop: '15px' }}>
                                <a className="dropdown-toggle" data-toggle="dropdown" style={{ color: 'white' }}>THÀNH
                                    VIÊN</a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="loginChosen ">Đăng nhập</a>
                                        <a className="createUser ">Đăng ký</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <nav className="wrap-nav-menu col-lg-12 navbar navbar-expand-lg">
                                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myNav" style={{ color: 'white', background: 'green' }}>
                                    <span className="fas fa-bars" />
                                </button>
                                <div className="collapse navbar-collapse" id="myNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="navobj">TRANG CHỦ</a>
                                        </li>
                                        <li className="dropdown nav-item" style={{ zIndex: 4 }}>
                                            <a  className="navobj dropdown-toggle" data-toggle="dropdown">
                                                ANIME MÙA
                                            </a>
                                            <div className="row dropdown-menu menu-anime-season" style={{ overflow: 'hidden' }}>
                                                <ul className="row wrap-item-dropdown" style={{ textDecoration: 'none', listStyleType: 'none', width: '800px' }}>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3  anime-season-item  ">
                                                        Xuân 2021
                                                    </li>
                                                    <li className="  col-xs-12 col-md-6 col-lg-3 anime-season-item ">Hạ
                                                        2021
                                                    </li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">Thu
                                                        2021</li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">Đông
                                                        2021</li>
                                                </ul>
                                                <ul className="row wrap-item-dropdown" style={{ textDecoration: 'none', listStyleType: 'none', width: '800px' }}>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Xuân 2020
                                                    </li>
                                                    <li className="  col-xs-12 col-md-6 col-lg-3 anime-season-item ">Hạ
                                                        2020
                                                    </li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">Thu
                                                        2020</li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">Đông
                                                        2020</li>
                                                </ul>
                                                <ul className="row wrap-item-dropdown" style={{ textDecoration: 'none', listStyleType: 'none', width: '800px' }}>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Xuân 2019
                                                    </li>
                                                    <li className="  col-xs-12 col-md-6 col-lg-3 anime-season-item ">Hạ
                                                        2019
                                                    </li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">Thu
                                                        2019</li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">Đông
                                                        2019</li>
                                                </ul>
                                                <ul className="row wrap-item-dropdown" style={{ textDecoration: 'none', listStyleType: 'none', width: '800px' }}>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Xuân 2018
                                                    </li>
                                                    <li className="  col-xs-12 col-md-6 col-lg-3 anime-season-item ">Hạ
                                                        2018
                                                    </li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">Thu
                                                        2018</li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">Đông
                                                        2018</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="dropdown nav-item" style={{ zIndex: 3 }}>
                                            <a  className="navobj dropdown-toggle" data-toggle="dropdown">
                                                THỂ LOẠI
                                            </a>
                                            <div className="row dropdown-menu menu-anime-season" style={{ overflow: 'hidden' }}>
                                                <ul className="row wrap-item-dropdown" style={{ textDecoration: 'none', listStyleType: 'none', width: '800px' }}>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3  anime-season-item ">
                                                        Hành động
                                                    </li>
                                                    <li className="  col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Harem
                                                    </li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Loli</li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Phiêu Lưu</li>
                                                </ul>
                                                <ul className="row wrap-item-dropdown" style={{ textDecoration: 'none', listStyleType: 'none', width: '800px' }}>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3  anime-season-item ">
                                                        Quân đội
                                                    </li>
                                                    <li className="  col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Cổ trang
                                                    </li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Quái vật</li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Viễn tưởng</li>
                                                </ul>
                                                <ul className="row wrap-item-dropdown" style={{ textDecoration: 'none', listStyleType: 'none', width: '800px' }}>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3  anime-season-item ">
                                                        Dị giới
                                                    </li>
                                                    <li className="  col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Võ thuật
                                                    </li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Hài hước</li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Phép thuật</li>
                                                </ul>
                                                <ul className="row wrap-item-dropdown" style={{ textDecoration: 'none', listStyleType: 'none', width: '800px' }}>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3  anime-season-item ">
                                                        Bí ẩn
                                                    </li>
                                                    <li className="  col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Mecha
                                                    </li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Lãng mạn</li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Siêu nhiên</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="dropdown nav-item" style={{ zIndex: 2 }}>
                                            <a  className="navobj dropdown-toggle" data-toggle="dropdown">
                                                NHÓM DỊCH
                                            </a>
                                            <div className="row dropdown-menu menu-anime-season" style={{ overflow: 'hidden' }}>
                                                <ul className="row wrap-item-dropdown" style={{ textDecoration: 'none', listStyleType: 'none', width: '800px' }}>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3  anime-season-item ">
                                                        3F
                                                    </li>
                                                    <li className="  col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Zing
                                                    </li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Koga</li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        YamiSora</li>
                                                </ul>
                                                <ul className="row wrap-item-dropdown" style={{ textDecoration: 'none', listStyleType: 'none', width: '800px' }}>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3  anime-season-item ">
                                                        Clip-Sub
                                                    </li>
                                                    <li className="  col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        ATeam
                                                    </li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Neko</li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        AnimeBlog</li>
                                                </ul>
                                                <ul className="row wrap-item-dropdown" style={{ textDecoration: 'none', listStyleType: 'none', width: '800px' }}>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3  anime-season-item ">
                                                        3F
                                                    </li>
                                                    <li className="  col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Zing
                                                    </li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Koga</li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        YamiSora</li>
                                                </ul>
                                                <ul className="row wrap-item-dropdown" style={{ textDecoration: 'none', listStyleType: 'none', width: '800px' }}>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3  anime-season-item ">
                                                        Clip-Sub
                                                    </li>
                                                    <li className="  col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        ATeam
                                                    </li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Neko</li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        AnimeBlog</li>
                                                </ul>
                                                <ul className="row wrap-item-dropdown" style={{ textDecoration: 'none', listStyleType: 'none', width: '800px' }}>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3  anime-season-item ">
                                                        3F
                                                    </li>
                                                    <li className="  col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Zing
                                                    </li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Koga</li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        YamiSora</li>
                                                </ul>
                                                <ul className="row wrap-item-dropdown" style={{ textDecoration: 'none', listStyleType: 'none', width: '800px' }}>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3  anime-season-item ">
                                                        Clip-Sub
                                                    </li>
                                                    <li className="  col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        ATeam
                                                    </li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Neko</li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        AnimeBlog</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="dropdown nav-item" style={{ zIndex: 1 }}>
                                            <a  className="navobj dropdown-toggle" data-toggle="dropdown">
                                                LOẠI PHIM
                                            </a>
                                            <div className="row dropdown-menu menu-anime-season left" style={{ overflow: 'hidden' }}>
                                                <ul className="row wrap-item-dropdown" style={{ textDecoration: 'none', listStyleType: 'none', width: '800px' }}>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3  anime-season-item ">
                                                        Trailer
                                                    </li>
                                                    <li className="  col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        TV Serie
                                                    </li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Movie</li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Blueray</li>
                                                </ul>
                                                <ul className="row wrap-item-dropdown" style={{ textDecoration: 'none', listStyleType: 'none', width: '800px' }}>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3  anime-season-item ">
                                                        Anime
                                                    </li>
                                                    <li className="  col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Japanese
                                                    </li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Special</li>
                                                    <li className=" col-xs-12 col-md-6 col-lg-3 anime-season-item ">
                                                        Live Action</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a className="navobj">LỌC PHIM</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="navobj">BẢNG XẾP HẠNG</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="navobj">LỊCH CHIẾU PHIM</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Header;