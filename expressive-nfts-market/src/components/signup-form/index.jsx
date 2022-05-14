import PropTypes from "prop-types";
import clsx from "clsx";
import swal from 'sweetalert';
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {fireBaseAuth} from '@utils/firebase';
import {AuthContext} from "@utils/authContext";
import { CREATE_USER } from '@utils/mutations';
import {gql, useMutation } from "@apollo/client";
import { sendSignInLinkToEmail } from "firebase/auth";
import React, {useState, useContext, useEffect} from 'react';

const SignupForm = ({ className }) => {
    const router = useRouter();
    const {state, dispatch} = useContext(AuthContext);
    console.log("user State", state);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [agreeWithTerms, setagreeWithTerms] = useState(false);

    const [createUser] = useMutation(CREATE_USER);

    console.log(createUser);




    const {
        register,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        // eslint-disable-next-line no-console
        setLoading(true);
        const auth = fireBaseAuth;
        const config = {
            url: process.env.NEXT_PUBLIC_CONFIRMATION_EMAIL_REDIRECT,
            handleCodeInApp: true
        }
        if(agreeWithTerms) {
            await sendSignInLinkToEmail(auth, email, config);
            window.localStorage.setItem('expressive-email', email);
            window.localStorage.setItem('expressive-fn', firstName);
            window.localStorage.setItem('expressive-ln', lastName);
            swal({
                title: `Success, Email sent to ${email}, Please check your email to complete your registration!`,
                icon: "success",
              });
            setEmail('');
            setfirstName('');
            setlastName('');
            setLoading(false);
            console.log(state)
        }
        
    };

    return (
        <div className={clsx("form-wrapper-one", className)}>
            <h4>Sign Up</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="firstName" className="form-label">
                        First name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        {...register("firstName", {
                            required: "First name is required",
                        })}
                        onChange={(e) => setfirstName(e.target.value)}
                    />
                    {errors.firstName && (
                        <ErrorText>{errors.firstName?.message}</ErrorText>
                    )}
                </div>
                <div className="mb-5">
                    <label htmlFor="lastName" className="form-label">
                        Last name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        {...register("lastName", {
                            required: "Last name is required",
                        })}
                        onChange={(e) => setlastName(e.target.value)}
                    />
                    {errors.lastName && (
                        <ErrorText>{errors.lastName?.message}</ErrorText>
                    )}
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address",
                            },
                        })}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                        <ErrorText>
                            {errors.email?.message}
                        </ErrorText>
                    )}
                </div>
                <div className="mb-5 rn-check-box">
                    <input
                        type="checkbox"
                        className="rn-check-box-input"
                        id="exampleCheck1"
                        {...register("exampleCheck1", {
                            required: "Checkbox is required",
                        })}
                        onChange = {(e) => setagreeWithTerms(e.target.checked)}
                    />
                    <label
                        className="rn-check-box-label"
                        htmlFor="exampleCheck1"
                    >
                        Agree to all terms & condition
                    </label>
                    <br />
                    {errors.exampleCheck1 && (
                        <ErrorText>{errors.exampleCheck1?.message}</ErrorText>
                    )}
                </div>
                <Button type="submit" size="medium" className="mr--15" disabled={!email || loading}>
                    Submit Information
                </Button>
                <Button path="/login" color="primary-alta" size="medium" disabled={!email || loading}>
                    Log In
                </Button>
            </form>
        </div>
    );
};

SignupForm.propTypes = {
    className: PropTypes.string,
};
export default SignupForm;
