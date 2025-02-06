import React, {useEffect, useContext} from 'react';
import SEO from "@components/seo";
import {ApolloContextWrapper, ApolloWrapperProvider} from '@containers/apollo-provider';
import Wrapper from "@components/wrapper";
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import Breadcrumb from "@components/breadcrumb";
import CompleteSignupArea from "@containers/completesignup";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const SignUp = () => {

    
    
    return (
    <Wrapper>
            <SEO pageTitle="Sign Up" />
            <Header />
            <main id="main-content">
                <CompleteSignupArea />
            </main>
            <Footer />
    </Wrapper>
    )   
};

export default SignUp;