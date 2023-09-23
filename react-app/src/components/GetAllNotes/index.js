import React, { useState ,useEffect} from "react";
import {useParams } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import * as NoteActions from '../../store/note'
import "./GetNotes.css"


function GetAllNotes() {

const all_notes = useSelector(state => (state.note.singlePost))
const post_id = useParams()
const dispatch = useDispatch()


useEffect(()=>{
    dispatch(NoteActions.getCommentsOfPostThunk(all_notes,post_id))
    
},[dispatch,all_notes,post_id])

if (Object.values(all_notes).length === 0) {
        return null
}

const values = Object.values(all_notes);

return (
    <>
    <h1>hello</h1>
    {/* <div id='notesContainer'>
      
       
      {values.map((element, index) => (
          
          <div className="notes" key={index}>
            <p>{element.content}</p> 
      </div>
      ))} 
   
   </div> */}
    
    </>
)

}


export default GetAllNotes