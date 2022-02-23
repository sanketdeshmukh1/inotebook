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
setNote({title:"",description:"",tag:"grneral"})
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
    <input type="text" className="form-control" id="title" name="title" value={note1.title} aria-describedby="emailHelp"
    onChange={handleChange} placeholder="Enter title"/>
  </div>
  <div className="form-group">
    <label htmlFor="desc">Description</label>
    <input type="text" className="form-control" id="desc" name="description" value={note1.description} onChange={handleChange} placeholder="description"/>
  </div>
  <div className="form-group">
    <label htmlFor="tag">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag" value={note1.tag} onChange={handleChange} placeholder="Tag"/>
  </div>
  
  <button type="submit" disabled={note1.description.length<7 || note1.title.length<3 || note1.tag.length<4} className="btn btn-primary my-3"  onClick={handleClick}>Submit</button>
</form>
</div>
    </div>
  )
}

export default AddNote