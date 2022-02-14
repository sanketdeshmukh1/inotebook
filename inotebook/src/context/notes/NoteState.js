import NoteContext from "./NoteContext";

import { useState } from "react";


const NoteState = (props)=>{

   const intialnotes=[
    {
      "_id": "620784b9e8c10ea1c4505dd9",
      "user": "6206a1688920d2c39b6e87e7",
      "title": "latest1111",
      "description": "1111fdgbcbgblatestnvbn",
      "tag": "111sgdfbfgbhflatestv",
      "date": "2022-02-12T09:58:17.307Z",
      "__v": 0
    },
    {
      "_id": "62078536e8c10ea1c4505ddd",
      "user": "6206a1688920d2c39b6e87e7",
      "title": "auction22",
      "description": "auction22",
      "tag": "auction22",
      "date": "2022-02-12T10:00:22.500Z",
      "__v": 0
    },
    {
      "_id": "62078536e8c10ea1c4505ddd",
      "user": "6206a1688920d2c39b6e87e7",
      "title": "auction22",
      "description": "auction22",
      "tag": "auction22",
      "date": "2022-02-12T10:00:22.500Z",
      "__v": 0
    },
    {
      "_id": "62078536e8c10ea1c4505ddd",
      "user": "6206a1688920d2c39b6e87e7",
      "title": "auction22",
      "description": "auction22",
      "tag": "auction22",
      "date": "2022-02-12T10:00:22.500Z",
      "__v": 0
    },
    {
      "_id": "62078536e8c10ea1c4505ddd",
      "user": "6206a1688920d2c39b6e87e7",
      "title": "auction22",
      "description": "auction22",
      "tag": "auction22",
      "date": "2022-02-12T10:00:22.500Z",
      "__v": 0
    },
    {
      "_id": "62078536e8c10ea1c4505ddd",
      "user": "6206a1688920d2c39b6e87e7",
      "title": "auction22",
      "description": "auction22",
      "tag": "auction22",
      "date": "2022-02-12T10:00:22.500Z",
      "__v": 0
    },
    {
      "_id": "62078536e8c10ea1c4505ddd",
      "user": "6206a1688920d2c39b6e87e7",
      "title": "auction22",
      "description": "auction22",
      "tag": "auction22",
      "date": "2022-02-12T10:00:22.500Z",
      "__v": 0
    },
    {
      "_id": "62078536e8c10ea1c4505ddd",
      "user": "6206a1688920d2c39b6e87e7",
      "title": "auction22",
      "description": "auction22",
      "tag": "auction22",
      "date": "2022-02-12T10:00:22.500Z",
      "__v": 0
    }
  ]
  
 const [notes, setNotes] = useState(intialnotes)

    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; 