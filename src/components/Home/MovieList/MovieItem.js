import React from 'react'

export default function MovieItem(props) {

    const { movie } = props;

    return (
        <div className="movie__info">
            <div className="movie__img" style={{
                backgroundImage: `url(${movie.image})`
            }}>
                <div className="movie__rating text-center">
                    <span>{movie.rate}</span>
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
                    {movie.name}
                </h2>
                <span className="movie__time">{movie.time} phút</span>
            </div>
        </div>
    )
}
