import React from 'react'

function Card({prop}) {
    const cardStyle = {
        width:"100px",
        margin:"10px",
        border:'1px solid blue'
     }
 
     const inColor ={
         height:"150px"
         , width : "100px"
         ,backgroundColor:prop.color
     }
 
     const codehas = {
         textAlign:"center",
             width:"100px",
             height:"40px",
            color:"white"
     }
 
     let para = {
         textAlign:"center",
         whidth:"",
         height:"20px" ,
          backgroundColor:"green",
          color:"white"
     }
  return (
    <div style={cardStyle} >
    <div style={inColor}>{prop.color}</div>
    <h3 style={codehas}>{prop.name}</h3>
    <p style={para}>{prop.hasCode}</p>
</div>
  )
}

export default Card