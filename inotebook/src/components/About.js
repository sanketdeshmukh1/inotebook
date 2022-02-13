import React, { useContext, useEffect} from 'react'
import noteContext from '../context/notes/NoteContext'

const About = () => {
    const a = useContext(noteContext)
        //useEffect is hook which is same as componantdidmount or componantdidupdate
    useEffect( ()=>{   

        a.update();
    }

    ,[])
    return (
        <div>     
       This is About {a.state.name} and he is in class {a.state.class}
        </div>
    )
}

export default About

