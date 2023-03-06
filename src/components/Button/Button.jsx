import React from "react";
import "./style.css";
class Button extends React.Component { 

    state = {
        mode : 'dark',
    }

    changeHandelr = ()=> {
        this.setState((prev)=>{return{...prev, mode : prev.mode === 'dark'?'light' :'dark'}});
    };

    render(){
        return (
        <>
            <button className="themeBtn" onClick={this.changeHandelr}>{this.state.mode}</button>
        </>
        )
    }
}

export default Button ; 
