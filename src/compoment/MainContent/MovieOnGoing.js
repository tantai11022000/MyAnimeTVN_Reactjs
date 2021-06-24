import React, { Component } from 'react';

class MovieOnGoing extends Component {
    render() {
        return (
            <div>
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

            </div>
        );
    }
}

export default MovieOnGoing;