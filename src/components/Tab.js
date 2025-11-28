import React, { useState } from 'react'

const Tab = ({tab}) => {
  const [contentName, setContentName] = useState("")
  console.log(tab);

  function handleClick(contents){
    setContentName(contents)
  }
  return (
    <div>
      {tab.map((item,index) => {
        return (<ul key={index}>
          <li onClick={()=>handleClick(item.contents)}>{item.titles}</li>
        </ul>)})}
      
      <p>{contentName}</p>
    </div>
  )
}

export default Tab