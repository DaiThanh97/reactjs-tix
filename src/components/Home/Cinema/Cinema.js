import React from 'react'

export default function Cinema() {
    return (
        <section id="cinema">
            <div className="container">
                <div className="back-news" />
                <div className="cinema__content">
                    <div className="cinema__icon">
                        <ul className="cinema__icon-nav nav nav-tabs flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#bhd">
                                    <img src="./img/cinema_mall/bhd.png" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#cns">
                                    <img src="./img/cinema_mall/cinestar.png" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#ddc">
                                    <img src="./img/cinema_mall/ddc.png" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#mgs">
                                    <img src="./img/cinema_mall/megastar.png" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#dcine">
                                    <img src="./img/cinema_mall/dcine.jpg" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#lotte">
                                    <img src="./img/cinema_mall/lotte.png" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="cinema__stage">
                        <div className="cinema__stage-content tab-content">
                            <div className="tab-pane active" id="bhd">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#bhd-bitexco">
                                            <div className="cinema__stage-item">
                                                <img src="./img/cinema_mall/bhd-star-bitexco-15379552241200.jpg" className="img-fluid mr-2" />
                                                <div className="stage__info">
                                                    <h5 className="stage__brand-bhd mb-0">BHD Star <span className="axx">-
                          Bitexco</span></h5>
                                                    <p className="stage__location mb-0 d-none d-lg-block">L3-Bitexco Icon 68, 2
                        Hải Triều, Q.1</p>
                                                    <span className="detail">[chi tiết]</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#bhd-vincom">
                                            <div className="cinema__stage-item">
                                                <img src="./img/cinema_mall/bhd-star-vincom-thao-dien-15379553942188.jpg" className="img-fluid mr-2" />
                                                <div className="stage__info">
                                                    <h5 className="stage__brand-bhd mb-0">BHD Star <span className="axx">- Vincom
                                                    Thảo
                          Điền</span>
                                                    </h5>
                                                    <p className="stage__location mb-0 d-none d-lg-block">L5-Megamall, 159 XL Hà
                        Nội, Q.2</p>
                                                    <span className="detail">[chi tiết]</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="cns">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#cns-bitexco">
                                            <div className="cinema__stage-item">
                                                <img src="./img/cinema_mall/cinestar-hai-ba-trung-15383833704033.jpg" className="img-fluid mr-2" />
                                                <div className="stage__info">
                                                    <h5 className="stage__brand-cns mb-0 d-none d-lg-block">BHD Star <span className="axx">-
                          Bitexco</span></h5>
                                                    <p className="stage__location mb-0">135 Hai Bà Trưng, Bến Nghé, Q.1</p>
                                                    <span className="detail">[chi tiết]</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#cns-vincom">
                                            <div className="cinema__stage-item">
                                                <img src="./img/cinema_mall/cinestar-quoc-thanh-15379636956745.jpg" className="img-fluid mr-2" />
                                                <div className="stage__info">
                                                    <h5 className="stage__brand-cns mb-0 d-none d-lg-block">BHD Star <span className="axx">- Vincom
                                                    Thảo
                          Điền</span>
                                                    </h5>
                                                    <p className="stage__location mb-0">271 Nguyễn Trãi, Q.1</p>
                                                    <span className="detail">[chi tiết]</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="ddc">
                                <h5 className="text-center">Hiện tại rạp chưa có phim.</h5>
                            </div>
                            <div className="tab-pane fade" id="mgs">
                                <h5 className="text-center">Hiện tại rạp chưa có phim.</h5>
                            </div>
                            <div className="tab-pane fade" id="dcine">
                                <h5 className="text-center">Hiện tại rạp chưa có phim.</h5>
                            </div>
                            <div className="tab-pane fade" id="lotte">
                                <h5 className="text-center">Hiện tại rạp chưa có phim.</h5>
                            </div>
                        </div>
                    </div>
                    <h4 className="d-md-none text-center mt-5">Phim đang chiếu</h4>
                    <div className="cinema__movie">
                        {/* Tab panes */}
                        <div className="tab-content">
                            <div className="tab-pane active" id="bhd-bitexco">
                                <div className="movie__item">
                                    <div className="movie__item-top">
                                        <img src="./img/movie_icon/tiec-trang-mau-blood-moon-party-16016226514166_60x60.png" className="img-fluid mr-3" />
                                        <div className="movie__info">
                                            <span className="movie__tag-red-sm">C18</span>
                                            <span className="info__title">Tiệc Trăng Máu - Blood Moon Party</span>
                                            <p className="info_statistic mb-0 mt-1">100 phút - TIX 9.3 - IMDb 0</p>
                                        </div>
                                    </div>
                                    <div className="movie__item-bot mt-3">
                                        <h1>2D Digital</h1>
                                        <div className="show-time__list mt-3">
                                            <a href className="show-time__item">
                                                <span className="time-from">22:30</span>
                                                <span className="time-to">~ 00:10</span>
                                            </a>
                                            <a href className="show-time__item">
                                                <span className="time-from">23:05</span>
                                                <span className="time-to">~ 00:45</span>
                                            </a>
                                            <a href className="show-time__item">
                                                <span className="time-from">23:30</span>
                                                <span className="time-to">~ 01:10</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="movie__item">
                                    <div className="movie__item-top">
                                        <img src="./img/movie_icon/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png" className="img-fluid mr-3" />
                                        <div className="movie__info">
                                            <span className="movie__tag-green-sm">P</span>
                                            <span className="info__title">Sóng Thần Ở Haeundae - Tidal Wave</span>
                                            <p className="info_statistic mb-0 mt-1">120 phút - TIX 7.7 - IMDb 0</p>
                                        </div>
                                    </div>
                                    <div className="movie__item-bot mt-3">
                                        <h1>2D Digital</h1>
                                        <div className="show-time__list mt-3">
                                            <a href className="show-time__item">
                                                <span className="time-from">22:30</span>
                                                <span className="time-to">~ 00:10</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="movie__item">
                                    <div className="movie__item-top">
                                        <img src="./img/movie_icon/cuc-no-hoa-cuc-cung-pawn-p-16012814841278_60x60.png" className="img-fluid mr-3" />
                                        <div className="movie__info">
                                            <span className="movie__tag-green-sm">P</span>
                                            <span className="info__title">Sóng Thần Ở Haeundae - Tidal Wave</span>
                                            <p className="info_statistic mb-0 mt-1">120 phút - TIX 7.7 - IMDb 0</p>
                                        </div>
                                    </div>
                                    <div className="movie__item-bot mt-3">
                                        <h1>2D Digital</h1>
                                        <div className="show-time__list mt-3">
                                            <a href className="show-time__item">
                                                <span className="time-from">22:30</span>
                                                <span className="time-to">~ 00:10</span>
                                            </a>
                                            <a href className="show-time__item">
                                                <span className="time-from">23:30</span>
                                                <span className="time-to">~ 00:10</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="bhd-vincom">
                                <h5 className="text-center">Không có suất chiếu</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
