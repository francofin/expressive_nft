import React from 'react';
import { Link } from 'react-router-dom'

const BlogL = (props) => {

    const data = props.data;

    return (
        <div className="blog-body">
            {
                data.slice(4,7).map((data,index) => (
                    <div key={index} className="blog-box">
                        <div className="blog-img">
                            <Link to="/blog-single">
                                <img src={data.img} alt="Monteno" />
                            </Link>
                        </div>
                        <div className="blog-content">
                            <ul className="meta">
                                <li><Link to="/blog-single"><i className="fa fa-folder-open"></i>{data.category}</Link></li>
                                <li><Link to="#"><i className="fa fa-user"></i>{data.user}</Link></li>
                                <li><Link to="#"><i className="fa fa-clock"></i>{data.date}</Link></li>
                            </ul>
                            <Link to="/blog-single" className="title fs-36">
                                {data.title}
                            </Link>
                            <p className="fs-18 text">{data.text}</p>
                            <div className="action-group">
                                <Link to="#" className="btn-action style-2">Continue Reading</Link>
                                <div className="share">
                                    <h6 className="fs-16">Share</h6>
                                    <ul>
                                        <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            

            <ul className="pagination">
                <li className="active"><Link to="">1</Link></li>
                <li><Link to="">2</Link></li>
                <li><Link to="">3</Link></li>
                <li><Link to=""><i className="fa fa-angle-right"></i></Link></li>
            </ul>
        </div>
    );
}

export default BlogL;