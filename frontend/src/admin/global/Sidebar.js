import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutAction, userProfileAction } from '../../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

const dispatch = useDispatch();
const navigate = useNavigate();	

useEffect(() => {
dispatch(userProfileAction());
}, []);

//log out 
const logOut = () => {
dispatch(userLogoutAction());
window.location.reload(true);
setTimeout(() => {
    navigate('/');
}, 500)
}

  return (
    <>
<p onClick={logOut}>Log out</p>
      <h6>Side bar</h6>
    </>
  )
}

export default Sidebar
