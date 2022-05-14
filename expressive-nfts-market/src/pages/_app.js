import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { MoralisProvider } from "react-moralis";
import sal from "sal.js";
import { ThemeProvider } from "next-themes";
import {AuthContext, AuthProvider} from "@utils/authContext";
import '@assets/icons/font-awesome.css';
import '@assets/scss/App.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@components/button/button.scss';
import '@components/header/header.scss';
import '@components/footer/footer.scss';
import "@assets/scss_v2/style.scss";
import "@assets/feather.css";
import ScrollToTop from './ScrollToTop';
import AOS from 'aos';
import {client} from '@utils/apollo-client';
import {ApolloProvider } from "@apollo/client";


const moralisAppId = "Zgi9h3xvYrvXHJZmYjgzbfxlTPnDq6H3RytmW0qt";
const moralisServerURL = "https://mrnuat16od8z.usemoralis.com:2053/server";

// console.log(MyClient)
const MyApp = ({ Component, pageProps }) => {
   

    
    useEffect(() => {
        AOS.init({
          duration : 2000
        }); 
      }, []);

      console.log("My CLient from app", client);

      


    return (
        <AuthProvider>
            <ApolloProvider client={client}>
                <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}>
                    < ScrollToTop />
                    <Component {...pageProps} />
                </MoralisProvider>
            </ApolloProvider>
        </AuthProvider>
    );
};

MyApp.propTypes = {
    Component: PropTypes.elementType,
    pageProps: PropTypes.shape({
        className: PropTypes.string,
    }),
};

export default MyApp;
