import React, { Component } from 'react';
import "./style.css";
class Counter extends Component {
    state ={
        counterValue : 0 ,
        step:1,
    }
    increaseHandler = ()=>{
        this.setState((prev)=>({...prev ,counterValue : prev.counterValue + prev.step}))
    }
    decreesHandler = ()=>{
        this.setState((prev)=>prev.counterValue > 0?({...prev ,counterValue : prev.counterValue - prev.step}):'')
    }
    stepHandler = (e)=>{
        Number(e.target.value) >=0?this.setState((prev)=>{
            return {...prev , step : Number(e.target.value)}
        }):this.setState((prev)=>{
            return {...prev , step :1}
        })
    }

    render() {
        return (
            <div className='counterWrapper'>
                <button onClick={this.decreesHandler} className='decreesBtn'>-</button>
                <span className='counterValue'>{this.state.counterValue}</span>
                <button onClick={this.increaseHandler} className='increaseBtn'>+</button>
                <input onChange={this.stepHandler} className='counterInput'/>
            </div>
        );
    }
}

export default Counter;
