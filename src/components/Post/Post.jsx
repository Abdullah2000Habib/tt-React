import React from 'react';
import { useParams } from 'react-router-dom';
import { PostData } from '../../Mock/PostData';
import "./style.css";
const Post = () => {
    const {id} = useParams();
    let myPost = PostData.find((item)=>item.id === Number(id));
    return (
        <div className='PostWrapper'>
            <span className='postId'>id:{myPost.id}</span>
            <span className='postTitle'>Title:{myPost.title}</span>
            <span className='postBody'>body:{myPost.description}</span>
        </div>
    );
}

export default Post;
