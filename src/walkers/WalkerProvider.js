import React, { useState, useEffect } from "react"

export const WalkerContext = React.createContext()


export const WalkerProvider = (props) => {
  const [walkers, setWalkers] = useState([])

  const getWalkers = () => {
    return fetch ("api/Walker")
        .then(res => res.json())
        .then(setWalkers)
  }

  const addWalkers = walkers => {
    return fetch("http://localhost:53536/api/Walker", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(walkers)
    })
      .then(getWalkers)
  }

  useEffect(() => {
    getWalkers()
  }, [])

  useEffect(() => {
    console.log("***Walker APP STATE CHANGE")
  }, [walkers])

  return (
    <WalkerContext.Provider value={{
      walkers, addWalkers
    }}>
      {props.children}
    </WalkerContext.Provider>
  )
}