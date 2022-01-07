import { useEffect, useState } from "react";

import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile
    // getIdToken
} from "firebase/auth";

import initializeFirebase from "../pages/Login/Firebase/firebase.init";

// Initialize Firebase App
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("");
    // const [admin, setAdmin] = useState(false); **********
    // const [token, setToken] = useState(""); ***********

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError("");
                //Save User to Database *************
                // saveUser(email, name, "POST"); ***********

                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {})
                    .catch((error) => {});
                navigate("/");
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || "/";
                navigate(destination);
                setAuthError("");
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // const user = result.user; *********************
                // saveUser(user.email, user.displayName, "PUT"); ****************
                setAuthError("");
                const destination = location?.state?.from || "/";
                navigate(destination);
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // observe user login state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                /* getIdToken(user).then((idToken) => {
                    setToken(idToken);
                }); ***********/
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setAuthError("");
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    /*
    useEffect(() => {
        fetch(`https://serene-harbor-15380.herokuapp.com/users/${user.email}`)
            .then((res) => res.json())
            .then((data) => setAdmin(data.admin));
    }, [user.email]); ****************************************/

    /* const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch("https://serene-harbor-15380.herokuapp.com/users", {
            method: method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        }).then();
    }; **********************/

    return {
        user,
        // admin, **********
        // token, ***********
        isLoading,
        authError,
        setAuthError,
        registerUser,
        logOut,
        loginUser,
        signInWithGoogle
    };
};

export default useFirebase;
