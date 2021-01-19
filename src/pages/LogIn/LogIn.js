import React from 'react'

export default function LogIn() {
    return (
        <div id="login">
            <div className="login-wrapper text-center">
                <div className="btn-close">
                    <a href="/" className="btn-login-close">
                        <i className="fas fa-times"></i>
                    </a>
                </div>
                <a href="/">
                    <img src="./img/common/login-title.png" className="login-title" />
                </a>
                <form>
                    <div className="form-group text-left">
                        <label>Tên đăng nhập:</label>
                        <input type="text" className="form-control" placeholder="Nhập tên đăng nhập" />
                    </div>
                    <div className="form-group text-left">
                        <label>Mật khẩu:</label>
                        <input type="password" className="form-control" placeholder="Nhập mật khẩu" />
                    </div>
                    <div className="form-group mt-4">
                        <button className="btn btn-primary btn-login">Đăng nhập</button>
                    </div>
                </form>
                <a href="/" className="forgot-password">Quên mật khẩu</a>
                <p>Hoặc</p>
                <div className="d-flex justify-content-center mb-4">
                    <button className="btn btn-login-facebook">
                        <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="btn btn-login-google mx-3">
                        <i className="fab fa-google-plus-g"></i>
                    </button>
                    <button className="btn btn-login-twitter">
                        <i className="fab fa-twitter"></i>
                    </button>
                </div>
                <span>
                    Chưa có tài khoản ? <a href="/register" className="register-now">Đăng ký ngay.</a>
                </span>
            </div>
        </div>
    )
}
