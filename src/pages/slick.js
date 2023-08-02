import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../styles/slick.module.scss";

const Carola = "https://toyota.jp/pages/contents/carlineup/image/car/corollasport/30.png";
const Yaris = "https://toyota.jp/pages/contents/carlineup/image/car/gryaris/30.png";
const CHR = "https://toyota.jp/pages/contents/carlineup/image/car/c-hr/30.png";
const Hylux = "https://toyota.jp/pages/contents/carlineup/image/car/hilux/30.png";
const RAV4 = "https://toyota.jp/pages/contents/carlineup/image/car/rav4/30.png";
const GR86 = "https://toyota.jp/pages/contents/carlineup/image/car/gr86/30.png";

// console.log(Img1);

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <div className={style.box}>
            <div>
                <p className={style.toyota}>TOYOTA Motor Company</p>
            </div>


            <Slider {...settings}>
                <div>
                    <h1>Carola</h1>
                    <img src={Carola} alt='photo' loading='lazy' />
                </div>
                <div>
                    <h3>Yaris</h3>
                    <img src={Yaris} alt='photo' loading='lazy' />
                </div>
                <div>
                    <h3>CHR</h3>
                    <img src={CHR} alt='photo' loading='lazy' />
                </div>
                <div>
                    <h3>RAV4</h3>
                    <img src={RAV4} alt='photo' loading='lazy' />
                </div>
                <div>
                    <h3>Hylux</h3>
                    <img src={Hylux} alt='photo' loading='lazy' />
                </div>
                <div>
                    <h3>GR86</h3>
                    <img src={GR86} alt='photo' loading='lazy' />
                </div>
            </Slider>
        </div>
    );
}
