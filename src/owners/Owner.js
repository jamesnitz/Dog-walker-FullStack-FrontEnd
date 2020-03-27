import React from "react"
import "./Owner.css"

export default ({ owner  }) => (
  <section className="owner">
        <h2 className="owner__name">{owner.name}</h2>
  </section>  
)