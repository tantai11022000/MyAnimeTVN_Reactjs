import React, { Component } from 'react';
import '../MainContent/container.css'
import '../MainContent/slider.css'
class ContentMainWeb extends Component {
    render() {
        return (
            <div id="container">
                {/* slider trang chủ  */}
                <div className="container slider" style={{ maxHeight: '600px' }}>
                    <div id="mySilder" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" style={{ position: 'relative' }}>
                                <img src="https://photos.animetvn.tv/upload/film_big/Rqj0jky.png" className="d-block w-100" alt="..." />
                                <div className="anime-info-slider">
                                    <h3 className="name-anime text-center " style={{ color: '#f1592a' }}>GODZILLA: S.P</h3>
                                    <p className="amount-anime-slider text-center " style={{ color: 'green', fontSize: '30px' }}>11/13
                                        tập</p>
                                    <p className="descrip-anime-slider" style={{ color: 'white', textAlign: 'center' }}>Phim về các
                                        thiên tài trẻ tuổi Mei Kamino, một nhà
                                        nghiên cứu nữ và Yun Arikawa, một kỹ sư nam, khi họ phải đối mặt với một mối đe dọa
                                        chưa từng có với bạn đồng hành của mình. Khi nguy hiểm từ vực sâu xuất hiện, chỉ
                                        những thiên tài trẻ Mei, Yun và nhóm của họ mới có thể đối mặt với mối đe dọa trong
                                        Godzilla Singular Point!</p>
                                </div>
                            </div>
                            <div className="carousel-item" style={{ position: 'relative' }}>
                                <img src="https://photos.animetvn.tv/upload/film_big/mvLZCn7.png" className="d-block w-100" alt="..." />
                                <div className="anime-info-slider">
                                    <h3 className="name-anime text-center " style={{ color: '#f1592a' }}>GODZILLA: S.P</h3>
                                    <p className="amount-anime-slider text-center " style={{ color: 'green', fontSize: '30px' }}>11/13
                                        tập</p>
                                    <p className="descrip-anime-slider" style={{ color: 'white', textAlign: 'center' }}>Phim về các
                                        thiên tài trẻ tuổi Mei Kamino, một nhà
                                        nghiên cứu nữ và Yun Arikawa, một kỹ sư nam, khi họ phải đối mặt với một mối đe dọa
                                        chưa từng có với bạn đồng hành của mình. Khi nguy hiểm từ vực sâu xuất hiện, chỉ
                                        những thiên tài trẻ Mei, Yun và nhóm của họ mới có thể đối mặt với mối đe dọa trong
                                        Godzilla Singular Point!</p>
                                </div>
                            </div>
                            <div className="carousel-item" style={{ position: 'relative' }}>
                                <img src="https://photos.animetvn.tv/upload/film/jYvry2u.png" className="d-block w-100" alt="..." />
                                <div className="anime-info-slider">
                                    <h3 className="name-anime text-center" style={{ color: '#f1592a' }}>GODZILLA: S.P</h3>
                                    <p className="amount-anime-slider text-center" style={{ color: 'green', fontSize: '30px' }}>11/13
                                        tập</p>
                                    <p className="descrip-anime-slider" style={{ color: 'white', textAlign: 'center' }}>Phim về các
                                        thiên tài trẻ tuổi Mei Kamino, một nhà
                                        nghiên cứu nữ và Yun Arikawa, một kỹ sư nam, khi họ phải đối mặt với một mối đe dọa
                                        chưa từng có với bạn đồng hành của mình. Khi nguy hiểm từ vực sâu xuất hiện, chỉ
                                        những thiên tài trẻ Mei, Yun và nhóm của họ mới có thể đối mặt với mối đe dọa trong
                                        Godzilla Singular Point!</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev carousel-setup" href="#mySilder" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next carousel-setup" href="#mySilder" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                {/* kết thúc slider trang chủ  */}
                {/* Phim sắp chiếu  */}
                <div className="container">
                    <div className="MovieOnGoing" style={{ backgroundColor: '#00665d' }}>
                        <h3 className="MovieOnGoing-header text-center" style={{ height: '40px', paddingTop: '5px' }}>
                            <span className="far fa-star" />
                            <span className="far fa-star" />
                            <span className="far fa-star" />
                            <span className="far fa-star" />
                            <span>SẮP CÔNG CHIẾU</span>
                            <span className="far fa-star" />
                            <span className="far fa-star" />
                            <span className="far fa-star" />
                            <span className="far fa-star" />
                        </h3>
                        <div className="myMoveOnGoing-carousel">
                            <div id="myMoveOnGoing-carousel" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item anime-item-carousel active">
                                        <div className="row">
                                            <div className="item-anime col-md-6 col-sm-6 col-lg-2">
                                                <img className="img-item-carousel img-thumbnail img-thumbnail" src="https://photos.animetvn.tv/upload/film/113334.jpg" alt="" />
                                                <p className="time-item">Tháng 10-2021</p>
                                                <div className="name-anime-item text-center">Date A Live</div>
                                            </div>
                                            <div className="item-anime col-md-6 col-sm-6 col-lg-2">
                                                <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/111800.jpg" alt="" />
                                                <p className="time-item">Tháng 10-2021</p>
                                                <div className="name-anime-item text-center">Date A Live</div>
                                            </div>
                                            <div className="item-anime col-md-6 col-sm-6 col-lg-2">
                                                <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/114952.jpg" alt="" />
                                                <p className="time-item">Tháng 10-2021</p>
                                                <div className="name-anime-item text-center">Date A Live</div>
                                            </div>
                                            <div className="item-anime col-md-6 col-sm-6 col-lg-2">
                                                <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/114857.jpg" alt="" />
                                                <p className="time-item">Tháng 10-2021</p>
                                                <div className="name-anime-item text-center">Date A Live</div>
                                            </div>
                                            <div className="item-anime col-md-6 col-sm-6 col-lg-2">
                                                <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/114947.jpg" alt="" />
                                                <p className="time-item">Tháng 10-2021</p>
                                                <div className="name-anime-item text-center">Date A Live</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item anime-item-carousel ">
                                        <div className="row">
                                            <div className="item-anime col-md-6 col-sm-6 col-lg-2">
                                                <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/114734.jpg" alt="" />
                                                <p className="time-item">Tháng 10-2021</p>
                                                <div className="name-anime-item text-center">ABCXYABCXY</div>
                                            </div>
                                            <div className="item-anime col-md-6 col-sm-6 col-lg-2">
                                                <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/110975.jpg" alt="" />
                                                <p className="time-item">Tháng 10-2021</p>
                                                <div className="name-anime-item text-center">ABCXY</div>
                                            </div>
                                            <div className="item-anime col-md-6 col-sm-6 col-lg-2">
                                                <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/113360.jpg" alt="" />
                                                <p className="time-item">Tháng 10-2021</p>
                                                <div className="name-anime-item text-center">ABCXY</div>
                                            </div>
                                            <div className="item-anime col-md-6 col-sm-6 col-lg-2">
                                                <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/113986.jpg" alt="" />
                                                <p className="time-item">Tháng 10-2021</p>
                                                <div className="name-anime-item text-center">ABCXY</div>
                                            </div>
                                            <div className="item-anime col-md-6 col-sm-6 col-lg-2">
                                                <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/114427.jpg" alt="" />
                                                <p className="time-item">Tháng 10-2021</p>
                                                <div className="name-anime-item text-center">ABCXY</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev carousel-setup" href="#myMoveOnGoing-carousel" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next carousel-setup" href="#myMoveOnGoing-carousel" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
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
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/113334.jpg" alt="" />
                                        <p className="time-item">08/12 Tập</p>
                                        <div className="name-anime-item text-center">Date A Live</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            4000
                                        </div>
                                        <div className="time-run">Q2 2021</div>
                                    </div>
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/113334.jpg" alt="" />
                                        <p className="time-item">08/12 Tập</p>
                                        <div className="name-anime-item text-center">Date A Live</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            4000
                                        </div>
                                        <div className="time-run">Q2 2021</div>
                                    </div>
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/113334.jpg" alt="" />
                                        <p className="time-item">08/12 Tập</p>
                                        <div className="name-anime-item text-center">Date A Live</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            4000
                                        </div>
                                        <div className="time-run">Q2 2021</div>
                                    </div>
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/113334.jpg" alt="" />
                                        <p className="time-item">08/12 Tập</p>
                                        <div className="name-anime-item text-center">Date A Live</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            4000
                                        </div>
                                        <div className="time-run">Q2 2021</div>
                                    </div>
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/113334.jpg" alt="" />
                                        <p className="time-item">08/12 Tập</p>
                                        <div className="name-anime-item text-center">Date A Live</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            4000
                                        </div>
                                        <div className="time-run">Q2 2021</div>
                                    </div>
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/113334.jpg" alt="" />
                                        <p className="time-item">08/12 Tập</p>
                                        <div className="name-anime-item text-center">Date A Live</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            4000
                                        </div>
                                        <div className="time-run">Q2 2021</div>
                                    </div>
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/113334.jpg" alt="" />
                                        <p className="time-item">08/12 Tập</p>
                                        <div className="name-anime-item text-center">Date A Live</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            4000
                                        </div>
                                        <div className="time-run">Q2 2021</div>
                                    </div>
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/113334.jpg" alt="" />
                                        <p className="time-item">08/12 Tập</p>
                                        <div className="name-anime-item text-center">Date A Live</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            4000
                                        </div>
                                        <div className="time-run">Q2 2021</div>
                                    </div>
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/113334.jpg" alt="" />
                                        <p className="time-item">08/12 Tập</p>
                                        <div className="name-anime-item text-center">Date A Live</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            4000
                                        </div>
                                        <div className="time-run">Q2 2021</div>
                                    </div>
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/113334.jpg" alt="" />
                                        <p className="time-item">08/12 Tập</p>
                                        <div className="name-anime-item text-center">Date A Live</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            4000
                                        </div>
                                        <div className="time-run">Q2 2021</div>
                                    </div>
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/113334.jpg" alt="" />
                                        <p className="time-item">08/12 Tập</p>
                                        <div className="name-anime-item text-center">Date A Live</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            4000
                                        </div>
                                        <div className="time-run">Q2 2021</div>
                                    </div>
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/113334.jpg" alt="" />
                                        <p className="time-item">08/12 Tập</p>
                                        <div className="name-anime-item text-center">Date A Live</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            4000
                                        </div>
                                        <div className="time-run">Q2 2021</div>
                                    </div>
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/113334.jpg" alt="" />
                                        <p className="time-item">08/12 Tập</p>
                                        <div className="name-anime-item text-center">Date A Live</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            4000
                                        </div>
                                        <div className="time-run">Q2 2021</div>
                                    </div>
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/113334.jpg" alt="" />
                                        <p className="time-item">08/12 Tập</p>
                                        <div className="name-anime-item text-center">Date A Live</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            4000
                                        </div>
                                        <div className="time-run">Q2 2021</div>
                                    </div>
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/113334.jpg" alt="" />
                                        <p className="time-item">08/12 Tập</p>
                                        <div className="name-anime-item text-center">Date A Live</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            4000
                                        </div>
                                        <div className="time-run">Q2 2021</div>
                                    </div>
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/113334.jpg" alt="" />
                                        <p className="time-item">08/12 Tập</p>
                                        <div className="name-anime-item text-center">Date A Live</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            4000
                                        </div>
                                        <div className="time-run">Q2 2021</div>
                                    </div>
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
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/Dau-La-Dai-Luc-Phan-2.jpg" alt="" />
                                        <p className="time-item">160/? Tập</p>
                                        <div className="name-anime-item text-center">Đấu La Đại Lục</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            1,000,000
                                        </div>
                                        <div className="time-run">Q1 2018</div>
                                    </div>
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/Dau-La-Dai-Luc-Phan-2.jpg" alt="" />
                                        <p className="time-item">160/? Tập</p>
                                        <div className="name-anime-item text-center">Đấu La Đại Lục</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            1,000,000
                                        </div>
                                        <div className="time-run">Q1 2018</div>
                                    </div>
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/Dau-La-Dai-Luc-Phan-2.jpg" alt="" />
                                        <p className="time-item">160/? Tập</p>
                                        <div className="name-anime-item text-center">Đấu La Đại Lục</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            1,000,000
                                        </div>
                                        <div className="time-run">Q1 2018</div>
                                    </div>
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/Dau-La-Dai-Luc-Phan-2.jpg" alt="" />
                                        <p className="time-item">160/? Tập</p>
                                        <div className="name-anime-item text-center">Đấu La Đại Lục</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            1,000,000
                                        </div>
                                        <div className="time-run">Q1 2018</div>
                                    </div>
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/Dau-La-Dai-Luc-Phan-2.jpg" alt="" />
                                        <p className="time-item">160/? Tập</p>
                                        <div className="name-anime-item text-center">Đấu La Đại Lục</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            1,000,000
                                        </div>
                                        <div className="time-run">Q1 2018</div>
                                    </div>
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/Dau-La-Dai-Luc-Phan-2.jpg" alt="" />
                                        <p className="time-item">160/? Tập</p>
                                        <div className="name-anime-item text-center">Đấu La Đại Lục</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            1,000,000
                                        </div>
                                        <div className="time-run">Q1 2018</div>
                                    </div>
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/Dau-La-Dai-Luc-Phan-2.jpg" alt="" />
                                        <p className="time-item">160/? Tập</p>
                                        <div className="name-anime-item text-center">Đấu La Đại Lục</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            1,000,000
                                        </div>
                                        <div className="time-run">Q1 2018</div>
                                    </div>
                                    <div className="anime-list-item col-lg-3 col-9 col-sm-5 col-xs-3">
                                        <img className="img-item-carousel img-thumbnail" src="https://photos.animetvn.tv/upload/film/Dau-La-Dai-Luc-Phan-2.jpg" alt="" />
                                        <p className="time-item">160/? Tập</p>
                                        <div className="name-anime-item text-center">Đấu La Đại Lục</div>
                                        <div className="amount-view">
                                            <i className="far fa-eye" />
                                            1,000,000
                                        </div>
                                        <div className="time-run">Q1 2018</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-main-container" style={{ width: '30%', float: 'right' }}>
                        {/* Quảng Cáo  */}
                        <div className="Advisor" style={{ backgroundColor: '#00665d' }}>
                            <h3 className="text-center">
                                Quảng cáo
                            </h3>
                            <img className="img-fluid" src="https://cdn.cet.edu.vn/wp-content/uploads/2019/02/villa-khong-gian-sang-trong.jpg" alt="" />
                        </div>
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
                                        <a className="nav-link myTabItem" data-toggle="tab" href="#Year">Năm</a>
                                    </li>
                                </ul>
                                {/* Tab panes */}
                                <div className="tab-content">
                                    <div id="Date" className="container tab-pane active"><br />
                                        <div className="info-tab-pane">
                                            <ul className="rank-anime-list" style={{ backgroundColor: '#414141', margin: '-25px 0 0 -15px', width: '110%' }}>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/5rHPGDc-1.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/5rHPGDc-1.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/5rHPGDc-1.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/5rHPGDc-1.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/5rHPGDc-1.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/5rHPGDc-1.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/5rHPGDc-1.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/5rHPGDc-1.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/5rHPGDc-1.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/5rHPGDc-1.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="Week" className="container tab-pane fade"><br />
                                        <div className="info-tab-pane">
                                            <ul className="rank-anime-list" style={{ backgroundColor: '#414141', margin: '-25px 0 0 -15px', width: '110%' }}>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/112268.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/112268.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/112268.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/112268.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/112268.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/112268.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/112268.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/112268.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/112268.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/112268.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="Month" className="container tab-pane fade"><br />
                                        <div className="info-tab-pane">
                                            <ul className="rank-anime-list" style={{ backgroundColor: '#414141', margin: '-25px 0 0 -15px', width: '110%' }}>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/110185.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/110185.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/110185.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/110185.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/110185.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/110185.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/110185.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/110185.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/110185.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/110185.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="Season" className="container tab-pane fade"><br />
                                        <div className="info-tab-pane">
                                            <ul className="rank-anime-list" style={{ backgroundColor: '#414141', margin: '-25px 0 0 -15px', width: '110%' }}>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/e7c936b5eacd4fd0f89bd7b651954e6b1383245216_full.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/e7c936b5eacd4fd0f89bd7b651954e6b1383245216_full.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/e7c936b5eacd4fd0f89bd7b651954e6b1383245216_full.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/e7c936b5eacd4fd0f89bd7b651954e6b1383245216_full.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/e7c936b5eacd4fd0f89bd7b651954e6b1383245216_full.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/e7c936b5eacd4fd0f89bd7b651954e6b1383245216_full.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/e7c936b5eacd4fd0f89bd7b651954e6b1383245216_full.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/e7c936b5eacd4fd0f89bd7b651954e6b1383245216_full.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/e7c936b5eacd4fd0f89bd7b651954e6b1383245216_full.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/e7c936b5eacd4fd0f89bd7b651954e6b1383245216_full.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="Year" className="container tab-pane fade"><br />
                                        <div className="info-tab-pane">
                                            <ul className="rank-anime-list" style={{ backgroundColor: '#414141', margin: '-25px 0 0 -15px', width: '110%' }}>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/ac36818309ca8e2c144095f00bd314509d9601f7.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/ac36818309ca8e2c144095f00bd314509d9601f7.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/ac36818309ca8e2c144095f00bd314509d9601f7.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/ac36818309ca8e2c144095f00bd314509d9601f7.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/ac36818309ca8e2c144095f00bd314509d9601f7.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/ac36818309ca8e2c144095f00bd314509d9601f7.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/ac36818309ca8e2c144095f00bd314509d9601f7.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/ac36818309ca8e2c144095f00bd314509d9601f7.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/ac36818309ca8e2c144095f00bd314509d9601f7.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="rank-anime-item">
                                                    <div className="wrap-rank-item" style={{ position: 'relative' }}>
                                                        <a href>
                                                            <div style={{ float: 'left', paddingRight: '20px' }}>
                                                                <span className="rank-anime">1</span>
                                                            </div>
                                                            <img src="https://photos.animetvn.tv/upload/film/ac36818309ca8e2c144095f00bd314509d9601f7.jpg" alt="" className="img-thumbnail rank--anime-img" />
                                                        </a>
                                                        <div style={{ position: 'absolute', top: 0, left: '150px' }}>
                                                            <span className="rank-name-anime">Naruto</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '40px', left: '150px' }}>
                                                            <span className="rank-name-anime">500/500 Tập</span>
                                                        </div>
                                                        <div style={{ position: 'absolute', top: '80px', left: '150px' }}>
                                                            <span className="rank-name-anime">Lượt xem: 6,000</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentMainWeb;