import PropTypes from "prop-types";
import clsx from "clsx";
import swal from 'sweetalert';
import Logo from "@components/logo";
import Button from "@ui/button";
import Anchor from "@ui/anchor";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { sendPasswordResetEmail  } from "firebase/auth";
import React, {useState, useContext, useEffect} from 'react';
import {fireBaseAuth, googleAuthProvider, facebookAuthProvider} from '@utils/firebase';

const ForgetPasswordArea = ({ className, space }) => {
    

    const {
        register,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        setLoading(true);
        const auth = fireBaseAuth;
        const config = {
          url: process.env.NEXT_PUBLIC_FORGOT_PASSWORD_REDIRECT,
          handleCodeInApp: true
        }
       await sendPasswordResetEmail(auth, email, config)
       .then(() => {
           setEmail("");
           setLoading(false);
           swal({
             title: `Success, Email sent to ${email}, Please check your email to reset you password!`,
             icon: "success",
           })
         }).catch(error => {
             setLoading(false);
             swal({
                 title: `Error Sending Email, Please check the email you supplied is accurate!`,
                 icon: "error",
               })
             
         })
         
       }

    return (
        <div
            className={clsx(
                "forget-password-area",
                space === 1 && "rn-section-gapTop",
                className
            )}
        >
            <div className="container">
                <div className="row justify-content-center g-5">
                    <div className="col-xl-4 col-lg-6 col-10">
                        <div className="form-wrapper-one">
                            <Logo
                                logo={[
                                    { src: "/images/express-team/logo2.jpg" },
                                    { src: "/images/et_logo.svg" },
                                ]}
                                className="mb--50"
                            />
                            <form onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="exampleInputEmail1"
                                    {...register("exampleInputEmail1", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: "invalid email address",
                                        },
                                    })}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.exampleInputEmail1 && (
                                    <ErrorText>
                                        {errors.exampleInputEmail1?.message}
                                    </ErrorText>
                                )}
                            </div>

                            <div className="mb-3">
                                <Button type="submit">Send</Button>
                            </div>
                            </form>

                            <span className="mt--20 notice">
                                Reset Your Password
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);

}

ForgetPasswordArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};

ForgetPasswordArea.defaultProps = {
    space: 1,
};
export default ForgetPasswordArea;
