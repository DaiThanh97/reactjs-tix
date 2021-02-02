import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { formatDate } from './../../../utils/date';
import './ChoseTicket.scss'

export default function ChoseTicket(props) {

    const [film, setFilm] = useState('Phim');
    const [stage, setStage] = useState('Rạp');
    const [date, setDate] = useState('Ngày xem');
    const [time, setTime] = useState('Suất chiếu');
    const { listMovie } = useSelector(state => state.movieReducer);
    const { listDetailMoviesByCinema } = useSelector(state => state.cinemaReducer);
    const cinema = useRef('');

    const handleClickFilm = (name) => {
        setFilm(name);
    }

    const handleClickStage = (stage) => {
        setStage(stage);
    }

    const handleDate = (date) => {
        setDate(date);
    }

    const generateFilm = () => {
        return listMovie.map((movie, index) => {
            return <div key={index} className="dropdown-item" onClick={() => handleClickFilm(movie.tenPhim)}>{movie.tenPhim}</div>
        });
    }

    const generateStage = () => {
        if (film === 'Phim')
            return <a className="dropdown-item" href="/">Vui lòng chọn phim</a>;

        const stageTemp = [];
        listDetailMoviesByCinema.forEach(item => {
            item.lstCumRap.forEach(sta => {
                if (sta.danhSachPhim.find(fi => fi.tenPhim === film)) {
                    stageTemp.push(sta.tenCumRap);
                    cinema.current = item.maHeThongRap;
                }
            });
        });

        return stageTemp.map((stage, index) => {
            return <div key={index} className="dropdown-item" onClick={() => handleClickStage(stage)}>{stage}</div>
        });
    }

    const generateDate = () => {
        if (stage === 'Rạp')
            return <a className="dropdown-item" href="/">Vui lòng chọn phim và rạp</a>;

        let dateTemp = [];
        const cine = listDetailMoviesByCinema.find(item => item.maHeThongRap === cinema.current);
        // console.log(cine, stage);
        console.log(cinema.current);
        const sta = cine.lstCumRap.find(sta => sta.tenCumRap === stage);
        const fil = sta.danhSachPhim.find(fi => fi.tenPhim === film);
        dateTemp = fil.lstLichChieuTheoPhim.map(dt => {
            return formatDate(dt.ngayChieuGioChieu);
        });

        return dateTemp.map((dt, index) => {
            return <div key={index} className="dropdown-item" onClick={() => handleDate(dt)}>{dt}</div>
        });
    }

    return (
        <div id="chose-ticket" className="container">
            <div className="chose-ticket__content py-2">
                <div className="dropdown film">
                    <button className="dropdown-toggle" data-toggle="dropdown">
                        <span className="holder-film">{film}</span>
                        <i className="fas fa-chevron-down" />
                    </button>
                    <div className="dropdown-menu">
                        {generateFilm()}
                    </div>
                </div>
                <div className="dropdown cinema">
                    <button className="dropdown-toggle px-2" data-toggle="dropdown">
                        <span className="holder-stage">{stage}</span>
                        <i className="fas fa-chevron-down" />
                    </button>
                    <div className="dropdown-menu">
                        {generateStage()}
                    </div>
                </div>
                <div className="dropdown date">
                    <button className="dropdown-toggle px-2" data-toggle="dropdown">
                        <span className="holder-date">{date}</span>
                        <i className="fas fa-chevron-down" />
                    </button>
                    <div className="dropdown-menu">
                        {generateDate()}
                    </div>
                </div>
                <div className="dropdown turn">
                    <button className="dropdown-toggle px-2" data-toggle="dropdown">
                        <span className="holder-time">{time}</span>
                        <i className="fas fa-chevron-down" />
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="/a">Vui lòng chọn phim, rạp và ngày xem</a>
                    </div>
                </div>
                <div className="mx-2">
                    <button className="btn-buy-now">MUA VÉ NGAY</button>
                </div>
            </div>
        </div>
    )
}
