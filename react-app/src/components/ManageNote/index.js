import "./ManageNote.css"
import React, { useState ,useEffect,useRef} from "react";
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
const [showMenu, setShowMenu] = useState(false);
const ulRef = useRef();


useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);



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
                    
                       <DropdownItem text={item} key={index} comment={comment} />
                    
                    ))}
                   


                </ul>

            </div>
        </div>
    </div>
    </>
)

}

export function DropdownItem({ text, comment}) {
    const [open,setOpen] = useState(true)
   
  
    return (
        <>
        <li className="dropdownItem" >
           
            {text==="Delete" && (
            <OpenModalButton
                    id={`${text}`}
                    modalComponent={<DeleteNotePopUp comment={comment} />}
                    buttonText={text}
                
                    
                 
                    
            />)}

            {text === "Edit" && (
                     <OpenModalButton
                     id={`${text}`}
                     modalComponent={<EditNotePopUp comment={comment}/>}
                     buttonText={text}
                        
                     
             />

            )}

        

           

       
        </li>

        </>
   
      
    );
  }
  





export default DeleteNote