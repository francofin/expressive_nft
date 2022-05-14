import SEO from "@components/seo";
import Wrapper from "@components/wrapper";
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import Breadcrumb from "@components/breadcrumb";
import LoginArea from "@containers/login";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Login = () => (
    <Wrapper>
        <SEO pageTitle="Log In" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Nuron Login" currentPage="Nuron Login" />
            <LoginArea />
        </main>
        <Footer />
    </Wrapper>
);

export default Login;
