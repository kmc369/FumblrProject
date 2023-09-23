const CREATE_NOTE = 'create/note'



export const CreateNote = (note) => {
    return {
        type:CREATE_NOTE,
        payload:note
    }
}






export const createNoteThunk =(note) => async (dispatch)=>{
    // const  {content,user_id,post_id} = note
    const { content, user_id, post_id } = note
    const response = await fetch(`/api/post/${post_id}/notes`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, user_id, post_id }),
    })

    if(response.ok){
        const data = await response.json()
        dispatch(CreateNote(data))
        return data
    }
    else{
        return "Not quite"

    }
}

const initialState = {allPost:{}, singlePost:{}}
export default function noteReducer(state=initialState,action){

    switch(action.type){
        case CREATE_NOTE:{
        
            const newState = { ...state, singlePost: { ...state.singlePost } }; // { allSpots: {}, spotDetails: {} }

            newState.singlePost[action.payload.post_id] = action.payload;
      

            return newState
        }
        default:
            return state

    }




}