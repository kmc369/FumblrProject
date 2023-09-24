import React, { useState ,useEffect} from "react";
import {useParams } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import * as NoteActions from '../../store/note'
import "./GetNotes.css"


function GetAllNotes() {

const all_notes = useSelector(state => (state.note.singlePost))

const {post_id} = useParams()
const postIdAsInt = parseInt(post_id, 10);

const dispatch = useDispatch()


useEffect(()=>{
    dispatch(NoteActions.getCommentsOfPostThunk(postIdAsInt))
    
},[dispatch,postIdAsInt])

if (Object.values(all_notes).length === 0) {
        return null
}

const values = Object.values(all_notes);
// console.log("the values are ", values)
return (
   
  <>
    <h1>hello</h1>

    <div id='notesContainer'>
      {values[0].map((element, index) => (
        <div className="notes" key={index}>
          <p>{element.content}</p>
        </div>
      ))}
    </div>
  </>
)

}


export default GetAllNotes