import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import swal from 'sweetalert';
import {fireBaseAuth, googleAuthProvider, facebookAuthProvider} from '@utils/firebase';
import {AuthContext} from "@utils/authContext";
import { signInWithEmailAndPassword, signInWithPopup, getIdTokenResult, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import React, {useState, useContext, useEffect} from 'react';


const SocialAuth = ({ className, title }) => {

  const router = useRouter();

  const {state, dispatch} = useContext(AuthContext);

  const logInWithGoogle = async (e) => {
      e.preventDefault();
      setLoading(true);

      const auth = fireBaseAuth;

      try{
        await signInWithPopup(auth, googleAuthProvider)
        .then( async (result) => {
          console.log("Google Auth", result);
          const {user} = result;
          const idTokenResult = await getIdTokenResult(user);
          dispatch({
            type:'LOGGED_IN_USER',
            payload:{email: user.email, token:idTokenResult.token}
        });

        
        createUser();
        router.push('/');
        })

      }
      catch(err){
        swal({
          title:`Please review your Google login Credentials. ${err}`,
          icon: "error"
        })
      }
      
    }

    const logInWithFaceBook = async (e) => {
      e.preventDefault();
      setLoading(true);

      try{
        await signInWithPopup(auth, facebookAuthProvider)
        .then( async (result) => {
          console.log("Google Auth", result);
          const {user} = result;
          const idTokenResult = await getIdTokenResult(user);
          dispatch({
            type:'LOGGED_IN_USER',
            payload:{email: user.email, token:idTokenResult.token}
        });

        router.push('/');
        })

      }
      catch(err){
        swal({
          title:`Please review your Google login Credentials. ${err}`,
          icon: "error"
        })
      }
      
    }

   return( 
    <div className={clsx("social-share-media form-wrapper-one", className)}>
        <h6>{title}</h6>
        <p>Log In With Social Media Account</p>
        <button type="button" className="another-login login-google" onClick={logInWithGoogle}>
            <span className="small-image">
                <Image
                    src="/images/icons/google.png"
                    alt="google login"
                    width={26}
                    height={27}
                    layout="fixed"
                />
            </span>
            <span>Log in with Google</span>
        </button>
        <button type="button" className="another-login login-facebook" onClick={logInWithFaceBook}>
            <span className="small-image">
                <Image
                    src="/images/icons/facebook.png"
                    alt="facebook login"
                    width={26}
                    height={27}
                    layout="fixed"
                />
            </span>
            <span>Log in with Facebook</span>
        </button>
        <button type="button" className="another-login login-twitter">
            <span className="small-image">
                <Image
                    src="/images/icons/tweeter.png"
                    alt="tweeter login"
                    width={26}
                    height={27}
                    layout="fixed"
                />
            </span>
            <span>Log in with Twitter</span>
        </button>
        <button type="button" className="another-login login-linkedin">
            <span className="small-image">
                <Image
                    src="/images/icons/linkedin.png"
                    alt="linkedin login"
                    width={26}
                    height={27}
                    layout="fixed"
                />
            </span>
            <span>Log in with linkedin</span>
        </button>
    </div>
   )
};

SocialAuth.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
};
export default SocialAuth;
