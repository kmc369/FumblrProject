import "./EditNote.css"
import React, { useEffect, useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useSelector } from 'react-redux';
import {useParams } from 'react-router-dom'
import * as NoteActions from '../../store/note'


function EditNote(){
const dispatch = useDispatch()
const user = useSelector((state)=>state.session.user)

// const old_content = useSelector((state)=>state.singlePost.comment)
// console.log(old_content)
const {note_id} = useParams()
const note_id_int = parseInt(note_id, 10);
const [content ,setContent] = useState("")


const handleSubmit = async (e)=>{
    e.preventDefault()

    const formData = {
        content:content,
        user_id:user.id,
        post_id:2

    }




    dispatch(NoteActions.EditCommentThunk(formData,note_id_int))
}



    return(
        <>
        <h1>hello from Edit Note</h1>
        <div className="EditForm" onSubmit={handleSubmit}>
            <form>
                <textarea 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    type='text'
                />
                <button type="submit">Reply</button>
            </form>
        </div>

        </>
    )

}

export default EditNote
