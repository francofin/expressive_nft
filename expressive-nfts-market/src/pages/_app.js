import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { MoralisProvider } from "react-moralis";
import sal from "sal.js";
import { ThemeProvider } from "next-themes";
import {AuthProvider} from "@utils/authContext";
import '@assets/icons/font-awesome.css';
import '@assets/scss/App.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@components/button/button.scss';
import '@components/header/header.scss';
import '@components/footer/footer.scss';
import ScrollToTop from './ScrollToTop';
import AOS from 'aos';
import Head from 'next/head';

const moralisAppId = "Zgi9h3xvYrvXHJZmYjgzbfxlTPnDq6H3RytmW0qt";
const moralisServerURL = "https://mrnuat16od8z.usemoralis.com:2053/server";


const MyApp = ({ Component, pageProps }) => {
    
    useEffect(() => {
        AOS.init({
          duration : 2000
        }); 
      }, []);


    return (
        <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}>
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossorigin="anonymous"
                />
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

            </Head>
            <AuthProvider>
                < ScrollToTop />
                <Component {...pageProps} />
            </AuthProvider>
        </MoralisProvider>
    );
};

MyApp.propTypes = {
    Component: PropTypes.elementType,
    pageProps: PropTypes.shape({
        className: PropTypes.string,
    }),
};

export default MyApp;
