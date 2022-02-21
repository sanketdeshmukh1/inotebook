import NoteContext from "./NoteContext";

import { useState } from "react";
import Notes from "../../components/Notes";

const NoteState = (props)=>{
  const host="http://localhost:4000"

   const intialnotes=[]
  
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
  const noteapi = await response.json();
  setNotes(notes.concat(noteapi))
 }

 //fetch all notes
 const fetchNotes=async()=>{
  //API call
  const response = await fetch(`${host}/api/notes//fetchallnotes`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwNmExNjg4OTIwZDJjMzliNmU4N2U3In0sImlhdCI6MTY0NDY1OTc4NH0.k-e4rJwDhazTGY1UZV2UYQlqEcO-12QMlbwXFqbKLVs'
    }
  
  })
  const json=await response.json(); // parses JSON response into native JavaScript objects
  console.log(json)
    setNotes(json)
  } 

 //edit note
 const editNote=async(id,title,description,tag)=>{
  //API call
  const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwNmExNjg4OTIwZDJjMzliNmU4N2U3In0sImlhdCI6MTY0NDY1OTc4NH0.k-e4rJwDhazTGY1UZV2UYQlqEcO-12QMlbwXFqbKLVs'
    },
    body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
  });
  const json= response.json(); // parses JSON response into native JavaScript objects
 
  let updatednote=JSON.parse(JSON.stringify(notes)) 
  //logic to edit a note
     for (let index = 0; index < updatednote.length; index++) {
       const element = updatednote[index];
       if(element._id==id){
        updatednote[index].title=title;
        updatednote[index].description=description;
        updatednote[index].tag=tag;
        break;
       }

     }
     setNotes(updatednote)    
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
        <NoteContext.Provider value={{notes,addNote1,deleteNote,editNote,fetchNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; 