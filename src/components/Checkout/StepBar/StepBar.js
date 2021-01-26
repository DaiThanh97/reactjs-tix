import React from 'react'
import './StepBar.scss'

export default function StepBar() {
    return (
        <div className="step-header">
            <ul className="mb-0">
                <li className="step-item active">
                    <span className="step">01</span>
                    <span className="step-name">CHỌN GHẾ & THANH TOÁN</span>
                </li>
                <li className="step-item">
                    <span className="step">02</span>
                    <span className="step-name">KẾT QUẢ ĐẶT VÉ</span>
                </li>
            </ul>
            <div className="user-info">
                <img src="" />
                <span className="user-info__name">Tio Nguyen</span>
            </div>
        </div>
    )
}
