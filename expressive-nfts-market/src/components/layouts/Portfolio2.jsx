import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Portfolio2 = (props) => {

    const data = props.data;

    return (
        <section className="tf-section portfolio">
            <div className="container-fluid">

                <Swiper
                    className='swiper-portfolio s1'
                    modules={[ Autoplay ]}
                    spaceBetween={30}
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
                    loop
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    speed= {2000}
                >
                    {
                        data.map((data,index) => (
                            <SwiperSlide key={index}><div className="item bg-2"><img src={data.img} alt="Monteno" /></div></SwiperSlide>
                        ))
                    }

                </Swiper>

            </div>
            
            
        </section>
    );
}

export default Portfolio2;