import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './ChoseTicket.scss'

export default function ChoseTicket(props) {

    const [film, setFilm] = useState('Phim');
    const [stage, setStage] = useState('Rạp');
    const [date, setDate] = useState('Ngày xem');
    const [time, setTime] = useState('Suất chiếu');
    const { listMovie } = useSelector(state => state.movieReducer)

    const handleClickFilm = (name) => {
        setFilm(name);
    }

    const generateFilm = () => {
        return listMovie.map((movie, index) => {
            return <a key={index} className="dropdown-item" onClick={() => handleClickFilm(movie.tenPhim)}>{movie.tenPhim}</a>
        });
    }

    return (
        <div id="chose-ticket" className="d-none d-lg-block container">
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
                    <button className="dropdown-toggle" data-toggle="dropdown">
                        <span className="holder-stage">Rạp</span>
                        <i className="fas fa-chevron-down" />
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Vui lòng chọn phim</a>
                    </div>
                </div>
                <div className="dropdown date">
                    <button className="dropdown-toggle" data-toggle="dropdown">
                        <span className="holder-date">Ngày xem</span>
                        <i className="fas fa-chevron-down" />
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Vui lòng chọn phim và rạp</a>
                    </div>
                </div>
                <div className="dropdown turn">
                    <button className="dropdown-toggle" data-toggle="dropdown">
                        <span className="holder-time">Suất chiếu</span>
                        <i className="fas fa-chevron-down" />
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Vui lòng chọn phim, rạp và ngày xem</a>
                    </div>
                </div>
                <div className="mx-2">
                    <button className="btn-buy-now">MUA VÉ NGAY</button>
                </div>
            </div>
        </div>
    )
}
