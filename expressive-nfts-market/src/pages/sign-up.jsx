import SEO from "@components/seo";
import Wrapper from "@components/wrapper";
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import {AuthContext} from "@utils/authContext";
import Breadcrumb from "@components/breadcrumb";
import SignUpArea from "@containers/signup";
import React, {useState, useContext, useEffect} from 'react'


export async function getStaticProps() {

    return { props: { 
        className: "template-color-1" ,
        }};
}

const SignUp = () => {

    const {state, dispatch} = useContext(AuthContext);


    return (
        <Wrapper>
            <SEO pageTitle="Sign Up" />
            <Header />
            <main id="main-content">
                <Breadcrumb pageTitle="Sign Up" currentPage="Sign Up" />
                <SignUpArea />
            </main>
            <Footer />
        </Wrapper>
    )
};

export default SignUp;
