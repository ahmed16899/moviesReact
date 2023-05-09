import axios from 'axios';

export default function changeUsers(data)
{
    return {type:"SET_USERS" , payload:data}
}


/*export  function getData()
{
    return async (dispatch)=>
    {
        const res = await axios.get('http://localhost:3000/students');
        //dispatch(changeUsers(res.data));  
        dispatch({type:"GET_USERS" , payload:res.data});
    }
}*/

export  const getData = (data) => (dispatch) =>{
     axios.get('http://localhost:3000/students').then((res)=>{
        //dispatch(changeUsers(res.data))
        console.log(res.data)
     dispatch({type:"SET_USERS" , payload:res.data}) 
     })
}

export  const deleteUser = (id) => (dispatch) =>{
    axios.delete(`http://localhost:3000/students/${id}`).then((res)=>{
       dispatch(getData())
    })
}


export  const getUser = (id) => (dispatch) =>{
    axios.get(`http://localhost:3000/students/${id}`).then((res)=>{
      // dispatch(getData())
      console.log(res.data)
      dispatch( {type:"GET_USER" , payload:res.data})
    })
}


export  const addUser = (user) => (dispatch) =>{
    axios.post(`http://localhost:3000/students`, user).then((res) => {
        //navigate("/users");
       // dispatch( {type:"ADD_USER" , payload:res.data})
        dispatch(getData())
      })
     
      
}




export  const updateUser = (id,user) => (dispatch) =>{

      axios.patch(`http://localhost:3000/students/${id}`, user).then((res) => {
        //navigate("/users");
        dispatch(getData())
      })
}

/*export  function deleteUser(id)
{
    return async (dispatch)=>
    {
        axios.delete(`http://localhost:3000/students/${id}`)
        .then((res) => {
          
           // dispatch({type:"DELETE_USERS" , payload:res.data});
            dispatch(getData())
        }
        );  
    }
}*/



/*export  function deleteUser(id)
{
    return async (dispatch)=>
    {
        axios.delete(`http://localhost:3000/students/${id}`)
        .then((res) => {
            dispatch(getData())
        }
        );  
    }
}*/