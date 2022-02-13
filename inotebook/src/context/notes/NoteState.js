import NoteContext from "./NoteContext";
import react from "react";
import { useState } from "react";

const NoteState = (props)=>{
    const s1 = {
        "name": "Harry",
        "class": "5b"
    }

    const [state,setState]=useState(s1)

    const update=()=>{
            setTimeout(() => {
                setState({
                    "name": "Sarry",
                    "class": "6"            
                })
            }, 5000);
    }//update
   
    return (
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; 