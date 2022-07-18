import { createContext, useContext, useState } from "react";

//I'm creating context(some global state).
const BankContext = createContext();

//create a global hook.(helper fn)
export const useBankContext = () => useContext(BankContext);

//bank =our global state.
export const BankProvider = ({ children }) => {
    const [bank, setBank] = useState({
        loggedInUser: null,
        users: [
            {
                username: 'huh.soojin@gmail.com', 
                password: 'asdfasdf', 
                balance: 10,
            }
        ]
    });
//setLoggedInUser & addUser is gonna update our global state which is bank.
    const setLoggedInUser = (username) =>{
        setBank({
            ...bank, //take all exiesting props. 
            loggedInUser: username,
        });
    }
    //createAccount.
    const addUser = (user) => {
        setBank({
            ...bank,
            users: [...bank.users, user]
        });
    }

    return (
        //provider and values that consumers will pull from if they need to 
        <BankContext.Provider value={{
            bank,
            addUser,
            setLoggedInUser,
        }}>
            { children }
        </BankContext.Provider>
    )
}


