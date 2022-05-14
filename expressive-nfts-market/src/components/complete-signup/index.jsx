import PropTypes from "prop-types";
import clsx from "clsx";
import swal from 'sweetalert';
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import { useForm } from "react-hook-form";
import {useMutation } from "@apollo/client";
import { CREATE_USER } from '@utils/mutations';
import { useRouter } from "next/router";
import {fireBaseAuth} from '@utils/firebase';
import {AuthContext} from "@utils/authContext";
import React, {useState, useContext, useEffect} from 'react';
import { signInWithEmailLink, updatePassword, getIdTokenResult } from "firebase/auth";

const CompleteSignupForm = ({ className }) => {
    const router = useRouter();
    const {dispatch} = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [newPassword, setnewPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [agreeWithTerms, setagreeWithTerms] = useState(false);
    const [createUser] = useMutation(CREATE_USER);

    const {
        register,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });


    useEffect(() => {
        const userEmail = window.localStorage.getItem("expressive-email");
        const userName = window.localStorage.getItem("expressive-fn");
        const userLastName = window.localStorage.getItem("expressive-ln");
        setEmail(userEmail);
        setfirstName(userName);
        setlastName(userLastName);
      
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        // eslint-disable-next-line no-console
        const auth = fireBaseAuth;
        console.log("My Updated Info", email, firstName, lastName)
        if(!email || !newPassword){
            swal({
                title:"Email and password are required to complete the registration",
                icon:"error"
            });
            return
            }
        else if(newPassword !== confirmPassword){
            swal({
                title:"Your Passwords do no match, please try again.",
                icon:"error"
            });
            return 
        }

        //replace localstore with backend call to save and retrieve token

        try{
            
            const result = await signInWithEmailLink(auth, email, window.location.href);
            console.log("firebase auth result", result);
            if(result.user.emailVerified){
                window.localStorage.removeItem('expressive-email');
                window.localStorage.removeItem('expressive-fn');
                window.localStorage.removeItem('expressive-ln');
                let user = fireBaseAuth.currentUser;
                console.log("User", user);
                await updatePassword(user, newPassword);
             
                const idTokenResult = await getIdTokenResult(user);
                console.log("Token", idTokenResult);
                window.localStorage.setItem('authtoken', idTokenResult.token)
                window.localStorage.setItem('autheamil', user.email)
                if (agreeWithTerms) {
                    dispatch({
                        type:'LOGGED_IN_USER',
                        payload:{email: user.email, token:idTokenResult.token}
                    });
                }

                console.log("completed", user);
                createUser();
                router.push({
                    pathname: "/",
                });
            }

        } catch (err){
            console.log("Error with registering your information", err.message);
            swal({
                title:`Error with registration: ${err.message}` ,
                icon:"error"
            })

        }
    };

    return (
        <div className={clsx("form-wrapper-one", className)}>
            <h4>Complete Sign Up</h4>
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
                        value={firstName}
                        disabled = {firstName && true}
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
                        value={lastName}
                        disabled = {lastName && true}
                    />
                    {errors.sastName && (
                        <ErrorText>{errors.sastName?.message}</ErrorText>
                    )}
                </div>
                <div className="mb-5">
                    <label htmlFor="exampleInputEmail1" className="form-label">
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
                        value={email}
                        disabled = {email && true}
                    />
                    {errors.exampleInputEmail1 && (
                        <ErrorText>
                            {errors.exampleInputEmail1?.message}
                        </ErrorText>
                    )}
                </div>
                <div className="mb-5">
                    <label htmlFor="newPassword" className="form-label">
                        Create Password
                    </label>
                    <input
                        type="password"
                        id="newPassword"
                        onChange={(e) => setnewPassword(e.target.value)}
                    />
                    {errors.newPassword && (
                        <ErrorText>{errors.newPassword?.message}</ErrorText>
                    )}
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="confirmPassword"
                        className="form-label"
                    >
                        Re Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        onChange={(e) => setconfirmPassword(e.target.value)}
                    />
                    {errors.confirmPassword && (
                        <ErrorText>
                            {errors.confirmPassword?.message}
                        </ErrorText>
                    )}
                </div>
                <div className="mb-5 rn-check-box">
                    <input
                        type="checkbox"
                        className="rn-check-box-input"
                        id="exampleCheck1"
                        onChange = {(e) => setagreeWithTerms(e.target.checked)}
                    />
                    <label
                        className="rn-check-box-label"
                        htmlFor="exampleCheck1"
                    >
                        Agree to all tearms & condition
                    </label>
                    <br />
                    {errors.exampleCheck1 && (
                        <ErrorText>{errors.exampleCheck1?.message}</ErrorText>
                    )}
                </div>
                <Button type="submit" size="medium" className="mr--15">
                    Sign Up
                </Button>
                <Button path="/login" color="primary-alta" size="medium">
                    Log In
                </Button>
            </form>
        </div>
    );
};

CompleteSignupForm.propTypes = {
    className: PropTypes.string,
};
export default CompleteSignupForm;
