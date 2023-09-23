import "./EditNote.css"
import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useSelector } from 'react-redux';
import {useParams } from 'react-router-dom'
import * as NoteActions from '../../store/note'


function EditNote(){


    return(
        <>
        <h1>hello from Edit Note</h1>
        </>
    )

}

export default EditNote
