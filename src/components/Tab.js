import React, { useState } from 'react'

const Tab = ({tab}) => {
  const [tabName, setTabName] = useState("Tab 1")

  function handleClick(name){
    setTabName(name)
  }
  return (
    <div>
      {tab.map((item,index) => {
        return (<ul key={index}>
          <li onClick={()=>handleClick(item.name)}>{item.name}</li>
        </ul>)})}
      
      <p>This is content from {tabName}</p>
    </div>
  )
}

export default Tab