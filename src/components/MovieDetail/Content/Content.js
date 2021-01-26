import React from 'react'
import './Content.scss';

export default function MovieContent() {
    return (
        <div className="container detail">
            <div className="row d-none d-lg-flex">
                <div className="col-md-7">
                    <div className="trailer">
                        <div className="trailer__content">
                            <img src="./img/movies/tho-san-quai-vat.png" alt="" className="trailer__content-image" />
                            <a href="/" className="trailer__content-video">
                                <img src="./img/common/play-video.png" alt="" />
                            </a>
                        </div>
                        <div className="trailer__description">
                            <p className="description__date mb-0">30.12.2020</p>
                            <h3 className="my-0 trailer__description-title">
                                <span className="movie__tag-red">C18</span>
                                            Thợ Săn Quái Vật - Monster Hunter
                                        </h3>
                            <p className="trailer__description-time mt-1">104 phút - 0 IMDb - 2D/Digital</p>
                            <button className="btn-buy-ticket-detail mt-2">Mua vé</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 d-flex align-items-center justify-content-end">
                    <div className="rate">
                        <div className="rate-percent">
                            <div className="circle-border"></div>
                            <div className="point-group">
                                <div className="point-bar"></div>
                            </div>
                            <span className="point">7.8</span>
                        </div>
                        <div className="my-2">
                            <img src="./img/common/star1.png" alt="" />
                            <img src="./img/common/star1.png" alt="" />
                            <img src="./img/common/star1.png" alt="" />
                            <img src="./img/common/star1.png" alt="" />
                            <img src="./img/common/star1.2.png" alt="" className="w-25" />
                        </div>
                        <span className="txt-rate">64 người đánh giá</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
