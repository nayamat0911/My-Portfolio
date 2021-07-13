import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <div className="NavBar">
            <div className="Nav">
                <ul className="Nav-items">
                    <li className="Nav-item">
                        <NavLink to='/' exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="Nav-item">
                        <NavLink to='/about' exact>
                            About
                        </NavLink>
                    </li>
                    <li className="Nav-item">
                        <NavLink to='/service' exact>
                            Service
                        </NavLink>
                    </li>
                    <li className="Nav-item">
                        <NavLink to='/protfolio' exact>
                            Protfolio
                        </NavLink>
                    </li>
                    
                    <li className="Nav-item">
                        <NavLink to='/contact' exact>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
