import { useState , useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap';
import Spinn from "./Spinner";
import { useDispatch, useSelector } from "react-redux";
import changeUsers , {getData , deleteUser} from "./redux/action";

const Home = () => {


    const data = useSelector((state)=>state.users)
    const dispatch = useDispatch()
    
   useEffect(() => {
    dispatch(getData())
    }, [dispatch])

    



    const deleteUsersss = (id)=>{
        dispatch(deleteUser(id))
    }

   /* const getData = ()=>{
        axios.get('http://localhost:3000/students')
    .then((res) => {
        //setData((old)=>[...res.data])
        dispatch(changeUsers(res.data))
    }
    );
    } */


    return (
        <>
        <table className="table text-center">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>


            </tr>
        </thead>
        <tbody>
            {data.map((u)=><tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>@{u.email}</td>
                <td>
                <Link className="btn btn-primary" to={`/users/${u.id}`}>Details</Link>
                </td>
                <td>
                <button className="btn btn-danger" to={`/users/${u.id}`}  onClick={() =>deleteUsersss(u.id)}>Delete</button>
                </td>
                <td>
                <Link className="btn btn-secondary" to={`/update/${u.id}`}>Update</Link>
                </td>
            </tr>)}
        </tbody>

        
    </table>  
       
        
        </>
    );
};

export default Home;

