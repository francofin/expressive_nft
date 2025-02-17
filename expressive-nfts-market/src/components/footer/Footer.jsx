import React , { useState ,useEffect } from 'react';
import Link from "next/link"
import logo from '@assets/fake-data/logo';

const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer__body">
                      

                        <ul className="social">
                            <li data-aos="fade-up" data-aos-duration="1000"><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                            <li data-aos="fade-up" data-aos-duration="1200"><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                            <li data-aos="fade-up" data-aos-duration="1400"><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                            <li data-aos="fade-up" data-aos-duration="1600"><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                        </ul>
                    </div>
                    <div className="footer_bottom">
                        <p className="fs-16">Copyright © 2022, Expressive Teen - NFT Experience</p>
                        <ul>
                            <li><Link href="#">Terms & Condition</Link></li>
                            <li><Link href="#">Privacy Policy</Link></li>
                            <li><Link href="#">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        {/* {
            isVisible && 
            <Link onClick={scrollToTop} href='#' id="scroll-top"></Link>
        } */}
        </>
        
    );
}

export default Footer;