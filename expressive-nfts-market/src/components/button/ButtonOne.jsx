import Link from "next/link"
import {fireBaseAuth} from '@utils/firebase';
import {AuthContext} from "@utils/authContext";
import { useRouter } from "next/router";
import { signOut} from "firebase/auth";
import React, {useContext, useEffect} from 'react';
import { Button, Dropdown, DropdownButton } from "react-bootstrap";


const ButtonOne = () => {
  const {state, dispatch} = useContext(AuthContext);
  const router = useRouter();
  const {user} = state;

  console.log("from join", state)

  const logout = async () => {
    const auth = fireBaseAuth;
    await signOut(auth);

    console.log("Clicked from Sign Out")

    dispatch({
      type:'LOGGED_IN_USER', 
      payload: null
    })

    router.push({
        pathname: "/",
    });

  }

  return (
    <>
      {
        user ? 
        <DropdownButton
            id="dropdown-button-dark-example6"
            // variant="secondary"
            menuVariant="dark"
            title="User Profile"
            className="mt-4"
          >
              <Dropdown.Item href="/author" active style={{fontSize:15}}>
                Profile
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" style={{fontSize:15}}>Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3" style={{fontSize:15}}>Something else</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item style={{fontSize:15}} className="btn-action" onClick={logout}> Sign Out</Dropdown.Item>
        </DropdownButton>
      :
        <>
          <Link href='/sign-up' className="btn-action">
            Register
          </Link>
      </>
      }
    </>
      
    );
}

export default ButtonOne;

