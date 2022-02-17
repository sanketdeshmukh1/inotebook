import React from 'react'
import noteContext from '../context/notes/NoteContext'
import { useContext } from 'react'
const Notesitem = (props) => {
    const {notes11}=props
    const context = useContext(noteContext)  //usecontext allows to use context api
    const {deleteNote}=context
  return (
      <div className="col-md-4">
   <div className="card my-3" >
  <div className="card-body">
    <h5 className="card-title ">{notes11.title}</h5>
    <p className="card-text">{notes11.description}  </p>
    <i className="fa-solid fa-trash-can mx-3" onClick={()=>{
       deleteNote(notes11._id);
    }}></i>
    <i className="fa-solid fa-pen-to-square mx-3"></i>
    </div>
  </div>
</div>  
  )
}

export default Notesitem