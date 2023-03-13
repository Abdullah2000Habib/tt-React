import React from 'react';
import { useParams } from 'react-router-dom';
import { PostData } from '../../Mock/PostData';
import "./style.css";
const Post = () => {
    const {id} = useParams();
    let myPost = PostData.find((item)=>item.id === Number(id));
    return (
        myPost?(
        <div className='PostWrapper'>
            <span className='postId'>id:{myPost?.id}</span>
            <span className='postTitle'>Title:{myPost?.title}</span>
            <span className='postBody'>body:{myPost?.description}</span>
        </div>):<h1 style={{color:'red'}}>ERROR Page Not Found 404</h1>

    );
}

export default Post;
