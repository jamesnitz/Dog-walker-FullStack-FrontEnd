import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export default (props) => {
    return (
        <ul className="navbar">
            <div className="navHeader">
                <h3>Dog Walkers</h3>
            </div>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Dogs</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/owners">Owners</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/walkers">Walkers</Link>
            </li>
        </ul>
    )
}