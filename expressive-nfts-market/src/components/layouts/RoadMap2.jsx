import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';

const RoadMap2 = (props) => {

    const data = props.data;

    return (
        <section className="tf-section road-map" id='roadmap'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block-text center">
                            <h1 className="heading-bg" data-aos="fade-in" data-aos-duration="1000"><span>Road Map</span></h1>
                            <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Road Map</h5>
                            <h3 className="title mb-28" data-aos="fade-up" data-aos-duration="1000">The Journey of NFT <br /> Portfolio </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="road-map__content style-2">
                            <Swiper
                                modules={[Navigation , Scrollbar, A11y]}
                                spaceBetween={30}
                                navigation
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    767: {
                                    slidesPerView: 2,
                                    },
                                    991: {
                                    slidesPerView: 4,
                                    },
                                }}
                                scrollbar={{ draggable: true }}                
                            >
                            {
                                data.map((data,index) => (
                                    <SwiperSlide key={index}>
                                        <div className={`swiper-box ${data.class}`}>
                                            <div className="box-time" data-aos="fade-in">
                                                <span data-aos="zoom-in" data-aos-offset="300"><i className="fa fa-check"></i></span> 
                                                <h5 className="title mb-20">{data.title}</h5>
                                                <p className="fs-18">{data.text}</p>
                                            </div>
                                            <p className="fs-16 color-main mb-0">{data.time}</p>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                            </Swiper>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RoadMap2;