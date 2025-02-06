import Button from "@ui/button";
import NiceSelect from "@ui/nice-select";
import {PROFILE} from '@utils/queries';
import {UPDATE_USER} from '@utils/mutations';
import {useQuery, useMutation, gql} from '@apollo/client';
import React, { useState, useMemo, useContext, useEffect } from "react";
import swal from 'sweetalert';
import omitDeep from 'omit-deep-lodash';
import {AuthContext} from "@utils/authContext";

const PersonalInformation = () => {

    const {state, dispatch} = useContext(AuthContext);
    const [email, setEmail] = useState('');

    const [values, setValues] = useState({
        userName:'',
        firstName:'',
        lastName:'',
        country:'',
        profileTextPargaraph:'',
        images:[]
    })

    const {
        userName,
        firstName,
        lastName,
        country,
        profileTextPargaraph,
        images
    } = values;

    const [loading, setLoading] = useState(false);

    const {data:userProfile} = useQuery(PROFILE);


 

    useEffect(() => {

        if (userProfile){
            setValues({
                userName:userProfile.profile.userName,
                firstName:userProfile.profile.firstName,
                lastName:userProfile.profile.lastName,
                country:userProfile.profile.country,
                profileTextPargaraph:userProfile.profile.profileTextPargaraph,
                images:omitDeep(userProfile.profile.images, ["__typename"])
            })
        }

    }, [userProfile]);

    useEffect(() => {
        if(state.user){
            setEmail(state.user.email)
        }
        
    }, [state.user])

    console.log(email);



    const [updateUser] = useMutation(UPDATE_USER, {
        update:({data}) => {
            console.log('UPDATE MUT', data);
            swal({
                title:"Profile Details Updated",
                icon: "success"
              });
        }
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        updateUser({variables: {input: values}})
        setLoading(false)
    };

    const handleChange = (e) => {
        setValues({...values, [e.target.name] : e.target.value})
    }

    return (
    <form onSubmit={handleSubmit}>
        <div className="nuron-information">
            <div className="profile-form-wrapper">
                <div className="input-two-wrapper mb--15">
                    <div className="first-name half-wid">
                        <label htmlFor="contact-name" className="form-label">
                            First Name
                        </label>
                        <input
                            name="firstName"
                            id="contact-name"
                            type="text"
                            value={firstName}
                            onChange={handleChange}
                            disabled={loading}
                        />
                    </div>
                    <div className="last-name half-wid">
                        <label htmlFor="contact-name-last" className="form-label">
                            Last Name
                        </label>
                        <input
                            name="lastName"
                            id="contact-name-last"
                            type="text"
                            value={lastName}
                            onChange={handleChange}
                            disabled={loading}
                        />
                    </div>
                </div>
                <div className="input-two-wrapper mb--15">
                    <div className="userName half-wid">
                        <label htmlFor="UserName" className="form-label">
                            Edit UserName
                        </label>
                        <input
                            name="userName"
                            id="userName"
                            type="userName"
                            value={userName}
                            onChange={handleChange}
                            disabled={loading}
                        />
                    </div>
                    <div className="email-area half-wid">
                        <label htmlFor="Email" className="form-label">
                            Edit Your Email
                        </label>
                        <input
                            name="email"
                            id="Email"
                            type="email"
                            value={email}
                            disabled={true}
                        />
                    </div>
                </div>
            </div>
            <div className="edit-bio-area mt--30">
                <label htmlFor="Discription" className="form-label">
                    Edit Your Bio
                </label>
                <textarea
                    name="profileTextPargaraph"
                    id="Discription"
                    value={profileTextPargaraph}
                    onChange={handleChange}
                    disabled={loading}
                >
                    {profileTextPargaraph}
                </textarea>
            </div>


            <div className="input-two-wrapper mt--15">
                <div className="half-wid currency">
                    <NiceSelect
                        options={[
                            { value: "United States", text: "United States" },
                            { value: "UK", text: "UK" },
                            { value: "Canada", text: "Canada" },
                            { value: "Africas", text: "Africas" },
                            { value: "Middle East", text: "Middle East" },
                            { value: "Europe", text: "Europe" },
                            { value: "China", text: "China" },
                            { value: "Japan", text: "Japan" },
                            { value: "Rest of Asia", text: "Rest of Asia" },
                        ]}
                        placeholder="Location"
                        className="profile-edit-select"
                        name="country"
                        onChange={(e) => setValues({...values, country:e.value})}
                        value={country}
                        disabled={loading}
                    />
                </div>
            </div>
            <div className="button-area save-btn-edit">
                <Button className="mr--15" color="primary-alta" size="medium">
                    Cancel
                </Button>
                <Button size="medium" type="submit">Save</Button>
            </div>
        </div>
    </form>
    )
};

export default PersonalInformation;
