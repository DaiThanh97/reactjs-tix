import React, { useRef } from 'react'
import Slider from "react-slick";
import MovieItem from './MovieItem';

export default function MovieList(props) {

    const listSilde = [
        {
            rate: 8.5,
            trailer: 'https://www.youtube.com/embed/Vgb1uUmpQNU',
            image: './img/movies/tho-san-quai-vat.png',
            name: 'Cục Nợ Hóa Cục Cưng - Pawn (P)',
            time: 113,
        },
        {
            rate: 8.5,
            trailer: 'https://www.youtube.com/embed/Vgb1uUmpQNU',
            image: './img/movies/tho-san-quai-vat.png',
            name: 'Cục Nợ Hóa Cục Cưng - Pawn (P)',
            time: 113,
        },
        {
            rate: 8.5,
            trailer: 'https://www.youtube.com/embed/Vgb1uUmpQNU',
            image: './img/movies/tho-san-quai-vat.png',
            name: 'Cục Nợ Hóa Cục Cưng - Pawn (P)',
            time: 113,
        },
        {
            rate: 8.5,
            trailer: 'https://www.youtube.com/embed/Vgb1uUmpQNU',
            image: './img/movies/tho-san-quai-vat.png',
            name: 'Cục Nợ Hóa Cục Cưng - Pawn (P)',
            time: 113,
        },
        {
            rate: 8.5,
            trailer: 'https://www.youtube.com/embed/Vgb1uUmpQNU',
            image: './img/movies/tho-san-quai-vat.png',
            name: 'Cục Nợ Hóa Cục Cưng - Pawn (P)',
            time: 113,
        },
        {
            rate: 8.5,
            trailer: 'https://www.youtube.com/embed/Vgb1uUmpQNU',
            image: './img/movies/tho-san-quai-vat.png',
            name: 'Cục Nợ Hóa Cục Cưng - Pawn (P)',
            time: 113,
        },
        {
            rate: 8.5,
            trailer: 'https://www.youtube.com/embed/Vgb1uUmpQNU',
            image: './img/movies/tho-san-quai-vat.png',
            name: 'Cục Nợ Hóa Cục Cưng - Pawn (P)',
            time: 113,
        },
        {
            rate: 8.5,
            trailer: 'https://www.youtube.com/embed/Vgb1uUmpQNU',
            image: './img/movies/tho-san-quai-vat.png',
            name: 'Cục Nợ Hóa Cục Cưng - Pawn (P)',
            time: 113,
        },
        {
            rate: 8.5,
            trailer: 'https://www.youtube.com/embed/Vgb1uUmpQNU',
            image: './img/movies/tho-san-quai-vat.png',
            name: 'Cục Nợ Hóa Cục Cưng - Pawn (P)',
            time: 113,
        },
    ]

    const settings = useRef({
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 4
    });

    const generateMovie = () => {
        return listSilde.map((movie, index) => {
            return <div>
                <MovieItem movie={movie} />
            </div>
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
