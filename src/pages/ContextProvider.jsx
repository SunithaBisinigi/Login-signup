import { createContext, useState } from "react";

const MyContext = createContext();
function ContextProvider ({children}) {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const userlogin =() =>{
    setIsLoggedIn(true);
   };
   const userlogout = () => {
    setIsLoggedIn(false);
   };
   return ( <UserContext.Provider value = {{isLoggedIn, userlogin, userlogout}}>
    {children}
   </UserContext.Provider>
   );
};
