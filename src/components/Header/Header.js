import React, { useRef, memo } from 'react';
import { Link } from 'react-scroll';
import './Header.scss';

function Header(props) {
    const menu = [
        {
            name: 'Lịch Chiếu',
            ref: 'movie',
            offset: -70
        },
        {
            name: 'Cụm Rạp',
            ref: 'cinema',
            offset: 0
        },
        {
            name: 'Tin Tức',
            ref: 'review',
            offset: 40
        },
        {
            name: 'Ứng Dụng',
            ref: 'app-platform',
            offset: 0
        }
    ];
    const refMenu = useRef(menu);

    const generateMenu = () => {
        return refMenu.current.map((menu, index) => {
            return <li className="nav-item" key={index}>
                <Link className="nav-link" to={menu.ref} smooth={true} duration={600} offset={menu.offset}>{menu.name}</Link>
            </li>
        })
    }

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light header__nav py-0">
                <a className="navbar-brand" href="/">
                    <img className="nav__logo" src="./img/common/web-logo.png" alt="/" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav nav__mid">
                        <li className="d-block d-md-none nav__user">
                            <a className="user__login border-0" href="/">
                                <img className="avatar mr-2" src="./img/common/avatar.png" alt="" />
                                <span>
                                    Đăng Nhập
                                </span>
                            </a>
                        </li>
                        {generateMenu()}
                    </ul>
                    <div className="d-none d-md-flex nav__user">
                        <a className="user__login pr-2 mr-2" href="/detail">
                            <img className="avatar mr-2" src="./img/common/avatar.png" alt="" />
                            <span>
                                Đăng Nhập
                            </span>
                        </a>
                        <a className="user__location mx-2" href="/">
                            {/* <span>
                                Hồ Chí Minh
                            </span> */}
                            <div className="dropdown">
                                <button type="button" className="dropdown-toggle state" data-toggle="dropdown">
                                    <i className="fas fa-map-marker-alt mr-1" />
                                    Hồ Chí Minh
                                </button>
                                <div className="dropdown-menu state-menu">
                                    {/* <a className="dropdown-item" href="#">Hà Nội</a>
                                    <a className="dropdown-item" href="#">Đà Nẵng</a>
                                    <a className="dropdown-item" href="#">Đồng Nai</a> */}
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default memo(Header);