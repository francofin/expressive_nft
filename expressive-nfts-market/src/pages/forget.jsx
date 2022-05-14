import SEO from "@components/seo";
import Wrapper from "@components/wrapper";
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import Breadcrumb from "@components/breadcrumb";
import ForgetPasswordArea from "@containers/forget-password";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Forget = () => (
    <Wrapper>
        <SEO pageTitle="Forget Page" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Forget Password?"
                currentPage="Forget Password?"
            />
            <ForgetPasswordArea />
        </main>
        <Footer />
    </Wrapper>
);

export default Forget;
