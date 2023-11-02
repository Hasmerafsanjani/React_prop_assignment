import React from 'react'

function Card({prop}) {
    const cardStyle = {
        width:"100px",
        margin:"15px",
        boxShadow : "rgba(100, 0, 0, 0.2) 0px 60px 40px -7px"
     }
 
     const inColor ={
         height:"180px"
         , width : "100px"
         ,backgroundColor:prop.color
     }
 
     const codehas = {
         textAlign:"center",
             width:"100px",
             height:"20px",
            color:prop.color
     }
 
     const para = {
         textAlign:"center",
         height:"15px" ,
          color:prop.color
     }
  return (
    <div style={cardStyle} >
    <div style={inColor}></div>
    <h3 style={codehas}>{prop.hasCode}</h3>
    <p style={para}>{prop.name}</p>
</div>
  )
}

export default Card