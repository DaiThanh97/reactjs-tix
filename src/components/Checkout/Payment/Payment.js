import React from 'react'
import './Payment.scss'

export default function Payment() {
    return (
        <aside className="payment-scope">
            <div className="amount">
                <h2>0 đ</h2>
            </div>
            <div className="info py-4">
                <h2>
                    <span className="movie__tag-red">C18</span>
                    The Devil Killer
                </h2>
                <p>BHD Star - Bitexco</p>
                <p>Hôm nay 26/01/2021 - 20:45 - RẠP 5</p>
            </div>
            <div className="seat-statis py-3">
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
        </aside>
    )
}
