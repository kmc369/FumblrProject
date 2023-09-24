import "./DeleteNote.css"
import React, { useState ,useEffect} from "react";
import {useParams } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import * as NoteActions from '../../store/note'

function DeleteNote(comment) {

const DropdownItems  =["Close","Delete","Edit"];
const [open,setOpen] = useState(false)
return (
    <>
    
    <div>
        <div className="delete_container">
            <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
        
            <i class="fa-solid fa-ellipsis"></i>
            </div>
            <div className={`dropdown-menu ${open? 'active':'inactive'}`}>

                <ul>
                    {DropdownItems.map((item,index)=>(
                       <DropdownItem text={item} key={index} />
                    
                    ))}
                   


                </ul>

            </div>
        </div>
    </div>
    </>
)

}

function DropdownItem({text}){

    return (
    <li className="dropdownItem" id={`${text}`}>
        {text}
      </li>
   
    )
}


export default DeleteNote