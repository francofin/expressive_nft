/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {PROFILE} from '@utils/queries';
import {useQuery, useMutation, gql} from '@apollo/client';
import React, { useState, useMemo, useContext, useEffect } from "react";
import swal from 'sweetalert';
import {AuthContext} from "@utils/authContext";
import omitDeep from 'omit-deep-lodash';
import {UPDATE_USER} from '@utils/mutations';
import Resizer from "react-image-file-resizer";
import axios from 'axios';

const EditProfileImage = () => {
    const [selectedImage, setSelectedImage] = useState({
        profile: "",
        cover: "",
    });

    const {state, dispatch} = useContext(AuthContext);


    const [updateUser] = useMutation(UPDATE_USER, {
        update:({data}) => {
            console.log('UPDATE MUT', data);
            swal({
                title:"Profile Details Updated",
                icon: "success"
              });
        }
    });


    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage((prev) => ({
                ...prev,
                [e.target.name]: e.target.files[0],
            }));
        }
    };

    const [values, setValues] = useState({
        userName:'',
        firstName:'',
        lastName:'',
        email:'',
        country:'',
        profileTextPargaraph:'',
        images:[]
    })

    const {
        userName,
        firstName,
        lastName,
        email,
        country,
        profileTextPargaraph,
        images
    } = values;

 

    const [loading, setLoading] = useState(false);

    const {data:userProfile} = useQuery(PROFILE);

    useMemo(() => {

        if (userProfile){
            setValues({
                userName:userProfile.profile.userName,
                firstName:userProfile.profile.firstName,
                lastName:userProfile.profile.lastName,
                email:userProfile.profile.email,
                country:userProfile.profile.country,
                profileTextPargaraph:userProfile.profile.profileTextPargaraph,
                images:omitDeep(userProfile.profile.images, ["__typename"])
            })
        }

    }, [userProfile]);

    console.log("My Images", images)

    



    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        updateUser({variables: {input: values}})
        setLoading(false)
    }

    const fileResizeAndUpload = (e) => {
            let fileInput = false;
            if (e.target.files[0]) {
                fileInput = true;
            }
            if (fileInput) {
                Resizer.imageFileResizer(
                e.target.files[0],
                300,
                300,
                "JPEG",
                100,
                0,
                (uri) => {
                    console.log(uri);
                    axios.post(`${process.env.NEXT_PUBLIC_CLOUDINARYUPLOAD_ENDPOINT}/uploadimagestoa`, 
                    {image: uri}, 
                    {
                        headers:{
                            authtoken: state.user.token
                        }
                    }).then((res) => {
                        setLoading(false);
                        console.log('upload to datab', res)
                        setValues({images: [...images, res.data]})
                    }).catch((error) =>{
                        setLoading(false);
                        console.log( error);
                    })
                },
                "base64",
                );
            } 
        }

    return (
        <div className="nuron-information">
            <form onSubmit={handleSubmit}>
            <div className="profile-change row g-5">
                <div className="profile-left col-lg-4">
                    <div className="profile-image mb--30">
                        <h6 className="title">Change Your Profile Picture</h6>
                        <div className="img-wrap">
                            {selectedImage?.profile ? (
                                <img
                                    src={URL.createObjectURL(
                                        selectedImage.profile
                                    )}
                                    alt=""
                                    data-black-overlay="6"
                                />
                            ) : (
                                <Image
                                    id="rbtinput1"
                                    src="/images/userProf/userimg.jpg"
                                    alt="Profile-NFT"
                                    layout="fill"
                                />
                            )}
                        </div>
                    </div>
                    <div className="button-area">
                        <div className="brows-file-wrapper">
                            <input
                                id="fatima"
                                type="file"
                                accept="image/*"
                                onChange={fileResizeAndUpload}
                            />
                            <label htmlFor="fatima" title="No File Choosen">
                                <span className="text-center color-white">
                                    Upload Profile
                                </span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="profile-left right col-lg-8">
                    <div className="profile-image mb--30">
                        <h6 className="title">Change Your Cover Photo</h6>
                        <div className="img-wrap">
                            {selectedImage?.cover ? (
                                <img
                                    src={URL.createObjectURL(
                                        selectedImage.cover
                                    )}
                                    alt=""
                                    data-black-overlay="6"
                                />
                            ) : (
                                <Image
                                    id="rbtinput2"
                                    src="/images/userProf/userBackground.jpg"
                                    alt="Profile-NFT"
                                    layout="fill"
                                />
                            )}
                        </div>
                    </div>
                    <div className="button-area">
                        <div className="brows-file-wrapper">
                            <input
                                id="nipa"
                                type="file"
                                onChange={fileResizeAndUpload}
                                value={values.image}
                                accept="image/*"
                            />
                            <label htmlFor="nipa" title="No File Choosen">
                                <span className="text-center color-white">
                                    Upload Cover
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
                <button className="btn-action" type="submit">
                    Update Profile Images
                </button>
            </div>
            </form>
        </div>
    );
};

export default EditProfileImage;
