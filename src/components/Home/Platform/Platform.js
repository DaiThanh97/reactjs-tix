import React, { useRef, memo } from 'react'
import Slider from "react-slick";
import './Platform.scss';

function Platform() {

    const settings = useRef({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    });

    return (
        <section id="app-platform">
            <div className="container">
                <div className="app-platform__content">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 text-center text-md-left">
                            <div className="app-platform__detail">
                                <h1>
                                    Ứng dụng tiện lợi dành cho
            </h1>
                                <h1>
                                    người yêu điện ảnh
            </h1>
                                <p className="my-4">
                                    Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.
            </p>
                                <button className="btn-get-app mb-3">App miễn phí - Tải về ngay!</button>
                                <p>TIX có hai phiên bản <a href="/">iOS</a> &amp; <a href="/">Android</a></p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src="./img/platform/mobile.png" className="img-fluid app-platform__img" alt="" />
                            <div className="app-carousel">
                                <Slider {...settings.current} >
                                    <img src="./img/platform/slide2.jpg" className="img-fluid" alt="" />
                                    <img src="./img/platform/slide7.jpg" className="img-fluid" alt="" />
                                    <img src="./img/platform/slide9.jpg" className="img-fluid" alt="" />
                                    <img src="./img/platform/slide10.jpg" className="img-fluid" alt="" />
                                    <img src="./img/platform/slide14.jpg" className="img-fluid" alt="" />
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(Platform);