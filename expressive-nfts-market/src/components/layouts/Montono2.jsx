import React from 'react';
import { Link } from 'react-router-dom'

const Montono2 = (props) => {

    const data = props.data;

    return (
        <section className="tf-section montono" id='portfolio'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block-text center">
                            <h1 className="heading-bg" data-aos="fade-in" data-aos-duration="1000"><span>Collections</span></h1>
                            <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">NFT Portfolio Collections</h5>
                            <h3 className="title mb-28" data-aos="fade-up" data-aos-duration="1000">Checkout Our NFT<br /> Collections</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-52">
                    {
                        data.slice(8,15).map((data,index) => (
                            <div key={index} className="col-xl-4 col-md-6">
                                <div className="image-box" data-aos="fade-up" data-aos-duration="1000">
                                    <img src={data.img} alt="Monteno" />
                                    <div className="image-box__title">
                                        <Link to="/collections" className="h6">{data.title}</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="col-12">
                        <div className="view-all center">
                            <Link className="btn-action" to="/collections">
                                View All
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Montono2;