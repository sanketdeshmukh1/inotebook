import React from 'react'
import noteContext from '../context/notes/NoteContext'
import { useContext } from 'react'
import { useState } from 'react'
const AddNote = () => {
    const context = useContext(noteContext)  //usecontext allows to use context api
    const {addNote1}=context
    const [note1, setNote] = useState({title:"",description:"",tag:"grneral"})

    const handleClick=(e)=>{
        e.preventDefault()  
addNote1(note1.title,note1.description,note1.tag);
    }
    const handleChange=(e)=>{
        setNote({...note1,[e.target.name]:e.target.value})
    }
  return (
    <div>
          <div className="container my-3">
      <h2 >Add a note</h2>
      <form>
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp"
    onChange={handleChange} placeholder="Enter title"/>
  </div>
  <div className="form-group">
    <label htmlFor="desc">Description</label>
    <input type="text" className="form-control" id="desc" name="description" onChange={handleChange} placeholder="description"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary"  onClick={handleClick}>Submit</button>
</form>
</div>
    </div>
  )
}

export default AddNote