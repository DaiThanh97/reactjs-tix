import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_DETAIL_MOVIES_BY_CINEMA_SAGA } from '../../../redux/constants/cinema.constant';
import Branch from '../Branch/Branch';
import MovieInfo from '../MovieInfo/MovieInfo';
import './Cinema.scss';

export default function Cinema() {

    const [cinema, setCinema] = useState('BHDStar');
    const [branch, setBranch] = useState('bhd-star-cineplex-pham-hung');
    const { listDetailMoviesByCinema } = useSelector(state => state.cinemaReducer);
    const dispatch = useDispatch();
    const movieInfo = useRef('');

    useEffect(() => {
        dispatch({ type: GET_DETAIL_MOVIES_BY_CINEMA_SAGA });
    }, []);

    useEffect(() => {
        movieInfo.current.scrollTop = 0;
    }, [branch]);

    const handleCinema = (cinemaId) => {
        setCinema(cinemaId);
        defaultFirstBranch(cinemaId);
    }

    const handleBrand = (branchId) => {
        setBranch(branchId);
    }

    const defaultFirstBranch = (cinemaId) => {
        const cine = listDetailMoviesByCinema.find(item => item.maHeThongRap === cinemaId);
        setBranch(cine?.lstCumRap[0]?.maCumRap);
    }

    const generateListCinemaMemo = useMemo(() => {
        return listDetailMoviesByCinema.map((cinema, index) => {
            return <li className="nav-item" key={index}>
                <a className={`nav-link ${(index === 0 ? 'active' : '')}`}
                    data-toggle="tab"
                    onClick={() => handleCinema(cinema.maHeThongRap)}
                >
                    <img src={cinema.logo} />
                </a>
            </li>
        })
    }, [listDetailMoviesByCinema]);

    const generateListBranch = () => {
        if (listDetailMoviesByCinema.length === 0)
            return '';

        const itemCine = listDetailMoviesByCinema.find(item => item.maHeThongRap === cinema);
        if (itemCine) {
            const listBranch = itemCine.lstCumRap;
            const currentActive = listBranch.findIndex(item => item.maCumRap === branch);
            return listBranch.map((branch, index) => {
                branch.active = index === (currentActive !== -1 ? currentActive : 0) ? 'active' : '';
                return <Branch branch={branch} key={index} handleBrand={handleBrand} />
            })
        }
    }

    const generateListMovieInfo = () => {
        if (listDetailMoviesByCinema.length === 0)
            return '';

        const itemCine = listDetailMoviesByCinema.find(item => item.maHeThongRap === cinema);
        if (itemCine) {
            const itemBranch = itemCine.lstCumRap.find(item => item.maCumRap === branch);
            if (itemBranch) {
                return itemBranch.danhSachPhim.map((info, index) => {
                    return <MovieInfo info={info} key={index} />
                });
            }
        }
    }

    return (
        <section id="cinema">
            <div className="container">
                <div className="back-news" />
                <div className="cinema__content">
                    <div className="cinema__icon">
                        <ul className="cinema__icon-nav nav nav-tabs flex-column">
                            {generateListCinemaMemo}
                        </ul>
                    </div>
                    <div className="cinema__stage">
                        <div>
                            <ul className="nav flex-column">
                                {generateListBranch()}
                            </ul>
                        </div>
                    </div>
                    <div ref={movieInfo} className="d-none d-md-block cinema__movie">
                        {generateListMovieInfo()}
                    </div>
                </div>
            </div>
        </section>
    )
}
