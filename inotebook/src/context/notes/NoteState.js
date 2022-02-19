import NoteContext from "./NoteContext";

import { useState } from "react";
import Notes from "../../components/Notes";

const NoteState = (props)=>{
  const host="http://localhost:4000"

   const intialnotes=[ {
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
  }]
  
 const [notes, setNotes] = useState(intialnotes)

 //add  note
 const addNote1=async(title,description,tag)=>{
  //API call
  const response = await fetch(`${host}/api/notes/addnote`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwNmExNjg4OTIwZDJjMzliNmU4N2U3In0sImlhdCI6MTY0NDY1OTc4NH0.k-e4rJwDhazTGY1UZV2UYQlqEcO-12QMlbwXFqbKLVs'
    },
    body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
  });
   // setNotes(notes.concat())
 }

//  //fetch all notes
//  const fetchNotes=async()=>{
//   //API call
//   const response = await fetch(`${host}/api/notes//fetchallnotes`, {
//     method: 'GET', // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       'Content-Type': 'application/json',
//       'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwNmExNjg4OTIwZDJjMzliNmU4N2U3In0sImlhdCI6MTY0NDY1OTc4NH0.k-e4rJwDhazTGY1UZV2UYQlqEcO-12QMlbwXFqbKLVs'
//     }
  
//   })
//   const json=await response.json(); // parses JSON response into native JavaScript objects
//   console.log(json)
//     setNotes(json)
//  } 

 //edit note
 const editNote=async(id,title,description,tag)=>{
  //API call
  const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwNmExNjg4OTIwZDJjMzliNmU4N2U3In0sImlhdCI6MTY0NDY1OTc4NH0.k-e4rJwDhazTGY1UZV2UYQlqEcO-12QMlbwXFqbKLVs'
    },
    body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
  });
  const json= response.json(); // parses JSON response into native JavaScript objects
 
  //logic to edit a note
     for (let index = 0; index < notes.length; index++) {
       const element = notes[index];
       if(element._id==id){
         element.title=title;
         element.description=description;
         element.tag=tag;
       }
       
     }
}
 //delete note
 
 const deleteNote=async (id)=>{
  const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwNmExNjg4OTIwZDJjMzliNmU4N2U3In0sImlhdCI6MTY0NDY1OTc4NH0.k-e4rJwDhazTGY1UZV2UYQlqEcO-12QMlbwXFqbKLVs'
    },

  });
  const json= response.json(); // parses JSON response into native JavaScript objects
 

   const  newNotes= notes.filter(
        (noteiterater)=>{
          return noteiterater._id!==id
        }
      )
      setNotes(newNotes)
}
    return (
        <NoteContext.Provider value={{notes,addNote1,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; 