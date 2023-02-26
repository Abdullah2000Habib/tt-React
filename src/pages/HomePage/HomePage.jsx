import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./style.css";
class HomePage extends React.Component {

    render(){
        return(
            <>
                <Header/>
                <div className="homePageWrapper">
                    <h2>Home Page</h2>
                </div>
                <Footer/>
            </>
        )
    }
}

export default HomePage ;