import React from 'react'
import addNote from './addNote'
import Notes from './Notes'

function home() {
  return (

    <div>
    <addNote/>
    <Notes/>
    </div>
  )
}

export default home