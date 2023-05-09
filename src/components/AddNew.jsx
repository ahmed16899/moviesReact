import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuid } from "uuid";
import { useParams, useNavigate } from 'react-router-dom';
import Spinn from './Spinner';
import { useDispatch, useSelector } from "react-redux";
import changeUsers , {getData , deleteUser , getUser , addUser , updateUser} from "./redux/action";

const AddNew = () => {
  const [user, setUser] = useState({name:"",
    age:"",
    email:"",
    phone:"",
    salary:"",
    address:""});
    /*{name:"",
    age:"",
    email:"",
    phone:"",
    salary:"",
    address:""}*/
    const data = useSelector((state)=>state.user)
    const dispatch = useDispatch()

  const { id } = useParams();
  const [check, setCheck] = useState(true);
  const navigate = useNavigate();
  console.log(id)

  if (id && check) {
    
    axios.get(`http://localhost:3000/students/${id}`).then((res)=>{

    setUser((oldState) => {
      return { ...res.data}
    })
    console.log(data)
        setCheck(() => {
          return false
        })
    })

 
  }



  const handleChange = (e) => {
    setUser((oldState) => {
      return { ...oldState, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)
    if (!id) {
      dispatch(addUser(user))
      navigate("/users");
    }
    else {
     dispatch(updateUser(id,user))
     navigate("/users");
    }

  }
  return (
    <>
    <form onSubmit={handleSubmit} className='text-center'>
    <label>
      <input type="text" name='name' className='form-control  my-4' value={user.name} onChange={handleChange} placeholder='name' />
      <input type="text" name='age' className='form-control  my-4' value={user.age} onChange={handleChange} placeholder='age' />
      <input type="text" name='email' className='form-control  my-4' value={user.email} onChange={handleChange} placeholder='email' />
      <input type="text" name='phone' className='form-control  my-4' value={user.phone} onChange={handleChange} placeholder='phone' />
      <input type="text" name='salary' className='form-control  my-4' value={user.salary} onChange={handleChange} placeholder='salary' />
      <input type="text" name='address' className='form-control  my-4' value={user.address} onChange={handleChange} placeholder='address' />
    </label>
    <div>
      {!id && <input type="submit" value="Add" className='btn btn-primary my-4' />}
      {id && <input type="submit" value="Update" className='btn btn-primary my-4' />}

    </div>

  </form>
        
      


    </>
  );
};

export default AddNew;

