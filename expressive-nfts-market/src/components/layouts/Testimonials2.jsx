import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y } from 'swiper';

import icon from '@assets/fake-data/icon';

const Testimonials2 = (props) => {

    const data = props.data;

    return (
        <section className="tf-section testimonial" id='testimonial'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block-text center">
                            <h1 className="heading-bg" data-aos="fade-in" data-aos-duration="1000"><span>Testimonial</span></h1>
                            <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Testimonial</h5>
                            <h3 className="title mb-28" data-aos="fade-up" data-aos-duration="1000">What People Say <br /> About us</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="testimonial__content style-2">
                        <Swiper
                            modules={[Pagination , Scrollbar, A11y]}
                            spaceBetween={30}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                767: {
                                slidesPerView: 2,
                                },
                                991: {
                                slidesPerView: 3,
                                },
                            }}
                            scrollbar={{ draggable: true }}                
                        >
                            {
                                data.map((data,index) => (
                                    <SwiperSlide key={index}>
                                        <div className="box-testimonial">
                                        <img className="quote" src={icon.leftquote2} alt="Monteno" />
                                        <p className="text">{data.text}</p>
                                        <div className="info">
                                            <img src={data.avt} alt="Monteno" />
                                            <div>
                                                <h6>{data.name}</h6>
                                                <p className="fs-16">{data.postion}</p>
                                            </div>
                                        </div>
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

export default Testimonials2;