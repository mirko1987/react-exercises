import React from "react";

const char = (props) =>{
     const style = {
         display: "inline-block",
         padding: "16px" ,
         margin: "16px",
         border:"1px solid black",
         textAlign:"center"
     }

    return (
        <div style ={style}>
            {props.character}
            {props.index}
        </div>
    )
}

export default char ;