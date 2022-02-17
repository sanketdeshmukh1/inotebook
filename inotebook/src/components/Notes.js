import React from 'react'
import noteContext from '../context/notes/NoteContext'
import { useContext } from 'react'
import Notesitem from './notesitem'
import AddNote from './addNote' 

const Notes = () => {
    const context = useContext(noteContext)  //usecontext allows to use context api
    const {notes,addNotes}=context

  return (
      <>
          <AddNote/>
<div className="row my-3">
      <h2>Your12 notes</h2>
      {notes.map((note)=>{
          return <Notesitem notes11={note}/>
      },)}
      </div>
      </>
  )
}

export default Notes