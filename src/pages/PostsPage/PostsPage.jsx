import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PostData } from '../../Mock/PostData';
import "./style.css";

class PostsPage extends Component {
    render() {
        return (
            <>
                <ul className='postsPageWrapper'>
                    {PostData.map((post) =>{
                        return(
                        <li key={post.description}>
                            <Link to={`/posts/${post.id}`}>{post.title}</Link>
                        </li>) 
                    })}
                </ul>
            </>
        );
    }
}

export default PostsPage;
