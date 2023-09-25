import "./DeleteNote.css"
import React, { useState ,useEffect} from "react";
import {useParams } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import * as NoteActions from '../../store/note'
import OpenModalButton from '../OpenModalButton'
import DeleteNotePopUp from '../DeletePopUpNote'




function DeleteNote({comment }) {
// console.log("the function from delete is ", openDeleteModal)
const DropdownItems  =["Close","Delete","Edit"];
const [open,setOpen] = useState(false)
const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);




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
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
   
  
    return (
        <li className="dropdownItem" id={`${text}`}>
            {/* {text} */}
       
            <OpenModalButton
              
                    modalComponent={<DeleteNotePopUp/>}
                    buttonText={text}
                    
            />
       
        </li>
   
        //   <li className="dropdownItem" id={`${text}`} onClick={()=>{
        //     <OpenModalButton modalComponent={<deleteNotePopUp/>} />
        
          
        //   }}>
        //     {text}
        //   </li>
      
    );
  }
  





export default DeleteNote