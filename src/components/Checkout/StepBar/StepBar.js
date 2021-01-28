import React from 'react'
import './StepBar.scss'

export default function StepBar() {
    return (
        <div className="step-header">
            <ul className="mb-0">
                <li className="step-item active text-center">
                    <span className="step">01</span>
                    <span className="step-name">CHỌN GHẾ & THANH TOÁN</span>
                </li>
                <li className="step-item d-none d-md-block">
                    <span className="step">02</span>
                    <span className="step-name">KẾT QUẢ ĐẶT VÉ</span>
                </li>
            </ul>
            <div className="user-info d-none d-md-block">
                <img src="/img/common/avatar.png" className="avatar" />
                <span className="user-info__name ml-2">Tio Nguyen</span>
            </div>
        </div>
    )
}
