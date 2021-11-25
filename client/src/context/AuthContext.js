import { createContext, useReducer } from "react";
import AuthReducer from './AuthReducer.js'

const inittial_state = {
    user: null,
    isFetching: true,
    error: false,
}

export const AuthContext = createContext(inittial_state)

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, inittial_state)

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}>
            {children}
        </AuthContext.Provider>
    )
}