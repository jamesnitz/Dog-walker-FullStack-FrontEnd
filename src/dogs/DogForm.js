import React, { useContext, useRef } from "react"
import { DogContext } from "./DogDataProvider"
import { OwnerContext } from "../owners/OwnerProvider"

export default props => {
  const { addDog } = useContext(DogContext)
  const {owners} = useContext(OwnerContext)
  const dogNameRef  = useRef("")
  const dogBreedRef  = useRef("")
  const dogOwnerRef  = useRef(0)
  const dogNoteRef = useRef("")

  const ConstructNewDog = () => {
    const ownerIdValue = parseInt(dogOwnerRef.current.value)
      addDog({
        name: dogNameRef.current.value,
        ownerId: ownerIdValue,
        breed: dogBreedRef.current.value,
        notes: dogNoteRef.current.value    
      }).then(props.history.push("/"))
  } 
    
  return (
    <>
  <div className="form-group">
        <label htmlFor="amount">Name that dog!</label>
        <input
          type="text"
          id="name"
          ref={dogNameRef}
          required
          autoFocus/>
    </div>   

  <div className="form-group">
        <label htmlFor="amount">what's their breed?</label>
        <input
          type="text"
          id="name"
          ref={dogBreedRef}
          required
          autoFocus/>
    </div>   

    <div className="form-group">
        <label htmlFor="product">Who own this dog</label>
        <select
          defaultValue=""
          name="product"
          ref={dogOwnerRef}
          id="product">
          <option value="0">Choose someone</option>
          {owners.map(e => (
            <option key={e.id} value={e.id}>
              {e.name}
            </option>
          ))}
        </select>

          <div className="form-group">
        <label htmlFor="amount">Any additional Notes you want to add?</label>
        <textarea
          type="text"
          id="name"
          ref={dogNoteRef}
          required
          autoFocus/>
    </div>   

          <button
      type="submit"
      onClick={
        evt => {
          evt.preventDefault();
          ConstructNewDog();
          
        }
      }
      className="btn btn-primary">Add Dog</button>


      </div>
        
            
   </>
  )
}