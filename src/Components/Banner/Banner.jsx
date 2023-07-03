// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
import './Banner.css';





const Banner = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://i.ibb.co/0DXP5hG/andrew-wise-LE7-RC3l5-Ee-Y-unsplash.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className="md:mt-10 md:ml-8">
          <div className="title" data-swiper-parallax="-300">
            <h1 className="font-bold"> It's Going Fast.</h1>
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <h4>Super-first Internet + No Contracts</h4>
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <h4 className="uppercase">Internet 100 for</h4>
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <h4 className="uppercase font-bold">$39.99 <span className="lowercase">/mo</span></h4>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>For a limited time, double the speed for just $5 More.</p>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <button className="btn btn-info sm:btn-sm md:btn-md lg:btn-md mt-4">get offer now <FaArrowRight className="ml-2" /></button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="md:mt-10 md:ml-8">
          <div className="subtitle" data-swiper-parallax="-200">
            <h4>Switch to internet Service you will love</h4>
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <h4 className="uppercase">Internet 100 for</h4>
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            <h4 className="uppercase font-bold">$39.99 <span className="lowercase">/mo</span></h4>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>For a limited time, double the speed for just $5 More.</p>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <button className="btn btn-info sm:btn-sm md:btn-md lg:btn-md mt-4">get offer now <FaArrowRight className="ml-2" /></button>
          </div>
          {/* <div className="subtitle" data-swiper-parallax="-200">
            <h1 className="text-2xl font-bold mb-6">Switch to internet Service you will love</h1>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              This is the place to learn about Nahid.net internet the high speed, and reliable internet collocation that lets you do what online.
            </p>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <button className="btn btn-info sm:btn-sm md:btn-md lg:btn-md mt-4">get offer now <FaArrowRight className="ml-2" /></button>
            <button className="btn btn-info sm:btn-sm md:btn-md lg:btn-md mt-4">get <FaArrowRight className="ml-2" /></button>
          </div> */}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;