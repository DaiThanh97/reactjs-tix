import React from 'react'
import './Booking.scss'

export default function Booking() {
    return (
        <main className="booking">
            <div className="container">
                <div className="booking-info">
                    <div className="cinema-info">
                        <img src="/img/cinema_mall/bhd.png" />
                        <div className="cinema-content ml-3">
                            <p className="mb-0">
                                <span className="cinema-brand">BHD Star</span>
                            - Bitexco
                        </p>
                            <span className="start-time">
                                Hôm nay - 20:45 - RẠP 5
                        </span>
                        </div>
                    </div>
                    <div className="countdown">
                        <span>thời gian giữ ghế</span>
                        <h3>00:00</h3>
                    </div>
                </div>
                <div className="mt-2 seat-section">
                    <div className="seat-map">
                        <div className="screen">
                            <img src="/img/common/screen.png" className="w-100" />
                        </div>
                        <div className="seat-list">
                            <div className="seat-row">
                                <div className="seat-char">
                                    A
                            </div>
                                <div className="seat">
                                    <span className="seat__number">123</span>
                                </div>
                                <div className="seat">
                                    <span className="seat__number">123</span>
                                </div>
                                <div className="seat-blank"></div>
                                <div className="seat">
                                    <span className="seat__number">123</span>
                                </div>
                                <div className="seat">
                                    <span className="seat__number">123</span>
                                </div>
                                <div className="seat">
                                    <span className="seat__number">123</span>
                                </div>
                                <div className="seat">
                                    <span className="seat__number">123</span>
                                </div>
                                <div className="seat">
                                    <span className="seat__number">123</span>
                                </div>
                                <div className="seat">
                                    <span className="seat__number">123</span>
                                </div>
                                <div className="seat">
                                    <span className="seat__number">123</span>
                                </div>
                                <div className="seat">
                                    <span className="seat__number">123</span>
                                </div>
                                <div className="seat">
                                    <span className="seat__number">123</span>
                                </div>
                                <div className="seat">
                                    <span className="seat__number">123</span>
                                </div>
                                <div className="seat">
                                    <span className="seat__number">123</span>
                                </div>
                                <div className="seat">
                                    <span className="seat__number">123</span>
                                </div>
                                <div className="seat-blank"></div>
                                <div className="seat">
                                    <span className="seat__number">123</span>
                                </div>
                                <div className="seat">
                                    <span className="seat__number">123</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="notation mt-5 text-center">
                    <div className="notation-item">
                        <div className="notation-seat vip"></div>
                        <p>Ghế VIP</p>
                    </div>
                    <div className="notation-item">
                        <div className="notation-seat normal"></div>
                        <p>Ghế thường</p>
                    </div>
                    <div className="notation-item">
                        <div className="notation-seat select"></div>
                        <p>Ghế đang chọn</p>
                    </div>
                    <div className="notation-item">
                        <div className="notation-seat block"></div>
                        <p>Ghế đã có người chọn</p>
                    </div>
                </div>
            </div>
            <div className="bottom-control d-md-none">
                <div className="w-50">
                    <span className="seat-string">
                        J12 ABV
                    </span>
                </div>
                <button className="w-50 btn-continue">TIẾP TỤC</button>
            </div>
        </main>
    )
}
