import SEO from "@components/seo";
import Wrapper from "@components/wrapper";
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import AuthorIntroArea from "@containers/author-intro";
import AuthorProfileArea from "@containers/author-profile";

// Demo data
import authorData from "@assets/fake-data/author.json";
import productData from "@assets/fake-data/products.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Author = () => (
    <Wrapper>
        <SEO pageTitle="Author" />
        <Header />
        <main id="main-content">
            <AuthorIntroArea data={authorData} />
            <AuthorProfileArea data={{ products: productData }} />
        </main>
        <Footer />
    </Wrapper>
);

export default Author;
