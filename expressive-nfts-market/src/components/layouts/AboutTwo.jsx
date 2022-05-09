import React , { useState } from 'react';
import { Link } from 'react-router-dom'

import item from '@assets/fake-data/item';

const AboutTwo = () => {

    const [data] = useState(
        {
            subtitle: 'About Us',
            title: 'Hight Quality NFT  Collections',
            desc1: 'Sed ut perspiciatis unde omnis iste natus enim ad minim veniam, quis nostrud exercit',
            desc2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat',
        }
    )

  return (
    <section className="tf-section section-about" id='about'>
        <div className="container">
            <div className="row reverse">
                <div className="col-xl-7 col-md-12">
                    <div className="group-image">
                        <div className="left">
                            <div className="item bg-1 big"><img src={item.item27} alt="Monteno" /></div>
                        </div>
                        <div className="right">
                            <div className="item bg-2 small"><img src={item.item28} alt="Monteno" /></div>
                            <div className="item bg-3"><img src={item.item29} alt="Monteno" /></div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-md-12">
                    <div className="block-text pt-12">
                        <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">{data.subtitle}</h5>
                        <h3 className="title mb-58" data-aos="fade-up" data-aos-duration="1000">{data.title}</h3>
                        <p className="fs-21 mb-33" data-aos="fade-up" data-aos-duration="1000">{data.desc1}</p>
                        <p className="fs-18 line-h17 mb-41" data-aos="fade-up" data-aos-duration="1000">{data.desc2}</p>
                        <Link to="/about" className="btn-action style-2"  data-aos="fade-up" data-aos-duration="1200">More About Us</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default AboutTwo;