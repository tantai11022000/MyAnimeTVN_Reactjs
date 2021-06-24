import React, { Component } from 'react';

class MySilder extends Component {
    render() {
        return (
            <div>
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

            </div>
        );
    }
}

export default MySilder;