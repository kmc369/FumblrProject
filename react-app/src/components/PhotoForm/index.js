
import './PhotoForm.css'
import React, { useEffect, useState } from "react";

function PhotoForm () {
const [context,setContent] = useState("")
const [image,setImage] = useState("")
    return (
        <>

        <div className='photo-container'>
            <label className='image-input'>
            <input
                type="file"
                placeholder='Upload Image'
                value={image}
                onChange={(e)=>setImage(e.target.value)}
            />
            </label>
            <input 
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