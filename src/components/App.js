
import React from "react";
import './../styles/App.css';
import Tab from "./Tab";

const App = () => {

  const tab = [
    {
      name:"Tab 1",
     content:"This is the content for Tab 1"
    },
    {
      name:"Tab 2",
     content:"This is the content for Tab 2"
    },
    {
      name:"Tab 3",
     content:"This is the content for Tab 3"
    },
]
  return (
    <div> 
      <Tab tab={tab}/>
    </div>
   
  )
}

export default App
