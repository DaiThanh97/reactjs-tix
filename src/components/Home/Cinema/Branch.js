import React from 'react'
import MovieInfo from './MovieInfo';

export default function Branch(props) {
    const { branch } = props;

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

    const generateListMovieInfo = () => {
        return listMovieInfo.map((info, index) => {
            return <MovieInfo info={info} key={index} />
        })
    }

    return (
        <li id="accordion" className="nav-item">
            <a className="nav-link active" data-toggle="collapse" href="#collapseOne">
                <div className="cinema__stage-item">
                    <img src="" className="img-fluid mr-2" />
                    <div className="stage__info">
                        <h5 className="stage__brand-bhd mb-0">BHD Star <span className="axx">- Bitexco</span></h5>
                        <p className="stage__location mb-0 d-none d-lg-block">{branch.name}</p>
                        <span className="detail">[chi tiết]</span>
                    </div>
                </div>
            </a>
            <div id="collapseOne" className="collapse" data-parent="#accordion">
                <div className="card-body cinema__movie">
                    {generateListMovieInfo()}
                </div>
            </div>
        </li>
    )
}
