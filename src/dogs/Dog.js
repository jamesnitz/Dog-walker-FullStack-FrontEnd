import React from "react"
import "./Dog.css"

export default ({ dog  }) => (
  <section className="dog">
        <h2 className="dog__name">{dog.name}</h2>
        <h3>is a {dog.breed}</h3>
        <h3>Notes: {dog.notes}</h3>
        <h4>Owned By:</h4>  
        <h5>{dog.owner.name} who lives at {dog.owner.address} and can be reached at {dog.owner.phone}</h5>
  </section>  
)