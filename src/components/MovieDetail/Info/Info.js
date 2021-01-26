import React from 'react'
import './Info.scss'

export default function Info() {
    return (
        <div className="movie-info">
            <div className="row">
                <div className="col-md-6">
                    <table class="table table-borderless text-white">
                        <tbody>
                            <tr>
                                <td className="left">Ngày công chiếu</td>
                                <td>30.12.2020</td>
                            </tr>
                            <tr>
                                <td className="left">Đạo diễn</td>
                                <td>Paul W.S. Anderson</td>
                            </tr>
                            <tr>
                                <td className="left">Diễn viên</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="left">Thể Loại</td>
                                <td>Hành Động, Khoa Học Viễn Tưởng</td>
                            </tr>
                            <tr>
                                <td className="left">Định dạng</td>
                                <td>2D/Digital</td>
                            </tr>
                            <tr>
                                <td className="left">Quốc Gia SX</td>
                                <td>Mỹ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <h6 className="mt-3">Nội dung</h6>
                    <p className="description mt-3">
                        Monster Hunter được chuyển thể từ series game nổi tiếng cùng tên của Capcom. Trong phim, đội trưởng Artemis của nữ diễn viên Milla Jovovich (Resident Evil) và đồng đội đã vô tình bước qua một cánh cửa bí ẩn dẫn tới thế giới khác. Tại đây, họ phải chiến đấu với nhiều loài quái vật khổng lồ trong hành trình trở về thế giới. Đồng hành với họ trong trận chiến là nhân vật “Thợ săn” của nam diễn viên Tony Jaa (Ong Bak). Monster Hunter hứa hẹn sẽ là bom tấn hành động với những màn săn quái vật khổng lồ hoành tráng nhất năm 2020.
                                    </p>
                </div>
            </div>
        </div>
    )
}
