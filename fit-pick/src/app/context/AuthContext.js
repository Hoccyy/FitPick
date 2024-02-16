'use client'
import { useState, useContext, createContext, useEffect } from 'react';
import { signInWithRedirect, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../../firebase';

const AuthContext = createContext ()



export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const userAgent = navigator.userAgent;
    let googleSignIn;
    if (userAgent.toLowerCase().includes('safari')) {
        googleSignIn = () => {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider);
        };
    } else {
        googleSignIn = () => {
            const provider = new GoogleAuthProvider();
            signInWithRedirect(auth, provider);
        };
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

