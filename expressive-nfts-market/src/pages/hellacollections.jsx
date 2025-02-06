import SEO from "@components/seo";
import Wrapper from "@components/wrapper";
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import HeroArea from "@containers/hero/layout-03";
import LiveExploreArea from "@containers/live-explore/layout-02";
import ServiceArea from "@containers/services/layout-01";
import ExploreProductArea from "@containers/explore-product/layout-02";
import TopSellerArea from "@containers/top-seller/layout-01";
import CollectionArea from "@containers/collection/layout-01";
import { normalizedData } from "@utils/methods";

// Demo data
import homepageData from "@assets/fake-data/homepages/home-03.json";
import sellerData from "@assets/fake-data/sellers.json";
import productData from "@assets/fake-data/products.json";
import collectionsData from "@assets/fake-data/collections.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home02 = () => {
    const content = normalizedData(homepageData.content || []);
    console.log(content)
    const liveAuctionData = productData
        .filter(
            (prod) =>
                prod?.auction_date && new Date() <= new Date(prod?.auction_date)
        )
        .sort(
            (a, b) =>
                Number(new Date(b.published_at)) -
                Number(new Date(a.published_at))
        )
        .slice(0, 5);
    return (
        <Wrapper>
            <SEO pageTitle="Home Three" />
            <Header />
            <main id="main-content">
                <HeroArea data={content["hero-section"]} />
                <LiveExploreArea
                    data={{...content["live-explore-section"],
                        products: liveAuctionData,
                    }}
                />
                <ServiceArea data={content["service-section"]} />
                <ExploreProductArea
                    data={{
                        ...content["explore-product-section"],
                        products: productData,
                    }}
                />
                <TopSellerArea
                    data={{
                        ...content["top-sller-section"],
                        sellers: sellerData,
                    }}
                />
                <CollectionArea
                    data={{
                        ...content["collection-section"],
                        collections: collectionsData.slice(0, 4),
                    }}
                />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Home02;
