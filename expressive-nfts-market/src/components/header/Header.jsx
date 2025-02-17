import React , { useEffect , useState, useContext } from 'react';
import Link from "next/link";
import Image from "next/image";
import menus from "@assets/expressive-proprietary/menu";
import { useRouter } from "next/router";
import logo from '@assets/fake-data/logo';
import ButtonOne from '../button/ButtonOne';
import {fireBaseAuth} from '@utils/firebase';
import {AuthContext} from "@utils/authContext";

const Header = () => {

    const {asPath}  = useRouter();
    const {state, dispatch} = useContext(AuthContext);
    const {user} = state;

    const [scroll, setScroll] = useState(false);
        useEffect(() => {
            window.addEventListener("scroll", () => {
                setScroll(window.scrollY > 100);
            });
            return () => {
                setScroll({});
            }
    }, []);


    const [menuActive, setMenuActive] = useState(null);

    const handleMenuActive = () => {
        setMenuActive(!menuActive);
      };

    
    const [activeIndex, setActiveIndex] = useState(null);
    const handleDropdown = index => {
        setActiveIndex(index); 
    };
    // ${scroll ? 'is-fixed' : ''}

    return (
        <header id="header_main" className={`header js-header ${scroll ? 'is-fixed' : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header__body d-flex justify-content-between">
                            <div className="header__logo">
                                <Link href="/" passHref>
                                    <a>
                                    <Image 
                                    id="site-logo" 
                                    src={logo}
                                    alt="Expressive-Teen"
                                    width={200}
                                    height={90}
                                    priority
                                    quality={100}
                                    />
                                    </a>
                                </Link>
                            </div>

                            <div className="header__right">
                                
                                <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`}>
                                    <ul id="menu-primary-menu" className="menu">
                                        {
                                            menus.map((data,index) => (
                                                <li key={index} onClick={()=> handleDropdown(index)} className={`menu-item ${data.namesub ? 'menu-item-has-children' : '' } ${activeIndex === index ? 'active' : ''} ${asPath.pathname === data.links ? 'active' : ''}`}>
                                                    <Link href={data.links}><a>{data.name}</a></Link>
                                                    {
                                                         data.namesub &&
                                                         <ul className="sub-menu" >
                                                            {
                                                                data.namesub.map((submenu) => (
                                                                    <li key={submenu.id} className={
                                                                        asPath.pathname === submenu.links
                                                                        ? "menu-item current-item"
                                                                        : "menu-item"
                                                                    }><Link href={submenu.links}>{submenu.sub}</Link></li>
                                                                ))
                                                            }
                                                        </ul>
                                                    }
                                                </li>
                                            ))
                                            
                                        }
                                        <li>
                                        {!user && 
                                            <Link href='/login' className="btn-action">
                                                Login
                                            </Link> }
                                        </li>
                                    </ul>
                                </nav>
                                <div className="button">
                                    <ButtonOne />
                                </div>
                                
                                <ul className="social">
                                    <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                    <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                                </ul>
                                <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}><span></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;