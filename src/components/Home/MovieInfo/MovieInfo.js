import React from 'react'
import './MovieInfo.scss';

export default function MovieInfo(props) {
    const { info } = props;

    const listShowTime = [
        {
            from: '22:30',
            to: '00:10'
        },
        {
            from: '22:30',
            to: '00:10'
        },
        {
            from: '22:30',
            to: '00:10'
        },
    ];

    const generateShowTime = () => {
        return listShowTime.map((info, index) => {
            return <a href="/" className="show-time__item" key={index}>
                <span className="time-from">{info.from}</span>
                <span className="time-to"> ~ {info.to}</span>
            </a>
        })
    }

    return (
        <div className="movie__item">
            <div className="movie__item-top">
                <img src={info.image} className="img-fluid mr-3" />
                <div className="movie__info">
                    <span className="movie__tag-red-sm">C18</span>
                    <span className="info__title">{info.name}</span>
                    <p className="info_statistic mb-0 mt-1">{info.statistic}</p>
                </div>
            </div>
            <div className="movie__item-bot mt-3">
                <h1>2D Digital</h1>
                <div className="show-time__list mt-3">
                    {generateShowTime()}
                </div>
            </div>
        </div>
    )
}
