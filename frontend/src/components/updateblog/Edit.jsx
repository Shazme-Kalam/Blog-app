import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from "axios";

const Edit = () => {
    const initialBlogState = {
        title: "",
        description: "",
        author: ""
    };

    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(initialBlogState);

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setBlog({ ...blog, [name]: value });
    };

    useEffect(() => {
        axios.get(`http://localhost:5000/api/getone/${id}`)
            .then((response) => {
                setBlog(response.data); 
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:5000/api/update/${id}`, blog);
            console.log(response);
            toast.success("Blogs Updated Successfully", { position: "top-center" });
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error("Error updating blog", { position: "top-center" });
        }
    };

    return (
        <div>
            <div className='addBlog'>
                <Link to={"/"}>Back</Link>
                <h3>Update blog</h3>
                <form className='addBlogForm' onSubmit={submitForm}>
                    <div className='inputGroup'>
                        <label htmlFor='title'>Title</label>
                        <input type='text' value={blog.title} onChange={inputChangeHandler} id='title' name='title' autoComplete='off' placeholder='Title' />
                    </div>

                    <div className='inputGroup'>
                        <label htmlFor='description'>Description</label>
                        <input type='text' value={blog.description} onChange={inputChangeHandler} id='description' name='description' autoComplete='off' placeholder='Description' />
                    </div>

                    <div className='inputGroup'>
                        <label htmlFor='author'>Author</label>
                        <input type='text' value={blog.author} onChange={inputChangeHandler} id='author' name='author' autoComplete='off' placeholder='author' />
                    </div>

                    <div className='inputGroup'>
                        <button type='submit'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Edit;
