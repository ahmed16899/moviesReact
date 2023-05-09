const initialState = { users: [], user:{a:"aaa"}}

export default function UsersReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_USERS":
            return { ...state, users: action.payload }
        case "GET_USERS":
            return { ...state, users: action.payload }
        case "DELETE_USERS":
            return { ...state, users: action.payload }
            case "GET_USER":
            return { ...state, user: action.payload }
            case "ADD_USER":
            return { ...state, users: action.payload }
        default:
            return state
    }
}


