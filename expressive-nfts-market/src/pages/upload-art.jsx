import SEO from "@components/seo";
import Wrapper from "@components/layouts/wrapper";
import Header from '@components/header/Header';
import FooterStyle2 from '@components/footer/FooterStyle2';
import Footer from '@components/footer/Footer';
// import Header from "@layout/header/header-01";
// import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import CreateNewArea from "@components/create-new";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const NFT = () => (
    <Wrapper>
        <SEO pageTitle="Create New" />
        <Header />
        <main id="main-content">
            <CreateNewArea />
        </main>
        <Footer />
    </Wrapper>
);

export default NFT;
