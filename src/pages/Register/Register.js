import React from 'react'
import './Register.scss';

export default function Register() {
    return (
        <div id="register">
            <div className="register-wrapper text-center">
                <div className="btn-close">
                    <a href="/" className="btn-login-close">
                        <i className="fas fa-times"></i>
                    </a>
                </div>
                <a href="/">
                    <img src="./img/common/login-title.png" className="register-title" />
                </a>
                <form>
                    <div className="form-group text-left">
                        <label>Tên:</label>
                        <input type="text" className="form-control" placeholder="Nhập tên" />
                    </div>
                    <div className="form-group text-left">
                        <label>Số điện thoại:</label>
                        <input type="text" className="form-control" placeholder="Nhập số điện thoại" />
                    </div>
                    <div className="form-group text-left">
                        <label>Email:</label>
                        <input type="email" className="form-control" placeholder="Nhập email" />
                    </div>
                    <div className="form-group text-left">
                        <label>Tên đăng nhập:</label>
                        <input type="text" className="form-control" placeholder="Nhập tên đăng nhập" />
                    </div>
                    <div className="form-group text-left">
                        <label>Mật khẩu:</label>
                        <input type="password" className="form-control" placeholder="Nhập mật khẩu" />
                    </div>
                    <div className="form-group mt-4">
                        <button className="btn btn-primary btn-register">Đăng nhập</button>
                    </div>
                </form>
                <span>
                    Đã có tài khoản ? <a href="/login" className="login-now">Đăng nhập ngay.</a>
                </span>
            </div>
        </div>
    )
}
