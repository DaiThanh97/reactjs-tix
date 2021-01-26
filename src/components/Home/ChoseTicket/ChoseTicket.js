import React from 'react'
import './ChoseTicket.scss'

export default function ChoseTicket(props) {
    return (
        <div id="chose-ticket" className="d-none d-lg-block container">
            <div className="chose-ticket__content py-2">
                <div className="dropdown film">
                    <button className="dropdown-toggle" data-toggle="dropdown">
                        <span>Phim</span>
                        <i className="fas fa-chevron-down" />
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Link 1</a>
                        <a className="dropdown-item" href="#">Link 2</a>
                        <a className="dropdown-item" href="#">Link 3</a>
                    </div>
                </div>
                <div className="dropdown cinema">
                    <button className="dropdown-toggle" data-toggle="dropdown">
                        <span>Rạp</span>
                        <i className="fas fa-chevron-down" />
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Link 1</a>
                        <a className="dropdown-item" href="#">Link 2</a>
                        <a className="dropdown-item" href="#">Link 3</a>
                    </div>
                </div>
                <div className="dropdown date">
                    <button className="dropdown-toggle" data-toggle="dropdown">
                        <span>Ngày xem</span>
                        <i className="fas fa-chevron-down" />
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Link 1</a>
                        <a className="dropdown-item" href="#">Link 2</a>
                        <a className="dropdown-item" href="#">Link 3</a>
                    </div>
                </div>
                <div className="dropdown turn">
                    <button className="dropdown-toggle" data-toggle="dropdown">
                        <span>Suất chiếu</span>
                        <i className="fas fa-chevron-down" />
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Link 1</a>
                        <a className="dropdown-item" href="#">Link 2</a>
                        <a className="dropdown-item" href="#">Link 3</a>
                    </div>
                </div>
                <div className="mx-2">
                    <button className="btn-buy-now">MUA VÉ NGAY</button>
                </div>
            </div>
        </div>
    )
}
