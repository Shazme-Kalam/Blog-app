import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';
import "./add.css";
import { RiArrowGoBackLine } from "react-icons/ri";

const Add = () => {

    const blogs = {
        title: "",
        description: "",
        author: "",
    }


    const [blog, setBlog] = useState(blogs);
    const navigate = useNavigate();


    const inputHandler = (e) =>{
        const {title, value} = e.target;
        setBlog({ ...blog, [title]:value});
        console.log(blog);
    }

    const submitForm = async(event) => {
        event.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:5000/api/create', blog);
            console.log(response);
            toast.success('Blog Added Successfully.', { position: 'top-center' });
            navigate('/');
        } catch (error) {
            console.log(error);
            toast.error('An error occurred. Please try again.', { position: 'top-center' });
        };
    };

    return (
        <div className='addBlog'>
              <Link to="/" style={{ color: 'green', fontSize: '24px' }}> 
            <RiArrowGoBackLine />
        </Link>
            <h3>Add new blog</h3>
            <form className='addBlogForm' onSubmit={submitForm}>
                <div className='inputGroup'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' onChange={inputHandler} id='title' title='title' autoComplete='off' placeholder='Title' />
                </div>

                <div className='inputGroup'>
                    <label htmlFor='description'>Description</label>
                    <input type='text' onChange={inputHandler} id='description' title='description' autoComplete='off' placeholder='Description' />
                </div>

                <div className='inputGroup'>
                    <label htmlFor='author'>Author</label>
                    <input type='author' onChange={inputHandler} id='author' title='author' autoComplete='off' placeholder='author' />
                </div>

              

                <div className='inputGroup'>
                    <button type='submit'>Add Blog</button>
                </div>
            </form>

        </div>
    )
}

export default Add;