const DeleteNotePopUp = ()=>{
 
    return (
        <div>
           <div className="delete-spot">
          <h2>Confirm Delete</h2>
          <p>Are you sure you want to remove this spot from the listing?</p>
          <div><button className='confirm'  type='submit'  >Yes, Delete Spot</button></div>
          <div><button className='deny' >No, Keep Spot</button></div>
        </div>
        </div>
      )
}

export default DeleteNotePopUp