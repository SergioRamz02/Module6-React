import React from "react";
import "../assets/styles/MainContaint.css"

export default function MainContaint ({children}){
    return(
        <div className="main-content">
            {children}
        </div>
    )
}