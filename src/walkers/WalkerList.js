import React, { useContext } from "react"
import { WalkerContext } from "./WalkerProvider"
import Walker from "./Walker"



export default (props) => {
  const { walkers } = useContext(WalkerContext)
 

  return(
    <>
      <h1 className="walker__header">Here the Walkers</h1>
      <div className="walkers">  
      {
        walkers.map(walker => {
          return <Walker key={walker.id}
            walker={walker}
           />
        })
      }
    </div>
    </>
  )
}