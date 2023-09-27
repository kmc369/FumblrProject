
import './PhotoForm.css'
import React, { useEffect, useState } from "react";

function PhotoForm () {
const [context,setContent] = useState("")
const [image,setImage] = useState("")
    return (
        <>

        <div className='photo-container'>
            <label className='image-label'>
            <i className="fa-solid fa-camera-retro"></i>
            <input className='input-image'
                type="file"
                value={image}
                onChange={(e)=>setImage(e.target.value)}
              
            />
            </label>
            <input className='input-text'
                type='text'
                value={context}
                onChange={(e)=>setContent(e.target.value)}
                placeholder='Go ahead, say something!'
            />



        </div>
        </>
    )
}

export default PhotoForm