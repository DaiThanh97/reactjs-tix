import Axios from 'axios';

class MovieService {
    getListMovie = () => {
        return Axios.get(`${process.env.REACT_APP_API_URL}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09`);
    }
}

export const movieService = new MovieService();

