import React,{useContext, useState, useEffect} from 'react'
import {auth} from '../Firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    
    function signUp(email, password) {
        auth.createUserWithEmailAndPassword(email, password)

    }

    useEffect(() =>{
       const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    },[])
   

    const value = {
        currentUser,
        signUp
    }
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}