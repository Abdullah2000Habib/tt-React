import React from "react";

import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage/AboutPage";
import HomePage from "../pages/HomePage/HomePage";
import PostsPage from "../pages/PostsPage/PostsPage";
import TodosPage from "../pages/TodosPage/TodosPage";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Post from "./Post/Post";
import Todo from "./Todo/Todo";
class Home extends React.Component {
    render(){
        return(
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/about" element={<AboutPage/>}></Route>
                <Route path="/posts" element={<PostsPage/>}></Route>
                <Route path="/posts/:id" element={<Post/>}></Route>
                <Route path="/todos" element={<TodosPage/>}></Route>
                <Route path="/todos/:id" element={<Todo/>}></Route>
            </Routes>
            <Footer/>
        </>)
    }
}


export default Home;