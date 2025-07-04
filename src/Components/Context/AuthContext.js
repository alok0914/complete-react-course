import React, { useEffect, useState } from "react";

let AuthContext = React.createContext(
    {
        isLoggedIn: false,
        onLogout: undefined,
        onLogin: undefined
    });

export function AuthContextProvider(props) {

    const [isLoggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        const loginValue = localStorage.getItem('isLoggedIn');
        if (loginValue === '1') {
            setLoggedIn(true);
        }
    }, [])

    function loginHandler() {
        localStorage.setItem('isLoggedIn', '1');
        setLoggedIn(true);
    }

    function logoutHandler() {
        localStorage.removeItem('isLoggedIn');
        setLoggedIn(false);
    }

    return <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;