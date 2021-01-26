import React, { memo } from 'react'
import './Footer.scss';

function Footer() {
    return (
        <footer>
            <div className="container pt-4 pb-3">
                <div className="row">
                    <div className="col-md-4 text-center text-md-left">
                        <p className="title-header">TIX</p>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <a href="/" className="w-100">FAQ</a>
                                <br />
                                <a href="/">Brand Guidelines</a>
                            </div>
                            <div className="col-12 col-md-6">
                                <a href="/">Thỏa thuận sử dụng</a>
                                <br />
                                <a href="/">Chính sách bảo mật</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 mt-md-0 text-center text-md-left">
                        <div className="partner-content">
                            <p className="title-header">ĐỐI TÁC</p>
                            <div className="partner-content__icon">
                                <a href="/"><img src="./img/coop/cgv.png" /></a>
                                <a href="/"><img src="./img/coop/bhd.png" /></a>
                                <a href="/"><img src="./img/coop/galaxycine.png" /></a>
                                <a href="/"><img src="./img/coop/cinestar.png" /></a>
                                <a href="/"><img src="./img/coop/lotte.png" /></a>
                                <a href="/"><img src="./img/coop/megags.png" /></a>
                                <a href="/"><img src="./img/coop/bt.jpg" /></a>
                                <a href="/"><img src="./img/coop/dcine.png" /></a>
                                <a href="/"><img src="./img/coop/TOUCH.png" /></a>
                                <a href="/"><img src="./img/coop/cnx.jpg" /></a>
                                <a href="/"><img src="./img/coop/STARLIGHT.png" /></a>
                                <a href="/"><img src="./img/coop/dcine.png" /></a>
                                <a href="/"><img src="./img/coop/zalopay_icon.png" /></a>
                                <a href="/"><img src="./img/coop/payoo.jpg" /></a>
                                <a href="/"><img src="./img/coop/VCB.png" /></a>
                                <a href="/"><img src="./img/coop/AGRIBANK.png" /></a>
                                <a href="/"><img src="./img/coop/VIETTINBANK.png" /></a>
                                <a href="/"><img src="./img/coop/IVB.png" /></a>
                                <a href="/"><img src="./img/coop/123go.png" /></a>
                                <a href="/"><img src="./img/coop/laban.png" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 text-center mt-5 mt-md-0">
                        <p className="title-header">MOBILE APP</p>
                        <a href="/"><img src="./img/common/apple-logo.png" className="icon-app" /></a>
                        <a href="/"><img src="./img/common/android-logo.png" className="icon-app" /></a>
                    </div>
                    <div className="col-md-2 text-center mt-5 mt-md-0">
                        <p className="title-header">SOCIAL</p>
                        <a href="/"><img src="./img/common/facebook-logo.png" className="icon-app" /></a>
                        <a href="/"><img src="./img/common/zalo-logo.png" className="icon-app" /></a>
                    </div>
                </div>
                <div className="line my-4" />
                <div className="row footer__bot text-center text-md-left">
                    <div className="col-md-2">
                        <img src="./img/common/zion-logo.jpg" className="logo-company" />
                    </div>
                    <div className="col-md-8 mt-4 mt-md-0">
                        <p className="title-header mb-1">TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
                        <p className="mb-1">Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.
        </p>
                        <p className="mb-1">Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
          <br />
          đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí
          Minh cấp.</p>
                        <p className="mb-1">
                            Số Điện Thoại (Hotline): 1900 545 436
          <br />
          Email: <a href="/" className="support">support@tix.vn</a>
                        </p>
                    </div>
                    <div className="col-md-2 mt-2 mt-md-0">
                        <img src="./img/common/bct.png" className="img-fluid logo-bct" />
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default memo(Footer);