'use client'
import { useState, useContext, createContext, useEffect } from 'react';
import { signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../../firebase';

const AuthContext = createContext ()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

    const logOut = () => {
        signOut(auth);
    }

    useEffect (() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [user])
    return (
        <AuthContext.Provider value={{user, googleSignIn, logOut}}>{children}</AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return (
        useContext(AuthContext)
    )
}

