import React, { Component } from 'react';
import '../Footer/footer.css'
class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>GIỚI THIỆU</h3>
                            <p>Đây là sản phẩm được clone từ ANIMETVN.COM</p>
                            <p>Xem tốt nhất với trình duyệt Mozilla Firefox &amp; Google Chrome.</p>
                        </div>
                        <div className="col-md-6">
                            <h3>LIÊN KẾT</h3>
                            <p>Email liên hệ: loveanime11022000@gmail.com</p>
                        </div>
                    </div>
                    <div className="text-center">Copyright BY TÀI © 2021 . ANIMETVN.COM All Rights Reserved.</div>
                </div>
            </div>
        );
    }
}

export default Footer;