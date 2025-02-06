import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import img from '../assets/images/items/group-ntf-02.png'

import data from '../assets/fake-data/data-blog2'
import Action from '../components/layouts/Action';

const BlogGrid = () => {

    const [visible , setVisible] = useState(9);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    }

    return (
        <div className='page-blog'>
            <Header />
            <section className="tf-section page-title">
                <div className="container">
                    <div className="col-md-12">
                        <div className="page-title__body rm">
                            <div className="block-text pt-12">
                                <h2 className="sub-title mb-20">Blog Grid</h2>
                                <p className="fs-24 mb-33" >Sed ut perspiciatis unde omnis iste natus <br /> error sit voluptatem accusantium </p>
                            </div>
                            <img className="s2" src={img} alt="Monteno" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog-grid">
                <div className="container">
                    <div className="row">
                        {
                            data.slice(0,visible).map((data,index) => (
                                <div key={index} className="col-xl-4 col-md-6 col-12 fl-item2">
                                    <div className="blog-box">
                                        <div className="blog-img">
                                            <Link to="/blog-single">
                                                <img src={data.img} alt="Monteno" />
                                            </Link>
                                        </div>
                                        <div className="blog-content">
                                            <ul className="meta"><li><Link to="/blog-single"><i className="fa fa-folder-open"></i>{data.category}</Link></li></ul>
                                            <Link to="/blog-single" className="title h6">{data.title}</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        {
                        visible < data.length && 
                        <div className="col-12">
                            <div className="load-more center">
                                <Link id="loadmore" className="btn-action" to="#" onClick={showMoreItems}>
                                    Load More
                                </Link>
                            </div>
                        </div>
                        }
                        
                        
                    </div>
                </div>
            </section>

            <Action />
            <Footer />
        </div>
    );
}

export default BlogGrid;