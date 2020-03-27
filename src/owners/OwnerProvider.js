import React, { useState, useEffect } from "react"

export const OwnerContext = React.createContext()


export const OwnerProvider = (props) => {
  const [owners, setOwners] = useState([])

  const getOwners = () => {
    return fetch ("api/owner")
        .then(res => res.json())
        .then(setOwners)
  }

  const addOwners = owners => {
    return fetch("http://localhost:53536/api/owner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(owners)
    })
      .then(getOwners)
  }

  useEffect(() => {
    getOwners()
  }, [])

  useEffect(() => {
    console.log("***Owner APP STATE CHANGE")
  }, [owners])

  return (
    <OwnerContext.Provider value={{
      owners, addOwners
    }}>
      {props.children}
    </OwnerContext.Provider>
  )
}