import React, { Fragment } from 'react'
import './MovieItem.scss';

export default function MovieItem(props) {

    const { movie } = props;

    return (
        <div style={{ display: 'flex' }}>
            <div id="movie__info">
                <div className="movie__img" style={{
                    backgroundImage: `url(${movie.hinhAnh})`
                }}>
                    <div className="movie__rating text-center">
                        <span>{movie.danhGia}</span>
                        <div className="rate__star">
                            <img src="./img/common/star1.png" alt="" />
                            <img src="./img/common/star1.png" alt="" />
                            <img src="./img/common/star1.png" alt="" />
                            <img src="./img/common/star1.png" alt="" />
                            <img src="./img/common/star1.2.png" alt="" />
                        </div>
                    </div>
                    <div className="info__overlay">
                        <a className="icon__play venobox" data-vbtype="video" href={movie.trailer}>
                            <img src="./img/common/play-video.png" />
                        </a>
                        <button className="btn-buy-ticket">MUA VÉ</button>
                    </div>
                    <span className="movie__tag-red d-lg-none d-block">C18</span>
                </div>
                <div className="movie__name">
                    <h2 className="mt-2">
                        <span className="movie__tag-red">C18</span>
                        {movie.tenPhim}
                    </h2>
                    <span className="movie__time">121 phút</span>
                </div>
            </div>
        </div>
    )
}
