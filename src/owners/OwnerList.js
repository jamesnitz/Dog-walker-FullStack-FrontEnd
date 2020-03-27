import React, { useContext } from "react"
import { OwnerContext } from "./OwnerProvider"
import Owner from "./Owner"



export default (props) => {
  const { owners } = useContext(OwnerContext)
 

  return(
    <>
      <h1 className="owner__header">Here the owners</h1>
    <div className="owners">  
      {
        owners.map(owner => {
          return <Owner key={owner.id}
            owner={owner}
           />
        })
      }
    </div>
    </>
  )
}