import React from "react";
import "../assets/Styles/MainContaint.css"

export default function MainContaint ({children}){
    return(
        <div className="main-content">
            {children}
        </div>
    )
}