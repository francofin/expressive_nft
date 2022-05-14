import { React , useState, useEffect } from 'react';
import Link from "next/link";
import item from '@assets/fake-data/item';

const About = () => {

    const [data, setData] = useState(
        {
            subtitle: 'About Us',
            title: 'Hight Quality NFT  Collections',
            desc1: 'Sed ut perspiciatis unde omnis iste natus enim ad minim veniam, quis nostrud exercit',
            desc2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat',
        }
    )

    return (
        <section className="tf-section section-about">
            <div className="container">
                <div className="row reverse">
                    <div className="col-xl-7 col-md-12">
                        <div className="group-image">
                            <div className="left">
                                <div className="item bg-1"><img src={item.item1} alt="Monteno" /></div>
                            </div>
                            <div className="right">
                                <div className="item bg-2"><img src={item.item2} alt="Monteno" /></div>
                                <div className="item bg-3"><img src={item.item3} alt="Monteno" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-md-12">
                        <div className="block-text pt-12">
                            <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">{data.subtitle}</h5>
                            <h3 className="title mb-58" data-aos="fade-up" data-aos-duration="1000">{data.title}</h3>
                            <p className="fs-21 mb-33" data-aos="fade-up" data-aos-duration="1000">{data.desc1}</p>
                            <p className="fs-18 line-h17 mb-41" data-aos="fade-up" data-aos-duration="1000">{data.desc2}</p>
                            <Link href="/about" className="btn-action style-2"  data-aos="fade-up" data-aos-duration="1200">More About Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;