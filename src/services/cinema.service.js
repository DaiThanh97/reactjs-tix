import Axios from "axios";

class CinemaService {
    getListCinema = () => {
        return Axios.get(`${process.env.REACT_APP_API_URL}/api/QuanLyRap/LayThongTinHeThongRap`);
    };

    getDetailMoviesByCinema = () => {
        return Axios.get(`${process.env.REACT_APP_API_URL}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP09`)
    }
}

export const cinemaService = new CinemaService();