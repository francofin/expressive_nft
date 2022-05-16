import { useForm } from "react-hook-form";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import swal from 'sweetalert';
import { toast } from "react-toastify";
import {fireBaseAuth, googleAuthProvider, facebookAuthProvider} from '@utils/firebase';
import React, {useState, useContext, useEffect} from 'react';
import { updatePassword, signInWithEmailAndPassword, getIdTokenResult  } from "firebase/auth";

const ChangePassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        reset,
    } = useForm({
        mode: "onChange",
    });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);
    const [updatedPassword, setUpdatedPassword] = useState("");
    const [confirmedUpdatedPassword, setConfirmedUpdatedPassword] = useState("");


    const confirmPasswordUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        const auth = fireBaseAuth;
        const email = auth.currentUser.email;

        try{
            await signInWithEmailAndPassword(auth, email, password)
            .then( async (result) => {
              const {user} = result;
              const idTokenResult = await getIdTokenResult(user);
              setConfirmPassword(true);
            });
      
          } catch (err){
            swal({
              title:"Incorrect details, please review your login Credentials",
              icon: "error"
            });
            setConfirmPassword(false);
          }
    
      }


      const handleSumbit = (e) => {
        e.preventDefault();
        setLoading(true);
        const auth = fireBaseAuth;
        const user = auth.currentUser;
        const updatedUserPassword = updatedPassword;
        const confirmedUpdatedUserPassword = confirmedUpdatedPassword;
        if(updatedUserPassword === confirmedUpdatedUserPassword){
          updatePassword(user, updatedUserPassword).then(() => {
              swal({
                  title:"Password successfully Updated.",
                  icon: "success"
                });
              
            }).catch((error) => {
              setLoading(false);
              swal({
                  title:"Incorrect details, please review your login Credentials",
                  icon: "error"
                });
            });
        } else{
          swal({
              title:"Please try again the passwords do not match",
              icon: "error"
            });
        }
        console.log(user)
  
  
    }
    return (
        <div className="nuron-information">
            <div className="condition">
                <h5 className="title">Create Your Password</h5>
                <p className="condition">
                    Passwords are a critical part of information and network
                    security. Passwords serve to protect user accounts but a
                    poorly chosen password, if compromised, could put the entire
                    network at risk.
                </p>
                <hr />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="email-area">
                    <label htmlFor="Email2" className="form-label">
                        Enter Email
                    </label>
                    <input
                        id="Email2"
                        type="email"
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
                        <ErrorText>{errors.email?.message}</ErrorText>
                    )}
                </div>
                <div className="input-two-wrapper mt--15">
                    <div className="old-password half-wid">
                        <label htmlFor="oldPass" className="form-label">
                            Enter Old Password
                        </label>
                        <input
                            name="pass"
                            id="oldPass"
                            type="password"
                            {...register("oldPass", {
                                required: "Old Password is required",
                            })}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.oldPass && (
                            <ErrorText>{errors.oldPass?.message}</ErrorText>
                        )}
                    </div>
                    <div className="new-password half-wid">
                        <label htmlFor="NewPass" className="form-label">
                            Create New Password
                        </label>
                        <input
                            name="password"
                            id="NewPass"
                            type="password"
                            {...register("NewPass", {
                                required: "New Password is required",
                            })}
                            onChange={(e) => setUpdatedPassword(e.target.value)}
                        />
                        {errors.NewPass && (
                            <ErrorText>{errors.NewPass?.message}</ErrorText>
                        )}
                    </div>
                </div>
                <div className="email-area mt--15">
                    <label htmlFor="rePass" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        name="Password"
                        id="rePass"
                        type="password"
                        {...register("rePass", {
                            required: "Confirm Password is required",
                            validate: (value) =>
                                value === getValues("NewPass") ||
                                "The passwords do not match",
                        })}
                        onChange={(e) => setConfirmedUpdatedPassword(e.target.value)}
                    />
                    {errors.rePass && (
                        <ErrorText>{errors.rePass?.message}</ErrorText>
                    )}
                </div>
                <Button className="save-btn-edit" size="medium" type="submit">
                    Save
                </Button>
            </form>
        </div>
    );
};

export default ChangePassword;
