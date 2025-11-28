import React, { useState } from 'react'

const Tab = ({tab}) => {
  const [contentName, setContentName] = useState("")

  function handleClick(content){
    setContentName(content)
  }
  return (
    <div>
      {tab.map((item,index) => {
        return (<ul key={index}>
          <li onClick={()=>handleClick(item.content)}>{item.name}</li>
        </ul>)})}
      
      <p>{contentName}</p>
    </div>
  )
}

export default Tab