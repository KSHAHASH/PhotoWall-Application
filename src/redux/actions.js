

// removing posts
export const removePost=(index)=>{
    console.log(index)
    return{
        type:"Remove_Post",
        index: index
    }
}

// adding posts

export const addPost=(post)=>{
    return{
        type:"Add_Post",
        post:post
    }
}