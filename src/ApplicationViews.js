import React from "react"
import { Route } from "react-router-dom"
import { DogProvider } from "./dogs/DogDataProvider"
import DogList from "./dogs/DogList"
import { OwnerProvider } from "./owners/OwnerProvider"
import OwnerList from "./owners/OwnerList"
import { WalkerProvider } from "./walkers/WalkerProvider"
import WalkerList from "./walkers/WalkerList"
import DogForm from "./dogs/DogForm"


export default () => {
  return (
    <>
    <DogProvider>
      <OwnerProvider>
      <Route exact path="/"
          render={props => <DogList {...props} />}
          />
       <Route path="/dogs/add"
          render={props => <DogForm {...props} />}
          />
          </OwnerProvider>
    </DogProvider>
    <OwnerProvider>
      <Route path = "/owners">
        <OwnerList />
      </Route>
    </OwnerProvider>
    <WalkerProvider>
      <Route path = "/walkers">
        <WalkerList />
      </Route>
    </WalkerProvider>
  
    </>
  )
}