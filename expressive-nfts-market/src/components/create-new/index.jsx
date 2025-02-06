/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import axios from 'axios';
import swal from 'sweetalert';
import Button from "@ui/button";
import PropTypes from "prop-types";
import ErrorText from "@ui/error-text";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import {useRouter} from 'next/router';
import omitDeep from 'omit-deep-lodash';
import {CREATE_NFT} from '@utils/mutations';
import {AuthContext} from "@utils/authContext";
import Resizer from "react-image-file-resizer";
import {useQuery, useMutation, gql} from '@apollo/client';
import ProductModal from "@components/modals/product-modal";
import React, { useState, useMemo, useContext, useEffect } from "react";


const initialState = {
    description:'',
    title:'',
    image:{
        url:'',
        public_id:''
    },
    attributes:[],
    price:'',
    forSale:false,
    readyToMint:false,
    uploadToDrawing:true,
    publish:false,
    minted:false
}

const CreateNewArea = ({ className, space }) => {

    const {state, dispatch} = useContext(AuthContext);
    const [showProductModal, setShowProductModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const router = useRouter();
    const [hasImageError, setHasImageError] = useState(false);
    const [previewData, setPreviewData] = useState({});
    const [attr, setAttr] = useState('');
    const [attributes, setAttributes] = useState([]);
    const [createNFT] = useMutation(CREATE_NFT, {
        // update:({data}) => {
        //     console.log('Create NFT', data);  
        // },
        // onError: (err) => console.log(err)
    })

    const [nftValues, setNFTValues] = useState(initialState);

    const [loading, setLoading] = useState(false);


    const addAttribute = () => {
        if(attributes.length <=4 ) {
            setAttributes([...attributes, attr]);
            setAttr('');
        }
        else {
            swal({
                title:"You have hit the Max capacity of attributes",
                icon: "info"
              });
        }
    }
    

    const handleNFTSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        setNFTValues({...nftValues, attributes:[attributes]});
        console.log(nftValues);
        createNFT({variables: {input: nftValues}});
        setNFTValues(initialState)
        setLoading(false);
        swal({
            title:"Token Added To Your Profile",
            icon: "success"
          });


          router.push('/author');


    }

    const handleChange = (e) => {

        setNFTValues({...nftValues, [e.target.name]:e.target.value})
    }

    const fileResizeAndUpload = (e) => {
        let fileInput = false;
        if (e.target.files[0]) {
            fileInput = true;
        }
        console.log(e);
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
                    setSelectedImage(res.data.url)
                    setNFTValues({...nftValues,image: res.data})
                }).catch((error) =>{
                    setLoading(false);
                    console.log( error);
                })
            },
            "base64",
            );
        } 
    }




    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onChange",
    });

    const notify = () => toast("Your product has submitted");
    const handleProductModal = () => {
        setShowProductModal(false);
    };

    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const onNFTSubmit = (data, e) => {
        const { target } = e;
        const submitBtn =
            target.localName === "span" ? target.parentElement : target;
        const isPreviewBtn = submitBtn.dataset?.btn;
        setHasImageError(!selectedImage);
        if (isPreviewBtn && selectedImage) {
            setPreviewData({ ...data, image: selectedImage });
            setShowProductModal(true);
        }
        if (!isPreviewBtn) {
            notify();
            reset();
            setSelectedImage();
        }
    };

    return (
        <>
            <div
                className={clsx(
                    "create-area",
                    space === 1 && "rn-section-gapTop",
                    className
                )}
            >
                <form onSubmit={handleNFTSubmit}>
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-3 offset-1 ml_md--0 ml_sm--0">
                                <div className="upload-area">
                                    <div className="upload-formate mb--30">
                                        <h6 className="title">Upload file</h6>
                                        <p className="formate">
                                            Drag or choose your file to upload
                                        </p>
                                    </div>

                                    <div className="brows-file-wrapper">
                                        <input
                                            name="file"
                                            id="file"
                                            type="file"
                                            className="inputfile"
                                            data-multiple-caption="{count} files selected"
                                            multiple
                                            onChange={(e) => fileResizeAndUpload(e)}
                                        />
                                        {selectedImage && (
                                            <img
                                                id="createfileImage"
                                                src={selectedImage}
                                                alt=""
                                                data-black-overlay="6"
                                            />
                                        )}

                                        <label
                                            htmlFor="file"
                                            title="No File Choosen"
                                        >
                                            <i className="feather-upload" />
                                            <span className="text-center">
                                                Choose a File
                                            </span>
                                            <p className="text-center mt--10">
                                                PNG, GIF, WEBP, MP4 or MP3.{" "}
                                                <br /> Max 1Gb.
                                            </p>
                                        </label>
                                    </div>
                                    {hasImageError && !selectedImage && (
                                        <ErrorText>Image is required</ErrorText>
                                    )}
                                </div>

                                <div className="mt--100 mt_sm--30 mt_md--30 d-none d-lg-block">
                                    <h5> Current NFT Attributes </h5>
                                    <span>
                                        {" "}
                                        {attributes.map((emotion) => {
                                            return (
                                            <div>
                                                <strong>{emotion}</strong>{" "}
                                            </div>
                                            )
                                        })}             
                                    </span>{" "}
                                    <br />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="form-wrapper-one">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="input-box pb--20">
                                                <label
                                                    htmlFor="name"
                                                    className="form-label"
                                                >
                                                    Product Name
                                                </label>
                                                <input
                                                    name="title"
                                                    id="title"
                                                    value={nftValues.title}
                                                    placeholder="e. g. `Digital Awesome Game`"
                                                    onChange={handleChange}
                                                />
                                                {errors.name && (
                                                    <ErrorText>
                                                        {errors.name?.message}
                                                    </ErrorText>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="input-box pb--20">
                                                <label
                                                    htmlFor="Discription"
                                                    className="form-label"
                                                >
                                                    Description
                                                </label>
                                                <textarea
                                                    id="discription"
                                                    name="description"
                                                    rows="3"
                                                    placeholder="e. g. “After purchasing the product you can get item...”"
                                                    value={nftValues.description}
                                                    onChange={handleChange}
                                                />
                                                {errors.discription && (
                                                    <ErrorText>
                                                        {
                                                            errors.discription
                                                                ?.message
                                                        }
                                                    </ErrorText>
                                                )}
                                            </div>
                                        </div>
                                        

                                        <div className="col-md-3">
                                            <div className="input-box pb--20">
                                                <label
                                                    htmlFor="price"
                                                    className="form-label"
                                                >
                                                    Item Price in $
                                                </label>
                                                <input
                                                    id="price"
                                                    name="price"
                                                    placeholder="e. g. `20$`"
                                                    {...register("price", {
                                                        pattern: {
                                                            value: /^[0-9]+$/,
                                                            message:
                                                                "Please enter a number",
                                                        },
                                                        required:
                                                            "Price is required",
                                                    })}
                                                    value={nftValues.price}
                                                    onChange = {(e) => setNFTValues({...nftValues, price: parseInt(e.target.value)})}
                                                    disabled={loading}
                                                />
                                                {errors.price && (
                                                    <ErrorText>
                                                        {errors.price?.message}
                                                    </ErrorText>
                                                )}
                                            </div>
                                        </div>


                                        <div className="col-md-6">
                                            <div className="input-box pb--20">
                                                <label
                                                    htmlFor="Propertie"
                                                    className="form-label"
                                                >
                                                    Attributes
                                                </label>
                                                <input
                                                    id="propertiy"
                                                    name="attribute"
                                                    placeholder="One Word to Describe Yopur Art"
                                                    value={attr}
                                                    onChange={(e) => setAttr(e.target.value)}
                                                    disabled={loading}
                                                />
                                                {errors.propertiy && (
                                                    <ErrorText>
                                                        {
                                                            errors.propertiy
                                                                ?.message
                                                        }
                                                    </ErrorText>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-md-3" style={{paddingTop:33}}>
                                            <div className="input-box pb--20">
                                                <Button onClick={addAttribute} fullwidth style={{height:50}} >
                                                    Add Attr.
                                                </Button>
                                            </div>
                                        </div>


                                        <div className="col-md-4 col-sm-4">
                                            <div className="input-box pb--20 rn-check-box">
                                                <input
                                                    className="rn-check-box-input"
                                                    type="checkbox"
                                                    id="putonsale"
                                                    onChange = {(e) => setNFTValues({...nftValues, forSale: e.target.checked})}
                                                    disabled={loading}
                                                />
                                                <label
                                                    className="rn-check-box-label"
                                                    htmlFor="putonsale"
                                                >
                                                    Put on Sale
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-4">
                                            <div className="input-box pb--20 rn-check-box">
                                                <input
                                                    className="rn-check-box-input"
                                                    type="checkbox"
                                                    id="instantsaleprice"
                                                    onChange = {(e) => setNFTValues({...nftValues, readyToMint: e.target.checked})}
                                                    disabled={loading}
                                                />
                                                <label
                                                    className="rn-check-box-label"
                                                    htmlFor="instantsaleprice"
                                                >
                                                    Mint Token
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-4">
                                            <div className="input-box pb--20 rn-check-box">
                                                <input
                                                    className="rn-check-box-input"
                                                    type="checkbox"
                                                    id="publish"
                                                    onChange = {(e) => setNFTValues({...nftValues, publish: e.target.checked})}
                                                    disabled={loading}
                                                />
                                                <label
                                                    className="rn-check-box-label"
                                                    htmlFor="publish"
                                                >
                                                    Publish Art Work
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-4">
                                            <div className="input-box pb--20 rn-check-box">
                                                <input
                                                    className="rn-check-box-input"
                                                    type="checkbox"
                                                    id="unlockpurchased"
                                                    onChange = {(e) => setNFTValues({...nftValues, uploadToDrawing: e.target.checked})}
                                                    disabled={loading}
                                                    checked={nftValues.uploadToDrawing}
                                                />
                                                <label
                                                    className="rn-check-box-label"
                                                    htmlFor="unlockpurchased"
                                                >
                                                    Upload to Profile ArtWork
                                                </label>
                                            </div>
                                        </div>
                                    
                                    <div className="row">
                                        <div className="col-xl-4 col-md-12 ">
                                            <div className="input-box">
                                                <Button
                                                    color="primary-alta"
                                                    fullwidth
                                                    // type="submit"
                                                    // data-btn="preview"
                                                    // onClick={handleSubmit(
                                                    //     onNFTSubmit
                                                    // )}
                                                >
                                                    Preview
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="col-xl-8 col-md-12 mt_lg--15 mt_md--15 mt_sm--15">
                                            <div className="input-box">
                                                <Button type="submit" fullwidth>
                                                    Submit Item
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="mt--100 mt_sm--30 mt_md--30 d-block d-lg-none">
                                <h5> Note: </h5>
                                <span>
                                    {" "}
                                    Service fee : <strong>2.5%</strong>{" "}
                                </span>{" "}
                                <br />
                                <span>
                                    {" "}
                                    You will receive :{" "}
                                    <strong>25.00 ETH $50,000</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {showProductModal && (
                <ProductModal
                    show={showProductModal}
                    handleModal={handleProductModal}
                    data={previewData}
                />
            )}
        </>
    );
};

CreateNewArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};

CreateNewArea.defaultProps = {
    space: 1,
};

export default CreateNewArea;
