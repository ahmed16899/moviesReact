import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import Spinn from './Spinner';
import { useDispatch, useSelector } from "react-redux";
import changeUsers , {getData , deleteUser , getUser} from "./redux/action";
const Details = () => {
    const data = useSelector((state)=>state.user)
    const dispatch = useDispatch()
    
  
    
    const { id } = useParams();
    console.log(data)

    useEffect(() => {
        dispatch(getUser(id))
        console.log(data)
    }, []) 

    
    return (
       <>
        {!data ? <Spinn /> :
        <div className='text-center card w-50 mx-auto py-3'>
           <p>id : {data.id}</p>
           <p>address : {data.address}</p>
           <p>name : {data.name}</p>
           <p>email : {data.email}</p>
           <p>phone : {data.phone}</p>
           <p>salary :{data.salary}</p>
           </div>
    }
    </>
    );
};

export default Details;

