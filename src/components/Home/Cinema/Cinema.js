import React from 'react'
import Branch from './Branch';
import MovieInfo from './MovieInfo';

export default function Cinema() {

    const listCinema = [
        {
            id: "BHDStar",
            image: './img/cinema_mall/bhd.png',
        },
        {
            id: "CineStar",
            image: './img/cinema_mall/cinestar.png',
        },
        {
            id: "DDC",
            image: './img/cinema_mall/ddc.png',
        },
        {
            id: "megastar",
            image: './img/cinema_mall/megastar.png',
        },
        {
            id: "dcine",
            image: './img/cinema_mall/dcine.jpg',
        },
        {
            id: "lotte",
            image: './img/cinema_mall/lotte.png',
        },
    ]

    const listBranch = [
        {
            image: './img/cinema_mall/bhd-star-bitexco-15379552241200.jpg',
            name: 'BHD Star - Bitexco',
            address: 'L3-Bitexco Icon 68, 2 Hải Triều, Q.1',
            id: 'bhd-star-cineplex-bitexco'
        },
        {
            image: './img/cinema_mall/bhd-star-vincom-thao-dien-15379553942188.jpg',
            name: 'BHD Star - Vincom Thảo Điền',
            address: 'L5-Megamall, 159 XL Hà Nội, Q.2',
            id: 'bhd-star-cineplex-vincom-thao-dien'
        },
        {
            image: './img/cinema_mall/bhd-star-vincom-thao-dien-15379553942188.jpg',
            name: 'BHD Star - Vincom Thảo Điền',
            address: 'L5-Megamall, 159 XL Hà Nội, Q.2',
            id: 'bhd-star-cineplex-vincom-thao-dien'
        }
    ];

    const listMovieInfo = [
        {
            image: './img/movie_icon/tiec-trang-mau-blood-moon-party-16016226514166_60x60.png',
            name: 'Tiệc Trăng Máu - Blood Moon Party',
            statistic: '100 phút - TIX 9.3 - IMDb 0'
        },
        {
            image: './img/movie_icon/song-than-o-haeundae-tidal-wave-p-16021459995811_60x60.png',
            name: 'Sóng Thần Ở Haeundae - Tidal Wave',
            statistic: '120 phút - TIX 7.7 - IMDb 0'
        },
        {
            image: './img/movie_icon/cuc-no-hoa-cuc-cung-pawn-p-16012814841278_60x60.png',
            name: 'Sóng Thần Ở Haeundae - Tidal Wave',
            statistic: '120 phút - TIX 7.7 - IMDb 0'
        },
    ];

    const generateListCinema = () => {
        return listCinema.map((cinema, index) => {
            return <li className="nav-item" key={index}>
                <a className={`nav-link ${(index === 0 ? 'active' : '')}`} data-toggle="tab">
                    <img src={cinema.image} />
                </a>
            </li>
        })
    }

    const generateListBranch = () => {
        return listBranch.map((branch, index) => {
            return <Branch branch={branch} key={index} />
        })
    }

    const generateListMovieInfo = () => {
        return listMovieInfo.map((info, index) => {
            return <MovieInfo info={info} key={index} />
        })
    }

    return (
        <section id="cinema">
            <div className="container">
                <div className="back-news" />
                <div className="cinema__content">
                    <div className="cinema__icon">
                        <ul className="cinema__icon-nav nav nav-tabs flex-column">
                            {generateListCinema()}
                        </ul>
                    </div>
                    <div className="cinema__stage">
                        <div className="cinema__stage-content">
                            <ul className="nav flex-column">
                                {generateListBranch()}
                            </ul>
                        </div>
                    </div>
                    <div className="d-none d-md-block cinema__movie">
                        {generateListMovieInfo()}
                    </div>
                </div>
            </div>
        </section>

    )
}
