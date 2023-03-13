import React from "react";

import { useRoutes } from "react-router-dom";
import AboutPage from "../pages/AboutPage/AboutPage";
import HomePage from "../pages/HomePage/HomePage";
import PostsPage from "../pages/PostsPage/PostsPage";
import TodosPage from "../pages/TodosPage/TodosPage";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Post from "./Post/Post";
import Todo from "./Todo/Todo";


const Home = () => {
    const Router = useRoutes([
        {path:"/" ,element:<HomePage/>},
        {path:"/about" ,element:<AboutPage/>},
        {path:"/posts" ,element:<PostsPage/>},
        {path:"/posts/:id" ,element:<Post/>},
        {path:"/todos" ,element:<TodosPage/>},
        {path:"/todos/:id" ,element:<Todo/>},
        {path:"/*" , element:<h1 style={{color:'red'}}>ERROR Page Not Found 404</h1>},
    ])
    return (
        <>
            <Header/>
            {Router}
            <Footer/>
        </>
    );
}

export default Home;
