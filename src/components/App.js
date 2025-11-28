
import React from "react";
import './../styles/App.css';
import Tab from "./Tab";

const App = () => {

  const tab = [
    {
      name:"Tab 1",
      property:"this is property of Tab 1"
    },
    {
      name:"Tab 2",
      property:"this is property of Tab 2"
    },
    {
      name:"Tab 3",
      property:"this is property of Tab 3"
    },
]
  return (
    <div> 
      <Tab tab={tab}/>
    </div>
   
  )
}

export default App
