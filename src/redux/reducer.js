import posts from "../data/posts."
const postReducer= (state = posts, action)=>
{
    console.log(action)
    console.log(state)
    
    switch(action.type)
    {
        case "Remove_Post":
            return [...state.slice(0,action.index), ...state.slice(action.index +1)]
            break;
        
        case "Add_Post":
            return [...state, action.post]
            break;

        default:
            return state
    }
}

export default postReducer