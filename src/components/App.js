
import React from "react";
import './../styles/App.css';
import Tab from "./Tab";

const App = () => {

  const tab = [
    {
      titles:"Tab 1",
     contents:"This is the content for Tab 1"
    },
    {
      titles:"Tab 2",
     contents:"This is the content for Tab 2"
    },
    {
      titles:"Tab 3",
     contents:"This is the content for Tab 3"
    },
]
  return (
    <div> 
      <Tab tab={tab}/>
    </div>
   
  )
}

export default App
