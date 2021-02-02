import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import { GET_LIST_MOVIE_SAGA } from '../../../redux/constants/movie.constant';
import MovieItem from '../MovieItem/MovieItem';
import LazyLoad from 'react-lazyload';
import './MovieList.scss';

export default function MovieList(props) {
    const { listMovie } = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();

    // Didmount
    useEffect(() => {
        // Dispatch to Saga
        dispatch({ type: GET_LIST_MOVIE_SAGA });
    }, [dispatch]);

    const settings = useRef({
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 4,
        responsive: [
            {
                breakpoint: 1200, // <= 1200 thì apply settings
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesPerRow: 3,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesPerRow: 2,
                    arrows: false
                }
            }
        ]
    });

    const generateMovie = () => {
        return listMovie.map((movie, index) => {
            return <LazyLoad key={index} height={400} offset={600}>
                <MovieItem movie={movie} />
            </LazyLoad>
        });
    }

    return (
        <section id="movie">
            <div className="container movie__content">
                <ul className="movie__nav nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#now-showing">Đang Chiếu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#coming-soon">Sắp Chiếu</a>
                    </li>
                </ul>
                <div className="tab-content my-2">
                    <div className="tab-pane fade show active" id="now-showing">
                        <Slider {...settings.current}>
                            {generateMovie()}
                        </Slider>
                    </div>
                    <div className="tab-pane fade" id="coming-soon">
                        <h3 className="text-center">Chưa có phim nào sắp ra mắt.</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
