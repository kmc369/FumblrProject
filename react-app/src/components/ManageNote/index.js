import "./ManageNote.css"
import React, { useState ,useEffect} from "react";
import {useParams } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import * as NoteActions from '../../store/note'
import OpenModalButton from '../OpenModalButton'
import DeleteNotePopUp from '../ManageNotePopUp'
import {EditNotePopUp} from '../ManageNotePopUp'



function DeleteNote({comment }) {
// console.log("the function from delete is ", openDeleteModal)
const DropdownItems  =["Delete","Edit"];
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

export function DropdownItem({ text}) {
    const [open,setOpen] = useState(true)
   
  
    return (
        <>
        <li className="dropdownItem" >
           
            {text==="Delete" && (
            <OpenModalButton
                    id={`${text}`}
                    modalComponent={<DeleteNotePopUp/>}
                    buttonText={text}
                
                    
                 
                    
            />)}

            {text === "Edit" && (
                     <OpenModalButton
                     id={`${text}`}
                     modalComponent={<EditNotePopUp/>}
                     buttonText={text}
                        
                     
             />

            )}

        

           

       
        </li>

        </>
   
      
    );
  }
  





export default DeleteNote