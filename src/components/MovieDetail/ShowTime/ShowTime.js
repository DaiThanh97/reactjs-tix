import React from 'react'
import './ShowTime.scss';

export default function ShowTime() {
    return (
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
    )
}
