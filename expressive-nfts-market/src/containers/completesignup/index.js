import PropTypes from "prop-types";
import clsx from "clsx";
import CompleteSignupForm from "@components/complete-signup";
import SocialAuth from "@components/social-auth";

const CompleteSignupArea = ({ className, space }) => (
    <div
        className={clsx(
            "login-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g-5">
                <div className="offset-2 col-lg-4 col-md-6 ml_md--0 ml_sm--0 col-sm-12">
                    <CompleteSignupForm />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <SocialAuth title="Another way to sign up" />
                </div>
            </div>
        </div>
    </div>
);

CompleteSignupArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};

CompleteSignupArea.defaultProps = {
    space: 1,
};
export default CompleteSignupArea;
