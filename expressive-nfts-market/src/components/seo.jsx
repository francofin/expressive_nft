import Head from "next/head";
import PropTypes from "prop-types";

const SEO = ({ pageTitle }) => (
    <Head>
        <title> {pageTitle} || Nuron - NFT Marketplace Template</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
        />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
    </Head>


);

SEO.propTypes = {
    pageTitle: PropTypes.string.isRequired,
};

export default SEO;
