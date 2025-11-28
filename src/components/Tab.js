import React, { useState } from 'react'

const Tab = ({ tab }) => {
  const [contentName, setContentName] = useState(tab[0].contents)

  function handleClick(contents) {
    setContentName(contents)
  }

  return (
    <div>
      {tab.map((item, index) => (
        <div key={index} onClick={() => handleClick(item.contents)}>
          <button>{item.titles}</button>
        </div>
      ))}

      <p>{contentName}</p>
    </div>
  )
}

export default Tab