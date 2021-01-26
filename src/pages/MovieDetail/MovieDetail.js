import React from 'react'
import MovieContent from '../../components/MovieDetail/Content/Content'
import Info from '../../components/MovieDetail/Info/Info';
import ShowTime from '../../components/MovieDetail/ShowTime/ShowTime'
import './MovieDetail.scss';

export default function MovieDetail(props) {
    return (
        <div id="movie-detail">
            <div className="info">
                <img src="./img/carousel/tho-san-quai-vat.jpg" alt="" className="movie-bg" />
                <a href="/" className="info-video d-block d-lg-none">
                    <img src="./img/common/play-video.png" alt="" />
                </a>
                <div className="overlay">
                    <MovieContent />
                </div>
            </div>
            <div className="show-time container">
                <div className="d-block d-lg-none mb-5 show-time__description">
                    <p className="description__date mb-0">30.12.2020</p>
                    <h3 className="my-2 show-time__description-title">
                        <span className="movie__tag-red">C18</span>
                            Thợ Săn Quái Vật - Monster Hunter
                        </h3>
                    <p className="show-time__description-time mt-1">104 phút - 0 IMDb - 2D/Digital</p>
                </div>
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
                    <div className="tab-pane active" id="show-movie">
                        <ShowTime />
                    </div>
                    <div className="tab-pane fade" id="movie-info">
                        <Info />
                    </div>
                    <div className="tab-pane container fade" id="rating">...</div>
                </div>
            </div>
        </div>
    )
}
