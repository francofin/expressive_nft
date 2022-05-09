import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import icon from '@assets/fake-data/icon';

const Testimonial = (props) => {

    const data = props.data;

    return (
        <section className="tf-section testimonials">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <Swiper
                        modules={[Navigation , Scrollbar, A11y]}
                        spaceBetween={0}
                        navigation
                        slidesPerView= {1}
                        scrollbar={{ draggable: true }}                
                    >
                        {
                            data.map((data,index) => (
                                <SwiperSlide key={index}>
                                    <div className="testimonials-box">
                                        <div className="image">
                                            <img src={data.img} alt="Monteno" />
                                        </div>

                                        <div className="block-text ">
                                            <h5 className="sub-title mb-10" >Testimonial</h5>
                                            <h3 className="title">What People Say </h3>
                                            <div className="message">
                                                <img src={icon.leftquote} alt="Monteno" />
                                                <div className="message-content" data-aos="fade-up" data-aos-duration="1000">
                                                    <p className="text">{data.text}</p>

                                                    <div className="info">
                                                        <img src={data.avt} alt="Monteno" />
                                                        <h6>{data.name}</h6>
                                                        <p className="fs-16">{data.postion}</p>
                                                    </div>
                                                </div>
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
        </section>
    );
}

export default Testimonial;