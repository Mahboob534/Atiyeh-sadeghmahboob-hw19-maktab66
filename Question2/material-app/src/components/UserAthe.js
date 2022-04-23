import React,{useContext} from 'react';
import { UserContext } from '../context/ContextLogin';
import { useLocation, Navigate } from "react-router-dom";

export default function UserAthe({children}) {
const {user,setUser}=useContext(UserContext)
const location=useLocation() 
if(!user){
   alert("please Login") 
   return <Navigate to={"/login"} state={location.pathname} />;
  } 
  return(
  <div>{children}</div>

  ) 
  
  
  
  


}
