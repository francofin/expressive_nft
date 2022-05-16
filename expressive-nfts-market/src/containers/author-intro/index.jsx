import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import {useQuery, useMutation, gql} from '@apollo/client';
import { ImageType } from "@utils/types";
import ShareDropdown from "@components/share-dropdown";
import ShareModal from "@components/modals/share-modal";
import Anchor from "@ui/anchor";
import {PROFILE} from '@utils/queries';

const AuthorIntroArea = ({ className, space, data }) => {
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const shareModalHandler = () => setIsShareModalOpen((prev) => !prev);

    const [values, setValues] = useState({
        userName:'',
        firstName:'',
        lastName:'',
        profileTextPargaraph:'',
        images:[]
    })

    const [loading, setLoading] = useState(false);

    const {data:userProfile} = useQuery(PROFILE);
    
    console.log("Apollo Data", userProfile);

    useMemo(() => {
        if (userProfile){
            setValues({
                userName:userProfile.profile.userName,
                firstName:userProfile.profile.firstName,
                lastName:userProfile.profile.lastName,
                email:userProfile.profile.email,
                country:userProfile.profile.country,
                profileTextPargaraph:userProfile.profile.profileTextPargaraph,
                images:userProfile.profile.images
            })
        }


    }, [userProfile])
    return (
        <>
            <ShareModal
                show={isShareModalOpen}
                handleModal={shareModalHandler}
            />
            <div className="rn-author-bg-area position-relative ptb--150">
                <Image
                    src="/images/userProf/userBackground.jpg"
                    alt="Slider BG"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                />
            </div>
            <div
                className={clsx(
                    "rn-author-area",
                    space === 1 && "mb--30 mt_dec--120",
                    className
                )}
            >
                <div className="container">
                    <div className="row padding-tb-50 align-items-center d-flex">
                        <div className="col-lg-12">
                            <div className="author-wrapper">
                                <div className="author-inner">
                                    {data?.image?.src && (
                                        <div className="user-thumbnail">
                                            <Image
                                                src={data.image.src}
                                                alt={
                                                    data.image?.alt || data.name
                                                }
                                                width={140}
                                                height={140}
                                                layout="fixed"
                                            />
                                        </div>
                                    )}

                                    <div className="rn-author-info-content">
                                        <h4 className="title">{values.userName}</h4>
                                        <a
                                            href="https://twitter.com"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="social-follw"
                                        >
                                            <i className="feather-twitter" />
                                            <span className="user-name">
                                                {data.twitter}
                                            </span>
                                        </a>
                                        <div className="follow-area">
                                            <div className="follow followers">
                                                <span>
                                                    {data.followers}{" "}
                                                    <a
                                                        href="https://twitter.com"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="color-body"
                                                    >
                                                        followers
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="follow following">
                                                <span>
                                                    {data.following}{" "}
                                                    <a
                                                        href="https://twitter.com"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="color-body"
                                                    >
                                                        following
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="author-button-area">
                                            <span className="btn at-follw follow-button">
                                                <i className="feather-user-plus" />
                                                Follow
                                            </span>
                                            <button
                                                type="button"
                                                className="btn at-follw share-button"
                                                onClick={shareModalHandler}
                                            >
                                                <i className="feather-share-2" />
                                            </button>

                                            <div className="count at-follw">
                                                <ShareDropdown />
                                            </div>
                                            <Anchor
                                                path="/edit-profile"
                                                className="btn at-follw follow-button edit-btn"
                                            >
                                                <i className="feather feather-edit" />
                                            </Anchor>
                                        </div>
                                        <section className="tf-section page-title">
                                            <div className="container">
                                                <div className="col-md-12">
                                                    <div>
                                                        <div className="block-text pt-12">
                                                            <h2 className="sub-title mb-20">{values.firstName}'s Profile</h2>
                                                            <p className="fs-24 mb-33" >{values.profileTextPargaraph}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

AuthorIntroArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
    data: PropTypes.shape({
        name: PropTypes.string,
        twitter: PropTypes.string,
        followers: PropTypes.string,
        following: PropTypes.string,
        image: ImageType,
    }),
};
AuthorIntroArea.defaultProps = {
    space: 1,
};

export default AuthorIntroArea;
