import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
class Header extends React.Component {
    render(){
        return <>
        <header>
            <h1 className="logo">Logo</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/todos">Todos</Link>
                </li>
            </ul>
        </header>
        </>
    }
}
export default Header ;