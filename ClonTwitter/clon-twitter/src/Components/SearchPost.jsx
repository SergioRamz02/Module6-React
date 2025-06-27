import React from "react";
import { useRef } from "react";
import "../assets/styles/SearchPost.css"

export default function SearchPost ({posts,setPosts}){
    const InputValue = useRef(null);

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        

    }

    return(
        <form>
            <input type="text" 
                   ref={InputValue}
                   placeholder="Escribe sobre tu publicación..."
                    />
            <button onClick={(e)=>handleSubmit(e)}>Publicar</button>
        </form>
    )
}