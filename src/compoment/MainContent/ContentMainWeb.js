import React, { Component } from 'react';
import '../MainContent/container.css'
import '../MainContent/slider.css'
import Animeitem from './animeitem';
import MySilder from './mySilder';
import MovieOnGoing from './MovieOnGoing';
import Advertisement from './advertisement';
import Rankanimeitem from './rankanimeitem';
class ContentMainWeb extends Component {
    render() {
        return (
            <div id="container">
                <MySilder></MySilder>
                {/* Phim sắp chiếu  */}
                <MovieOnGoing></MovieOnGoing>
                {/* Type Anime  */}
                <div className="container">
                    <div className="left-main-container" style={{ width: '70%', float: 'left' }}>
                        <div className="all-anime">
                            <h3 className="HeaderAnimeType text-center" style={{ backgroundColor: '#00665d', height: '40px' }}>
                                <span className="far fa-star" />
                                <span className="far fa-star" />
                                <span className="far fa-star" />
                                <span className="far fa-star" />
                                <span>Anime</span>
                                <span className="far fa-star" />
                                <span className="far fa-star" />
                                <span className="far fa-star" />
                                <span className="far fa-star" />
                                <a href style={{ fontSize: '15px', float: 'right', paddingTop: '10px', paddingRight: '10pxx', color: 'white', textDecoration: 'underline' }}>Xem
                                    Thêm</a>
                            </h3>
                            <div className="anime-list AnimeType">
                                <div className="row" style={{ paddingLeft: '15px' }}>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/113334.jpg" view='40,000' timestart="Q2 Năm 2019" sotap="12/12 Tập" name="Date A Live"></Animeitem>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/113334.jpg" view='40,000' timestart="Q2 Năm 2019" sotap="12/12 Tập" name="Date A Live"></Animeitem>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/113334.jpg" view='40,000' timestart="Q2 Năm 2019" sotap="12/12 Tập" name="Date A Live"></Animeitem>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/113334.jpg" view='40,000' timestart="Q2 Năm 2019" sotap="12/12 Tập" name="Date A Live"></Animeitem>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/113334.jpg" view='40,000' timestart="Q2 Năm 2019" sotap="12/12 Tập" name="Date A Live"></Animeitem>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/113334.jpg" view='40,000' timestart="Q2 Năm 2019" sotap="12/12 Tập" name="Date A Live"></Animeitem>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/113334.jpg" view='40,000' timestart="Q2 Năm 2019" sotap="12/12 Tập" name="Date A Live"></Animeitem>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/113334.jpg" view='40,000' timestart="Q2 Năm 2019" sotap="12/12 Tập" name="Date A Live"></Animeitem>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/113334.jpg" view='40,000' timestart="Q2 Năm 2019" sotap="12/12 Tập" name="Date A Live"></Animeitem>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/113334.jpg" view='40,000' timestart="Q2 Năm 2019" sotap="12/12 Tập" name="Date A Live"></Animeitem>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/113334.jpg" view='40,000' timestart="Q2 Năm 2019" sotap="12/12 Tập" name="Date A Live"></Animeitem>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/113334.jpg" view='40,000' timestart="Q2 Năm 2019" sotap="12/12 Tập" name="Date A Live"></Animeitem>

                                </div>
                            </div>
                        </div>
                        <div className="all-anime">
                            <h3 className="HeaderCartoonType text-center" style={{ backgroundColor: '#00665d', height: '40px' }}>
                                <span className="far fa-star" />
                                <span className="far fa-star" />
                                <span className="far fa-star" />
                                <span className="far fa-star" />
                                <span>Cartoon</span>
                                <span className="far fa-star" />
                                <span className="far fa-star" />
                                <span className="far fa-star" />
                                <span className="far fa-star" />
                                <a href style={{ fontSize: '15px', float: 'right', paddingTop: '10px', paddingRight: '10pxx', color: 'white', textDecoration: 'underline' }}>Xem
                                    Thêm</a>
                            </h3>
                            <div className="anime-list CartoonType">
                                <div className="row" style={{ paddingLeft: '15px' }}>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/Dau-La-Dai-Luc-Phan-2.jpg" view='1,000,000' timestart="Q1 2018" sotap="60/? Tập" name="Đấu La Đại Lục"></Animeitem>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/Dau-La-Dai-Luc-Phan-2.jpg" view='1,000,000' timestart="Q1 2018" sotap="60/? Tập" name="Đấu La Đại Lục"></Animeitem>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/Dau-La-Dai-Luc-Phan-2.jpg" view='1,000,000' timestart="Q1 2018" sotap="60/? Tập" name="Đấu La Đại Lục"></Animeitem>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/Dau-La-Dai-Luc-Phan-2.jpg" view='1,000,000' timestart="Q1 2018" sotap="60/? Tập" name="Đấu La Đại Lục"></Animeitem>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/Dau-La-Dai-Luc-Phan-2.jpg" view='1,000,000' timestart="Q1 2018" sotap="60/? Tập" name="Đấu La Đại Lục"></Animeitem>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/Dau-La-Dai-Luc-Phan-2.jpg" view='1,000,000' timestart="Q1 2018" sotap="60/? Tập" name="Đấu La Đại Lục"></Animeitem>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/Dau-La-Dai-Luc-Phan-2.jpg" view='1,000,000' timestart="Q1 2018" sotap="60/? Tập" name="Đấu La Đại Lục"></Animeitem>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/Dau-La-Dai-Luc-Phan-2.jpg" view='1,000,000' timestart="Q1 2018" sotap="60/? Tập" name="Đấu La Đại Lục"></Animeitem>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/Dau-La-Dai-Luc-Phan-2.jpg" view='1,000,000' timestart="Q1 2018" sotap="60/? Tập" name="Đấu La Đại Lục"></Animeitem>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/Dau-La-Dai-Luc-Phan-2.jpg" view='1,000,000' timestart="Q1 2018" sotap="60/? Tập" name="Đấu La Đại Lục"></Animeitem>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/Dau-La-Dai-Luc-Phan-2.jpg" view='1,000,000' timestart="Q1 2018" sotap="60/? Tập" name="Đấu La Đại Lục"></Animeitem>
                                    <Animeitem img="https://photos.animetvn.tv/upload/film/Dau-La-Dai-Luc-Phan-2.jpg" view='1,000,000' timestart="Q1 2018" sotap="60/? Tập" name="Đấu La Đại Lục"></Animeitem>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-main-container" style={{ width: '30%', float: 'right' }}>
                        {/* Quảng Cáo  */}
                        <Advertisement img="https://cdn.cet.edu.vn/wp-content/uploads/2019/02/villa-khong-gian-sang-trong.jpg"></Advertisement>
                        {/* Bảng xếp hạng anime */}
                        <div className="BXH">
                            <h3 className="text-center" style={{ backgroundColor: '#00665d' }}>BẢNG XẾP HẠNG</h3>
                            <div className="myTab" style={{ marginTop: '-7px' }}>
                                {/* Nav tabs */}
                                <ul className="nav nav-tabs">
                                    <li className="nav-item  myTabItem">
                                        <a className="nav-link active" data-toggle="tab" href="#Date">Ngày</a>
                                    </li>
                                    <li className="nav-item  myTabItem">
                                        <a className="nav-link " data-toggle="tab" href="#Week">Tuần</a>
                                    </li>
                                    <li className="nav-item myTabItem">
                                        <a className="nav-link " data-toggle="tab" href="#Month">Tháng</a>
                                    </li>
                                    <li className="nav-item myTabItem">
                                        <a className="nav-link " data-toggle="tab" href="#Season">Mùa</a>
                                    </li>
                                    <li className="nav-item myTabItem">
                                        <a className="nav-link" data-toggle="tab" href="#Year">Năm</a>
                                    </li>
                                </ul>
                                {/* Tab panes */}
                                <div className="tab-content">
                                    <div id="Date" className="container tab-pane active"><br />
                                        <div className="info-tab-pane">
                                            <ul className="rank-anime-list" style={{ backgroundColor: '#414141', margin: '-25px 0 0 -15px', width: '110%' }}>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/5rHPGDc-1.jpg" sotap="500/500 Tập" view="500,000" name="Naruto" rank="1"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/5rHPGDc-1.jpg" sotap="500/500 Tập" view="500,000" name="Naruto" rank="2"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/5rHPGDc-1.jpg" sotap="500/500 Tập" view="500,000" name="Naruto" rank="3"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/5rHPGDc-1.jpg" sotap="500/500 Tập" view="500,000" name="Naruto" rank="4"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/5rHPGDc-1.jpg" sotap="500/500 Tập" view="500,000" name="Naruto" rank="5"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/5rHPGDc-1.jpg" sotap="500/500 Tập" view="500,000" name="Naruto" rank="6"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/5rHPGDc-1.jpg" sotap="500/500 Tập" view="500,000" name="Naruto" rank="7"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/5rHPGDc-1.jpg" sotap="500/500 Tập" view="500,000" name="Naruto" rank="8"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/5rHPGDc-1.jpg" sotap="500/500 Tập" view="500,000" name="Naruto" rank="9"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/5rHPGDc-1.jpg" sotap="500/500 Tập" view="500,000" name="Naruto" rank="10"></Rankanimeitem>

                                            </ul>
                                        </div>
                                    </div>
                                    <div id="Week" className="container tab-pane fade"><br />
                                        <div className="info-tab-pane">
                                            <ul className="rank-anime-list" style={{ backgroundColor: '#414141', margin: '-25px 0 0 -15px', width: '110%' }}>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/112268.jpg" sotap="12/12 Tập" view="500,000" name="Slime" rank="1"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/112268.jpg" sotap="12/12 Tập" view="500,000" name="Slime" rank="2"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/112268.jpg" sotap="12/12 Tập" view="500,000" name="Slime" rank="3"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/112268.jpg" sotap="12/12 Tập" view="500,000" name="Slime" rank="4"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/112268.jpg" sotap="12/12 Tập" view="500,000" name="Slime" rank="5"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/112268.jpg" sotap="12/12 Tập" view="500,000" name="Slime" rank="6"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/112268.jpg" sotap="12/12 Tập" view="500,000" name="Slime" rank="7"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/112268.jpg" sotap="12/12 Tập" view="500,000" name="Slime" rank="8"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/112268.jpg" sotap="12/12 Tập" view="500,000" name="Slime" rank="9"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/112268.jpg" sotap="12/12 Tập" view="500,000" name="Slime" rank="10"></Rankanimeitem>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="Month" className="container tab-pane fade"><br />
                                        <div className="info-tab-pane">
                                            <ul className="rank-anime-list" style={{ backgroundColor: '#414141', margin: '-25px 0 0 -15px', width: '110%' }}>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/110185.jpg" sotap="12/12 Tập" view="500,000" name="Thất hình đại tội" rank="1"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/110185.jpg" sotap="12/12 Tập" view="500,000" name="Thất hình đại tội" rank="2"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/110185.jpg" sotap="12/12 Tập" view="500,000" name="Thất hình đại tội" rank="3"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/110185.jpg" sotap="12/12 Tập" view="500,000" name="Thất hình đại tội" rank="4"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/110185.jpg" sotap="12/12 Tập" view="500,000" name="Thất hình đại tội" rank="5"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/110185.jpg" sotap="12/12 Tập" view="500,000" name="Thất hình đại tội" rank="6"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/110185.jpg" sotap="12/12 Tập" view="500,000" name="Thất hình đại tội" rank="7"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/110185.jpg" sotap="12/12 Tập" view="500,000" name="Thất hình đại tội" rank="8"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/110185.jpg" sotap="12/12 Tập" view="500,000" name="Thất hình đại tội" rank="9"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/110185.jpg" sotap="12/12 Tập" view="500,000" name="Thất hình đại tội" rank="10"></Rankanimeitem>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="Season" className="container tab-pane fade"><br />
                                        <div className="info-tab-pane">
                                            <ul className="rank-anime-list" style={{ backgroundColor: '#414141', margin: '-25px 0 0 -15px', width: '110%' }}>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/e7c936b5eacd4fd0f89bd7b651954e6b1383245216_full.jpg" sotap="500/500 Tập" view="500,000" name="OnePice" rank="1"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/e7c936b5eacd4fd0f89bd7b651954e6b1383245216_full.jpg" sotap="500/500 Tập" view="500,000" name="OnePice" rank="2"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/e7c936b5eacd4fd0f89bd7b651954e6b1383245216_full.jpg" sotap="500/500 Tập" view="500,000" name="OnePice" rank="3"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/e7c936b5eacd4fd0f89bd7b651954e6b1383245216_full.jpg" sotap="500/500 Tập" view="500,000" name="OnePice" rank="4"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/e7c936b5eacd4fd0f89bd7b651954e6b1383245216_full.jpg" sotap="500/500 Tập" view="500,000" name="OnePice" rank="5"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/e7c936b5eacd4fd0f89bd7b651954e6b1383245216_full.jpg" sotap="500/500 Tập" view="500,000" name="OnePice" rank="6"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/e7c936b5eacd4fd0f89bd7b651954e6b1383245216_full.jpg" sotap="500/500 Tập" view="500,000" name="OnePice" rank="7"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/e7c936b5eacd4fd0f89bd7b651954e6b1383245216_full.jpg" sotap="500/500 Tập" view="500,000" name="OnePice" rank="8"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/e7c936b5eacd4fd0f89bd7b651954e6b1383245216_full.jpg" sotap="500/500 Tập" view="500,000" name="OnePice" rank="9"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/e7c936b5eacd4fd0f89bd7b651954e6b1383245216_full.jpg" sotap="500/500 Tập" view="500,000" name="OnePice" rank="10"></Rankanimeitem>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="Year" className="container tab-pane fade"><br />
                                        <div className="info-tab-pane">
                                            <ul className="rank-anime-list" style={{ backgroundColor: '#414141', margin: '-25px 0 0 -15px', width: '110%' }}>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/ac36818309ca8e2c144095f00bd314509d9601f7.jpg" sotap="200/200 Tập" view="500,000" name="Black Clover" rank="1"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/ac36818309ca8e2c144095f00bd314509d9601f7.jpg" sotap="200/200 Tập" view="500,000" name="Black Clover" rank="2"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/ac36818309ca8e2c144095f00bd314509d9601f7.jpg" sotap="200/200 Tập" view="500,000" name="Black Clover" rank="3"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/ac36818309ca8e2c144095f00bd314509d9601f7.jpg" sotap="200/200 Tập" view="500,000" name="Black Clover" rank="4"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/ac36818309ca8e2c144095f00bd314509d9601f7.jpg" sotap="200/200 Tập" view="500,000" name="Black Clover" rank="5"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/ac36818309ca8e2c144095f00bd314509d9601f7.jpg" sotap="200/200 Tập" view="500,000" name="Black Clover" rank="6"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/ac36818309ca8e2c144095f00bd314509d9601f7.jpg" sotap="200/200 Tập" view="500,000" name="Black Clover" rank="7"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/ac36818309ca8e2c144095f00bd314509d9601f7.jpg" sotap="200/200 Tập" view="500,000" name="Black Clover" rank="8"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/ac36818309ca8e2c144095f00bd314509d9601f7.jpg" sotap="200/200 Tập" view="500,000" name="Black Clover" rank="9"></Rankanimeitem>
                                                <Rankanimeitem img="https://photos.animetvn.tv/upload/film/ac36818309ca8e2c144095f00bd314509d9601f7.jpg" sotap="200/200 Tập" view="500,000" name="Black Clover" rank="10"></Rankanimeitem>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
}

export default ContentMainWeb;