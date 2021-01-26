import React from 'react'
import './Review.scss'

export default function Review() {
    return (
        <section id="review">
            <div className="container pt-5">
                <div className="back-news" />
                <ul className="review__nav nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#film">Điện Ảnh 24h</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#re-view">Review</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#discount">Khuyến Mãi</a>
                    </li>
                </ul>
                <div className="tab-content mt-1">
                    <div className="tab-pane active" id="film">
                        <div className="row">
                            <div className="col-12 col-md-6 mt-3 review-item">
                                <a href="/">
                                    <img src="./img/review_24h/tix-1k-ve-ngai-chi-gia-ve.png" className="img-fluid" />
                                </a>
                                <a href="/" className="title-article">
                                    <h4>TIX 1K/VÉ NGẠI CHI GIÁ VÉ</h4>
                                </a>
                                <p>Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán
              ZaloPay thả ga</p>
                                <div className="review-item__like">
                                    <span className="mr-4">
                                        <i className="far fa-thumbs-up" />
                0
              </span>
                                    <span>
                                        <i className="far fa-comment-alt" />
                0
              </span>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 mt-3 review-item">
                                <a href="/">
                                    <img src="./img/review_24h/dong-gia-1k-ve-khi-mua-ve-qua-tix.png" className="img-fluid" />
                                </a>
                                <a href="/" className="title-article">
                                    <h4>ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX</h4>
                                </a>
                                <p>
                                    ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc chỉ với 1k cả tuần +
                                    nhận thêm 02 voucher khi đặt vé qua TIX.
            </p>
                                <div className="review-item__like">
                                    <span className="mr-4">
                                        <i className="far fa-thumbs-up" />
                4
              </span>
                                    <span>
                                        <i className="far fa-comment-alt" />
                0
              </span>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mt-3 review-item">
                                <a href="/">
                                    <img src="./img/review_24h/bhd-star-ve-chi-59-000d-ca-tuan-.jpg" className="img-fluid" />
                                </a>
                                <a href="/" className="title-article">
                                    <h4>BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!</h4>
                                </a>
                                <p>
                                    Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX
                                    và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay.
            </p>
                                <div className="review-item__like">
                                    <span className="mr-4">
                                        <i className="far fa-thumbs-up" />
                0
              </span>
                                    <span>
                                        <i className="far fa-comment-alt" />
                0
              </span>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mt-3 review-item">
                                <a href="/">
                                    <img src="./img/review_24h/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon.png" className="img-fluid" />
                                </a>
                                <a href="/" className="title-article">
                                    <h4>Beta Cineplex trở lại với hàng loạt ưu đãi lớn</h4>
                                </a>
                                <p>
                                    Từ thứ 7 tuần này (9/5), toàn bộ các rạp Beta Cinemas trên toàn quốc sẽ mở cửa trở lại.
                                    Mừng ngày trở lại, hàng loạt khuyến mại KHỦNG đổ bộ
            </p>
                                <div className="review-item__like">
                                    <span className="mr-4">
                                        <i className="far fa-thumbs-up" />
                0
              </span>
                                    <span>
                                        <i className="far fa-comment-alt" />
                0
              </span>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 mt-3 review-list">
                                <div className="review-list__item">
                                    <img src="./img/review_24h/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai.jpg" className="img-fluid banner-movie" />
                                    <a href="/" className="title-movie">
                                        <span>[123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé Anh Trai Yêu
                  Quái</span>
                                    </a>
                                </div>
                                <div className="review-list__item">
                                    <img src="./img/review_24h/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay.jpg" className="img-fluid banner-movie" />
                                    <a href="/" className="title-movie">
                                        <span>[123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp Sư Mù: Ai Chết Giơ
                  Tay</span>
                                    </a>
                                </div>
                                <div className="review-list__item">
                                    <img src="./img/review_24h/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu.jpg" className="img-fluid banner-movie" />
                                    <a href="/" className="title-movie">
                                        <span>[Mega GS] Một đoá hoa thay ngàn lời yêu</span>
                                    </a>
                                </div>
                                <div className="review-list__item">
                                    <img src="./img/review_24h/123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang.jpg" className="img-fluid banner-movie" />
                                    <a href="/" className="title-movie">
                                        <span>[123Phim] NHẬP MÃ 'BKT' - Giảm ngay 20k khi đặt vé Bắc Kim Thang</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex py-5">
                            <button className="btn-more">XEM THÊM</button>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="re-view">...</div>
                    <div className="tab-pane fade" id="discount">...</div>
                </div>
            </div>
        </section>

    )
}
