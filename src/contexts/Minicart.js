import React, { createContext, useState } from 'react';

export const MinicartContext = createContext();

export default function MinicartProvider(props) {
  const [items, setItems] = useState(0);

  return (
    <MinicartContext.Provider value={{
      items,
      setItems
    }}>
      {props.children}
    </MinicartContext.Provider>
  )
}