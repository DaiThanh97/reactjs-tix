import React from 'react'
import { useDispatch } from 'react-redux';
import { showTrailerAct } from '../../../redux/actions/movie.action';
import LazyLoad from 'react-lazyload';
import './MovieItem.scss';

export default function MovieItem(props) {
    const { movie } = props;
    const dispatch = useDispatch();

    const handleClickTrailer = () => {
        dispatch(showTrailerAct(movie.trailer));
    }

    return (
        <div style={{ display: 'flex' }}>
            <div id="movie__info">
                <LazyLoad once={true} height={318} placeholder={<img alt="" src="/img/common/default-film.webp" className="placeholderImg" />}>
                    <div className="movie__img" style={{ backgroundImage: `url(${movie.hinhAnh}), url('/img/common/default-film.webp')` }}></div>
                </LazyLoad>
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
                    <div className="icon__play" onClick={handleClickTrailer} data-toggle="modal" data-target="#trailer">
                        <img src="./img/common/play-video.png" alt="" />
                    </div>
                    <button className="btn-buy-ticket">MUA VÉ</button>
                </div>
                <span className="movie__tag-red d-lg-none d-block">C18</span>

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
