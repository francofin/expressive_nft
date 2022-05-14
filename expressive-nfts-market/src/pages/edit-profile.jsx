import SEO from "@components/seo";
import { useRouter } from "next/router";
import Wrapper from "@components/wrapper";
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import Breadcrumb from "@components/breadcrumb";
import EditProfileArea from "@containers/edit-profile";
import { PrivateRouteProvider } from "@components/privateRoute";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}



const EditProfile = () => {
    const router = useRouter();
    
    return (
    <PrivateRouteProvider rest={router}>
        <Wrapper>
            <SEO pageTitle="Edit Profile" />
            <Header />
            <main id="main-content">
                <Breadcrumb pageTitle="Edit Profile" currentPage="Edit Profile" />
                <EditProfileArea />
            </main>
            <Footer />
        </Wrapper>
    </PrivateRouteProvider>
    )
};

export default EditProfile;
