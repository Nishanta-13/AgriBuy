import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick} >
        <i className="fas fa-chevron-left"></i> {/* Custom left arrow */}
      </div>
    );
  };
  
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="fas fa-chevron-right"></i> {/* Custom right arrow */}
      </div>
    );
  };
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  
  return (
    <Slider {...settings} className="overflow-x-hidden overflow-y-hidden w-[100vw]  ">
      <div className="flex justify-center items-center w-[100vw] h-[50vh]  ">
        <img src="https://wallpapercave.com/wp/wp3515758.jpg" alt="" className="w-[80%] h-[100%] rounded-md mx-auto" />
      </div>
      <div  className="flex justify-center w-[100vw] h-[50vh]  items-center">
        <img src="https://as2.ftcdn.net/v2/jpg/02/50/10/17/1000_F_250101768_Qhn6oFRCgQArmI5Ov5EY3EOtYTTHpOg5.jpg" alt="" className="w-[80%] h-[100%] rounded-md mx-auto"/>
      </div>
      <div  className="flex justify-center w-[100vw] h-[50vh]   items-center ">
        <img src="https://www.e-resident.gov.ee/wp-content/uploads/2023/04/increase-your-income-water-your-plants-1024x683.jpg" alt="" className="w-[80%] h-[100%]  rounded-md mx-auto" />
      </div>
      <div  className="flex justify-center w-[100vw] h-[50vh]  items-center">
        <img src="https://as2.ftcdn.net/v2/jpg/02/50/10/17/1000_F_250101768_Qhn6oFRCgQArmI5Ov5EY3EOtYTTHpOg5.jpg" alt="" className="w-[80%] h-[100%] rounded-md mx-auto"/>
      </div>
      <div  className="flex justify-center w-[100vw] h-[50vh]   items-center ">
        <img src="https://www.e-resident.gov.ee/wp-content/uploads/2023/04/increase-your-income-water-your-plants-1024x683.jpg" alt="" className="w-[80%] h-[100%]  rounded-md mx-auto" />
      </div>
    </Slider>
  );
}