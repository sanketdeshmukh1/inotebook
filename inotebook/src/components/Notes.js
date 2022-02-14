import React from 'react'
import noteContext from '../context/notes/NoteContext'
import { useContext } from 'react'
import Notesitem from './notesitem' 

const Notes = () => {
    const context = useContext(noteContext)  //usecontext allows to use context api
    const {notes,setNotes}=context

  return (
<div className="row my-3">
      <h2>Your12 notes</h2>
      {notes.map((note)=>{
          return <Notesitem notes={note}/>
      },)}
      </div>

  )
}

export default Notes