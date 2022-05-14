import Link from 'next/link';
import Router from "next/router";
import { AuthContext } from "@utils/authContext";
import React, {createContext, useContext, useState, useMemo, useEffect} from 'react';
import swal from 'sweetalert';

const initialPermission = {
    allowed: false
};

const PrivateRouteContext = createContext();

const PrivateRouteProvider = ({children,  ...rest}) => {
    const [user, setUser] = useState(false);
    
    // console.log(Router.push)

    const {state} = useContext(AuthContext);


    useEffect(() => {
            if (state.user){
                setUser(true)
            } else {
                swal({
                    title: `Please Create an Account and Log in, You do not yet have permission to view this page!`,
                    icon: "error",
                    });


                    Router.push('/sign-up')

            }

    }, [state.user]);

    const value = {user};
    return <PrivateRouteContext.Provider value={value}>{children}</PrivateRouteContext.Provider>

   
}

export {PrivateRouteContext, PrivateRouteProvider};