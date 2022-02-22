import React from 'react'
import noteContext from '../context/notes/NoteContext'
import { useState,useContext,useEffect,useRef } from 'react'
import Notesitem from './notesitem'
import AddNote from './addNote' 

const Notes = () => {
    const context = useContext(noteContext)  //usecontext allows to use context api
    const {notes,addNotes,fetchNotes,editNote}=context
    useEffect(() => {
        fetchNotes()
    }, [])

    const [note, setNote] = useState({eid: "",etitle: "", edescription: "", etag: ""})

    const ref = useRef(null)   //we can give reference to any element using useref hook

    const refClose = useRef(null)   //we can give reference to any element using useref hook
    
 
    const updateNote=(currentNote)=>{
        ref.current.click();
        setNote({eid:currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
    }

    const handleClick=()=>{
      editNote(note.eid,note.etitle,note.edescription,note.etag)
      refClose.current.click();

  }


    const handleChange=(e)=>{

        setNote({...note,[e.target.name]:e.target.value})
    }


  return (
      <>
          <AddNote/>

          {/* <!-- Button trigger modal --> */}
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form>
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control"  id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp"
    onChange={handleChange} placeholder="Enter title"/>
  </div>
  <div className="form-group">
    <label htmlFor="desc">Description</label>
    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={handleChange} placeholder="description"/>
  </div>
  <div className="form-group">
    <label htmlFor="tag">Tag</label>
    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={handleChange} placeholder="Tag"/>
  </div>
  

</form>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
        <button disabled={note.edescription.length<7 || note.etitle.length<3 || note.etag.length<4} type="button" className="btn btn-primary" onClick={handleClick}>Update note</button>
                            
      </div>
    </div>
  </div>
</div>
<div classNameName="row my-2">
      <h2>Your notes</h2>
      <div className="container">
        {notes.length===0 &&'Sorry, There are no notes to display'}
        </div>
      {notes.map((note)=>{
          return <Notesitem updateNote={updateNote} notes11={note}/>
      })}

      </div>
      </>
  )
}

export default Notes