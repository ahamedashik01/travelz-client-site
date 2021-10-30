import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../components/pages/Login/Firebase/firebase.initialize";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const reload = () => {
        window.location.reload();
    }



    const takingName = e => {
        setName(e.target.value);
    }

    const takingEmail = e => {
        setEmail(e.target.value);
    }

    const takingPassword = e => {
        setPassword(e.target.value);
    }


    const handleLoginWithEmail = e => {
        setIsLoading(true);
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }



    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name, photoURL: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png' })
            .then(() => {

            })
            .catch(error => {
                setError(error);
            })
    }


    const handleRegistration = e => {
        setIsLoading(true);
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                setError('');
                setUserName();
                reload();
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));

    }


    const signInUsingGoogle = () => {
        setIsLoading(true);

        return signInWithPopup(auth, googleProvider)

    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }


    return {
        user,
        isLoading,
        error,
        setUser,
        setError,
        signInUsingGoogle,
        setIsLoading,
        logOut,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        takingEmail,
        takingPassword,
        takingName,
        handleLoginWithEmail
    }
}

export default useFirebase;