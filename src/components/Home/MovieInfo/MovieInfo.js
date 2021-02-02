import React from 'react'
import { formatShowTime, formatShowEndTime } from './../../../utils/date';
import LazyLoad from 'react-lazyload';
import './MovieInfo.scss';

export default function MovieInfo(props) {
    const { info } = props;

    const generateShowTime = (lstLichChieuTheoPhim) => {
        return lstLichChieuTheoPhim.map((item, index) => {
            return <button className="show-time__item" key={index}>
                <span className="time-from">{formatShowTime(item.ngayChieuGioChieu)}</span>
                <span className="time-to"> ~ {formatShowEndTime(item.ngayChieuGioChieu)}</span>
            </button>
        })
    }

    return (
        <LazyLoad once={true} offset={500}>
            <div className="movie__item">
                <div className="movie__item-top">
                    <img src={info.hinhAnh} className="img-fluid mr-3" alt="" />
                    <div className="movie__info">
                        <span className="movie__tag-red-sm">C18</span>
                        <span className="info__title">{info.tenPhim}</span>
                        <p className="info_statistic mb-0 mt-1">120 phút - TIX 7.7 - IMDb 0</p>
                    </div>
                </div>
                <div className="movie__item-bot mt-3">
                    <h1>2D Digital</h1>
                    <div className="show-time__list mt-3">
                        {generateShowTime(info.lstLichChieuTheoPhim)}
                    </div>
                </div>
            </div >
        </LazyLoad>
    )
}
