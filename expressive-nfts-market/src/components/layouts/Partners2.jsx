import React from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y } from 'swiper';


const Partners2 = (props) => {

    const data = props.data;

    return (
        <section className="tf-section partners">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="partners__body style-2" data-aos="fade-up" data-aos-duration="800" >
                        <Swiper
                            modules={[ Scrollbar, A11y]}
                            spaceBetween={30}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                    },
                                767: {
                                    slidesPerView: 3,
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
                                        <div className="box-partner">
                                            <Link to="#"><img src={data.img} alt="Monteno" /></Link>
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

export default Partners2;