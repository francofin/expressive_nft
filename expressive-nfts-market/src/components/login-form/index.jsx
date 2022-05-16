import PropTypes from "prop-types";
import clsx from "clsx";
import Link from "next/link";
import swal from 'sweetalert';
import Button from "@ui/button";
import { CREATE_USER } from '@utils/mutations';
import ErrorText from "@ui/error-text";
import {gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {fireBaseAuth, googleAuthProvider, facebookAuthProvider} from '@utils/firebase';
import {AuthContext} from "@utils/authContext";
import { signInWithEmailAndPassword, signInWithPopup, getIdTokenResult, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import React, {useState, useContext, useEffect} from 'react';

const LoginForm = ({ className }) => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const {state, dispatch} = useContext(AuthContext);

    const[createUser] = useMutation(CREATE_USER);


    const {
        register,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    
    const handleSubmit = async(e) =>{
        e.preventDefault();
        setLoading(true);

        const auth = fireBaseAuth;

        window.localStorage.removeItem('authtoken')
        window.localStorage.removeItem('autheamil')
        
        try{
          await signInWithEmailAndPassword(auth, email, password)
          .then( async (result) => {
            const {user} = result;
            const idTokenResult = await getIdTokenResult(user);
            window.localStorage.setItem('authtoken', idTokenResult.token)
            window.localStorage.setItem('autheamil', user.email)
            dispatch({
              type:'LOGGED_IN_USER',
              payload:{email: user.email, token:idTokenResult.token}
          });

          
    
    
            createUser();
            router.push('/author');
          });
    
        } catch (err){
          swal({
            title:"Incorrect details, please review your login Credentials",
            icon: "error"
          })
        }
      }

      

    return (
        <div className={clsx("form-wrapper-one", className)}>
            <h4>Login</h4>
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
                <div className="mb-5">
                    <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="exampleInputPassword1"
                        {...register("exampleInputPassword1", {
                            required: "Password is required",
                        })}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.exampleInputPassword1 && (
                        <ErrorText>
                            {errors.exampleInputPassword1?.message}
                        </ErrorText>
                    )}
                </div>
                <div className="mb-5 rn-check-box">
                    <input
                        type="checkbox"
                        className="rn-check-box-input"
                        id="exampleCheck1"
                        {...register("exampleCheck1")}
                    />
                    <label
                        className="rn-check-box-label"
                        htmlFor="exampleCheck1"
                    >
                        Remember me leter
                    </label>
                </div>
                <div className="mb-1">
                    <Link
                    href="/forget"
                    className="rn-check-box-label"
                    >
                        Forgot Password?
                    </Link>
                </div>
                <Button type="submit" size="medium" className="mr--15">
                    Log In
                </Button>
                <Button path="/sign-up" color="primary-alta" size="medium">
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

LoginForm.propTypes = {
    className: PropTypes.string,
};
export default LoginForm;
