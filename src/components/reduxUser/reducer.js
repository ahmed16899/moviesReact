const initialState = {name:"",
age:"",
email:"",
phone:"",
salary:"",
address:""}

export default function UserReducer(state = initialState , action)
{
    switch (action.type)
    {
        case "SET_USER":
            return{...state ,users:action.payload} 
        default:
            return state 
    }
}


