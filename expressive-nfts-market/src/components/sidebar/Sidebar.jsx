import React , {useState} from 'react';
import { Link } from 'react-router-dom'
import data from '@assets/fake-data/data-blog'

const Sidebar = () => {

    const [dataCategory]  = useState([
        {
            link: '#',
            title: 'Cryptocurrency'
        },
        {
            link: '#',
            title: 'Block Chain'
        },
        {
            link: '#',
            title: 'Bit Coin'
        },
        {
            link: '#',
            title: 'Eatherium'
        },
        {
            link: '#',
            title: 'NFT Market'
        },
        {
            link: '#',
            title: 'Buy Sale'
        },
        {
            link: '#',
            title: 'Online Trading'
        },
        {
            link: '#',
            title: 'Crypto Trade'
        },
    ]);

    const [dataTags] = useState([
        {
            name:'Crypto',
            link:'#'
        },
        {
            name:'Blockchain',
            link:'#'
        },
        {
            name:'NFT',
            link:'#'
        },
        {
            name:'Ether',
            link:'#'
        },
        {
            name:'Ico',
            link:'#'
        },
        {
            name:'Ethereum',
            link:'#'
        },
        {
            name:'Bitcoin',
            link:'#'
        },
        {
            name:'NFT Trading',
            link:'#'
        },
        {
            name:'Media',
            link:'#'
        },
    ])

    return (
        <div className="side-bar">
            <div className="side-bar__box">
                <h6 className="title">Search</h6>
                <div className="input-group">
                    <div className="form-outline">
                    <input type="search" id="form1" className="form-control" placeholder="Type & hit enter" required />
                    </div>
                    <button type="button" className="btn btn-primary">
                    <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>
            <div className="side-bar__box">
                <h6 className="title">Recent Posts</h6>
                <ul className="recent">
                    {
                        data.slice(7,10).map((data,index) => (
                            <li key={index}>
                                <Link to="/blog-single">
                                    <img src={data.img} alt="Monteno" />
                                </Link>
                                <div className="info">
                                    <Link to="/blog-single" className="fs-18">{data.title}</Link>
                                    <p className="fs-14">{data.time}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="side-bar__box">
                <h6 className="title">Categories</h6>
                <ul className="category">
                    {
                        dataCategory.map((data,index) => (
                            <li key={index}><Link className="fs-18" to={data.link}><i className="fas fa-caret-right"></i>{data.title}</Link></li>
                        ))
                    }
                </ul>
            </div>
            <div className="side-bar__box">
                <h6 className="title">Tags</h6>
                <ul className="tag">
                    {
                        dataTags.map((data,index)=> (
                            <li key={index}><Link className="fs-18" to={data.link}>{data.name}</Link></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;