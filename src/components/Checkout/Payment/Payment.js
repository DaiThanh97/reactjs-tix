import React from 'react'
import './Payment.scss'

export default function Payment() {
    return (
        <aside className="payment-scope d-none d-md-block">
            <div className="amount border-bot">
                <h2 className="mb-0">0 đ</h2>
            </div>
            <div className="info border-bot py-4">
                <h2>
                    <span className="movie__tag-red">C18</span>
                    The Devil Killer
                </h2>
                <p>BHD Star - Bitexco</p>
                <p>Hôm nay 26/01/2021 - 20:45 - RẠP 5</p>
            </div>
            <div className="seat-statis border-bot py-2 py-xl-3">
                <div className="row">
                    <div className="col-7">
                        <span className="seats">
                            Ghế
                    </span>
                    </div>
                    <div className="col-5 text-right">
                        <span className="seat-total">
                            0 đ
                        </span>
                    </div>
                </div>
            </div>
            <div className="email border-bot py-2 py-xl-3">
                <p className="email-placeholder">E-Mail</p>
                <p>devthanh97@gmail.com</p>
            </div>
            <div className="phone border-bot py-2 py-xl-3">
                <p className="phone-placeholder">Phone</p>
                <p>0123456789</p>
            </div>
            <div className="discount border-bot py-2 py-xl-3">
                <div className="row align-items-center">
                    <div className="col-12 col-xl-7">
                        <p className="discount-placeholder mb-0">Mã giảm giá</p>
                        <input className="discount-fill form-control" type="text" placeholder="Nhập tại đây..." />
                    </div>
                    <div className="col-12 col-xl-5 text-xl-right">
                        <button className="btn-apply">Áp dụng</button>
                    </div>
                </div>
            </div>
            <div className="bill-method py-2 py-xl-3">
                <p>Hình thức thanh toán</p>
                <p className="noti">Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.</p>
            </div>
            <div className="paycheck">
                <p className="text-center px-1 px-xl-5">
                    <img src="/img/common/exclamation.png" className="mr-2" />
                    Vé đã mua không thể đổi hoặc hoàn tiền Mã vé sẽ được gửi qua tin nhắn <span className="paycheck__warn">ZMS</span> (tin nhắn Zalo) và <span className="paycheck__warn">Email</span> đã nhập.
                </p>
                <button className="btn-book">Đặt Vé</button>
            </div>
        </aside>
    )
}
