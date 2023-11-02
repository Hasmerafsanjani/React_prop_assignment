import { useState } from 'react'
import Card from './components/Card'

function App() {

  const divStyle={
    marginTop:"75px",
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
  const two = {
    name:"BLACK",
    color:"black",
    hasCode:"#000000"
  };
  const three = {
    name:"PINK",
    color:"pink",
    hasCode:"#FF6663"
  };
  const four = {
    name:"GRAY",
    color:"gray",
    hasCode:"#333333"
  };
  const five = {
    name:"GREEN",
    color:"green",
    hasCode:"#38BB14"
  };
  const six = {
    name:"ORANGE",
    color:"orange",
    hasCode:"#FF8000"
  };
  const seven = {
    name:"YELLOW",
    color:"yellow",
    hasCode:"#FFF500"
  };
  const eight = {
    name:"LIGHT GRAY",
    color:"lightGray",
    hasCode:"#CCCCCC"
  };
  const nine = {
    name:"PURPLE",
    color:"purple",
    hasCode:"#7E41A2"
  };
  const ten = {
    name:"BROWN",
    color:"brown",
    hasCode:"#C14911"
  };


  return (
   <div style={divStyle}>
     <Card prop={one}/>
     <Card prop={two}/>
     <Card prop={three}/>
     <Card prop={four}/>
     <Card prop={five}/>
     <Card prop={six}/>
     <Card prop={seven}/>
     <Card prop={eight}/>
     <Card prop={nine}/>
     <Card prop={ten}/>
   
   </div>
  )
}

export default App
