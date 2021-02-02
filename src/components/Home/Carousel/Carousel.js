import React, { useRef } from 'react'
import Slider from "react-slick";
import './Carousel.scss';

export default function Carousel(props) {

    const listSilde = [
        {
            image: './img/carousel/tho-san-quai-vat.jpg',
            trailer: 'https://www.youtube.com/embed/Vgb1uUmpQNU'
        },
        {
            image: './img/carousel/chi-13.png',
            trailer: 'https://www.youtube.com/embed/Vgb1uUmpQNU'
        },
        {
            image: './img/carousel/em-la-cua-em.jpg',
            trailer: 'https://www.youtube.com/embed/Vgb1uUmpQNU'
        }
    ]

    const settings = useRef({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    const generateSlide = () => {
        return listSilde.map((slide, index) => {
            return <div className="carousel__banner" key={index}>
                <img src={slide.image} className="carousel__img" alt="" />
                <a className="venobox" data-vbtype="video" href={slide.trailer}>
                    <img src="./img/common/play-video.png" className="btn-play" alt="" />
                </a>
                <div className="carousel__overlay"></div>
            </div>
        });
    }

    return (
        <section id="carousel">
            <Slider {...settings.current}>
                {generateSlide()}
            </Slider>
        </section>
    )
}
