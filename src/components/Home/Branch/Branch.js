import React from 'react'
import { formatShowTime, formatShowEndTime } from './../../../utils/date';
import './Branch.scss';

export default function Branch(props) {
    const { branch, handleBrand } = props;

    const customBranch = (name) => {
        const arr = name.split('-');
        return <h5 className={`stage__brand ${arr[0]} mb-0`}>
            {arr[0].replace(/cineplex/i, '')}
            <span className="axx">- {arr[1]}</span>
        </h5>
    }

    const generateCollapseShowTime = (lstLichChieuTheoPhim) => {
        return lstLichChieuTheoPhim.map((item, index) => {
            return <button href="/" className="show-time__item" key={index}>
                <span className="time-from">{formatShowTime(item.ngayChieuGioChieu)}</span>
                <span className="time-to"> ~ {formatShowEndTime(item.ngayChieuGioChieu)}</span>
            </button>
        });
    }

    const generateCollapseMovies = (danhSachPhim) => {
        if (danhSachPhim.length === 0) {
            return <h6>Không có suất chiếu</h6>;
        }

        return danhSachPhim.map((item, index) => {
            return <div id={`${branch.maCumRap}`} className="collapse d-initial d-md-none" key={index}>
                <button className="movie__info" data-toggle="collapse" data-target={`#${branch.maCumRap + item.maPhim}`}>
                    <div className="info-wrapper">
                        <img src={item.hinhAnh} className="img-fluid mr-2" />
                        <div className="content text-left">
                            <h6 className="mb-0">{item.tenPhim}</h6>
                            <span>120 phút</span>
                        </div>
                    </div>
                    <div className="arrow">
                        <i className="fas fa-chevron-down" />
                    </div>
                </button>
                <div id={branch.maCumRap + item.maPhim} className="collapse" >
                    <div className="time-holer">
                        {generateCollapseShowTime(item.lstLichChieuTheoPhim)}
                    </div>
                </div>
            </div>
        });
    }

    return (
        <li id="accordion" className="nav-item" style={{ cursor: 'pointer' }} onClick={() => handleBrand(branch.maCumRap)}>
            <a
                className={`nav-link ${branch.active}`}
                onClick={() => handleBrand(branch.maCumRap)}
                data-toggle="collapse"
                href={`#${branch.maCumRap}`}
            >
                <div className="cinema__stage-item">
                    <img src="/img/cinema_mall/bhd-star-vincom-thao-dien-15379553942188.jpg" className="img-fluid mr-2" />
                    <div className="stage__info">
                        {customBranch(branch.tenCumRap)}
                        <p className="stage__location mb-0 d-block d-md-none d-lg-block">{branch.diaChi}</p>
                        <span className="detail">[chi tiết]</span>
                    </div>
                </div>
            </a>
            {generateCollapseMovies(branch.danhSachPhim)}
        </li>
    )
}
