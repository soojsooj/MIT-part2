//using context, you don't have to pass props though every level of the tree..
//Context is designed to share data that can be considered 'Glabal'for react components.
import { createContext, useContext, useState } from 'react';

//create some global thing that will provide down to child components.
const BankContext = createContext();
//hook
export const useBankContext = () => useContext(BankContext);

//'bank' is equel to the object inside of useState().defualt state.
//and 'setBank' is the fucntion we will use to update the 'bank'state variable.
export const BankProvider = ({children}) => {
    const [bank, setBank] = useState({
        loggedInUser: null,
        users: [
            {
                username: 'soojin', password: 'asdfasdf', balance: 10,
            }
        ]
    });
    //update our global state
    const setLoggedInUser = (username) => {
        setBank({
            ...bank,
            loggedInUser: username,
        });
    }

    const addUser = (user) => {
        setBank({
            ...bank,
            users: [...bank.users, user] //update with a new array which is existing users and a user.
        });
    }

    return(
        <BankContext.Provider value={{
            bank,
            addUser,
            setLoggedInUser,
        }}>
            {children}
        </BankContext.Provider>
    );
}