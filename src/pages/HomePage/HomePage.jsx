import React from "react";
import Card from "../../components/Card/Card";
import Counter from "../../components/Counter/Counter";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./style.css";
class HomePage extends React.Component {

    render(){
        return(
            <>
                <Header/>
                <div className="homePageWrapper">
                    <h2 className="pageTitle">Home Page</h2>
                    <section className="cardsSection">
                    <Card title='Image One' body='dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley' imgSrc='https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg'/>
                    <Card title='Image Two' body='dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley' imgSrc='https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg'/>
                    <Card title='Image Three' body='dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley' imgSrc='https://media.istockphoto.com/id/474275680/photo/city-life-downtown-toronto-vibrant-cityscape-skyline.jpg?s=2048x2048&w=is&k=20&c=fPuvd-XC16kf2FrUCdiIoQgw9g5JyX18Z71Wvx7DDfU='/>
                    </section>
                    <section className="counterSection">
                        <Counter/>
                    </section>
                </div>
                <Footer/>
            </>
        )
    }
}

export default HomePage ;