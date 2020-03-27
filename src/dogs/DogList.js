import React, { useContext } from "react"
import { DogContext } from "./DogDataProvider"
import Dog from "./Dog"



export default (props) => {
  const { dogs } = useContext(DogContext)
 

  return(
    <>
      <h1 className="dog__header">Here the dogs</h1>
      <button onClick={() => props.history.push("/dogs/add")}>
      add some diggity dogs
    </button>
    <div className="dogs">  
      {
        dogs.map(dog => {
          return <Dog key={dog.id}
            dog={dog}
           />
        })
      }
    </div>
    </>
  )
}