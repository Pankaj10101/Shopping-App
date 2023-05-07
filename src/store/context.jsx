import { Children, createContext } from "react";

export const Context = createContext();


const AppContext = (props)=>{
    return <Context.Provider>{props.children}</Context.Provider>
}

export default AppContext