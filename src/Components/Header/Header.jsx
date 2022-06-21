import React, { useState } from 'react';
import "./Header.css";
import {Link} from "react-router-dom";

const Header = (props) => {
    return ( 
        <div className="header">
            <ul>
                <li>
                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                        <b>CHALLENGE 2</b>
                    </Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Header;