import React, { useState } from "react";

const Tab = ({ tab }) => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <ul>
        {tab.map((item, index) => (
          <li key={index} onClick={() => setActive(index)}>
            {item.titles}
          </li>
        ))}
      </ul>

      <p>{tab[active].contents}</p>
    </div>
  );
};

export default Tab;
