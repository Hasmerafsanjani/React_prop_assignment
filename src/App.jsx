import { useState } from 'react'
import Card from './components/Card'

function App() {

  const divStyle={
    marginTop:"50px",
    hieght:"100vh",
    // border:"1px solid blue",
    display: "flex",
    justifyContent:"center",
    flexWrap:"Wrap"
  }

  const one = {
    name:"RED",
    color:"red",
    hasCode:"#C90B0B"

  };


  return (
   <div style={divStyle}>
     <Card prop={one}/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
   </div>
  )
}

export default App
