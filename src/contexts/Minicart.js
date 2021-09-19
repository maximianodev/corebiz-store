import React, { createContext, useEffect, useLayoutEffect, useState } from 'react';

export const MinicartContext = createContext();

let minicartInterface = {
  items: [],
  minicartOpen: false
}

export default function MinicartProvider(props) {
  const [minicartData, setMinicartData] = useState();

  
  useLayoutEffect(() => {
    let key = 'corebiz_store'
    const storageValue = localStorage.getItem(key)

    if (!storageValue) {
      setMinicartData(minicartInterface)
      localStorage.setItem(key, JSON.stringify(minicartInterface))
    } else {
      setMinicartData(JSON.parse(storageValue))
    }
  }, [])

  useEffect(() => {
    let key = 'corebiz_store'
    localStorage.setItem(key, JSON.stringify(minicartData))
  }, [minicartData])

  return (
    <MinicartContext.Provider value={{
      minicartData,
      setMinicartData
    }}>
      {props.children}
    </MinicartContext.Provider>
  )
}