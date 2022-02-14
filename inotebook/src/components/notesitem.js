import React from 'react'

const notesitem = (props) => {
    const {notes}=props
  return (
      <div className="col-md-4">
   <div className="card my-3" >
  <div className="card-body">
    <h5 className="card-title ">{notes.title}</h5>
    <p className="card-text">{notes.description}  </p>
    <i className="fa-solid fa-trash-can mx-3"></i>
    <i className="fa-solid fa-pen-to-square mx-3"></i>
    </div>
  </div>
</div>  
  )
}

export default notesitem