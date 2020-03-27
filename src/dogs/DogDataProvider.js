import React, { useState, useEffect } from "react"

export const DogContext = React.createContext()


export const DogProvider = (props) => {
  const [dogs, setDogs] = useState([])

  const getDogs = () => {
    return fetch ("/api/dog")
        .then(res => res.json())
        .then(setDogs)
  }

  const addDog = dog => {
    debugger
    return fetch("/api/dog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dog)
    })
      .then(getDogs)
  }

  useEffect(() => {
    getDogs()
  }, [])

  useEffect(() => {
    console.log("***Dog APP STATE CHANGE")
  }, [dogs])

  return (
    <DogContext.Provider value={{
      dogs, addDog
    }}>
      {props.children}
    </DogContext.Provider>
  )
}