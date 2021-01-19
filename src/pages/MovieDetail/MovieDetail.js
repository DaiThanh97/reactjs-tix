import React from 'react'

export default function MovieDetail(props) {
    return (
        <div id="movie-detail">
            <div className="info">
                <img src="./img/carousel/tho-san-quai-vat.jpg" alt="" className="movie-bg" />
                <div className="overlay">
                    <div className="container detail">
                        <div className="row">
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
                            <div className="col-md-5 d-flex align-items-center justify-content-center">
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
                </div>
            </div>
            <div className="show-time">
                <ul className="nav show-time__nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="pill" href="#show-movie">Lịch Chiếu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#movie-info">Thông Tin</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#rating">Đánh Giá</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane container active" id="show-movie">
                        <div className="board-showtime">
                            <ul className="mb-0 pr-2">
                                <li className="active">
                                    <img src="./img/cinema_mall/bhd.png" style={{ width: 50 }} />
                                    <span>BHD Star Cineplex</span>
                                </li>
                                <li>
                                    <img src="./img/cinema_mall/bhd.png" style={{ width: 50 }} />
                                    <span>BHD Star Cineplex</span>
                                </li>
                                <li>
                                    <img src="./img/cinema_mall/bhd.png" style={{ width: 50 }} />
                                    <span>BHD Star Cineplex</span>
                                </li>
                                <li>
                                    <img src="./img/cinema_mall/bhd.png" style={{ width: 50 }} />
                                    <span>BHD Star Cineplex</span>
                                </li>
                                <li>
                                    <img src="./img/cinema_mall/bhd.png" style={{ width: 50 }} />
                                    <span>BHD Star Cineplex</span>
                                </li>
                                <li>
                                    <img src="./img/cinema_mall/bhd.png" style={{ width: 50 }} />
                                    <span>BHD Star Cineplex</span>
                                </li>
                            </ul>
                            <div className="showtime">
                                <div className="showtime__date">
                                    <button className="btn btn-date active">
                                        <p className="mb-0">Thứ 3</p>
                                        <span>19</span>
                                    </button>
                                    <button className="btn btn-date">
                                        <p className="mb-0">Thứ 3</p>
                                        <span>19</span>
                                    </button>
                                    <button className="btn btn-date">
                                        <p className="mb-0">Thứ 3</p>
                                        <span>19</span>
                                    </button>
                                    <button className="btn btn-date">
                                        <p className="mb-0">Thứ 3</p>
                                        <span>19</span>
                                    </button>
                                    <button className="btn btn-date">
                                        <p className="mb-0">Thứ 3</p>
                                        <span>19</span>
                                    </button>
                                    <button className="btn btn-date">
                                        <p className="mb-0">Thứ 3</p>
                                        <span>19</span>
                                    </button>
                                    <button className="btn btn-date">
                                        <p className="mb-0">Thứ 3</p>
                                        <span>19</span>
                                    </button>
                                    <button className="btn btn-date">
                                        <p className="mb-0">Thứ 3</p>
                                        <span>19</span>
                                    </button>
                                    <button className="btn btn-date">
                                        <p className="mb-0">Thứ 3</p>
                                        <span>19</span>
                                    </button>
                                    <button className="btn btn-date">
                                        <p className="mb-0">Thứ 3</p>
                                        <span>19</span>
                                    </button>
                                    <button className="btn btn-date">
                                        <p className="mb-0">Thứ 3</p>
                                        <span>19</span>
                                    </button>
                                    <button className="btn btn-date">
                                        <p className="mb-0">Thứ 3</p>
                                        <span>19</span>
                                    </button>
                                </div>
                                <div className="showtime__movie">
                                    <div className="movie__item">
                                        <div className="movie__item-top pb-3" data-toggle="collapse" data-target="#demo">
                                            <img src="./img/cinema_mall/bhd-star-bitexco-15379552241200.jpg" className="img-fluid mr-3" />
                                            <div className="movie__info">
                                                <span className="info__title">BHD Star - Bitexco</span>
                                                <p className="info_statistic mb-0 mt-1">L3-Bitexco Icon 68, 2 Hải Triều, Q.1[Bản đồ]</p>
                                            </div>
                                        </div>
                                        <div className="movie__item-bot" id="demo">
                                            <h1>2D Digital</h1>
                                            <div className="show-time__list mt-3">
                                                <a href="/" className="show-time__item">
                                                    <span className="time-from">21:25</span>
                                                    <span className="time-to"> ~ 23:09</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="movie-info">...</div>
                    <div className="tab-pane container fade" id="rating">...</div>
                </div>
            </div>
        </div>
    )
}
