import React, { useEffect, useState } from 'react';
import "./blog.css";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from "axios";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/getall");
                setBlogs(response.data);
            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);
    const deleteBlog = async (blogId) => {
        try {
            await axios.delete(`http://localhost:8000/api/delete/${blogId}`);
            setBlogs((prevUsers) => prevUsers.filter((blog) => blog._id !== blogId));
            toast.success("Blogs Removed Successfully", { position: "top-center" });
        } catch (error) {
            console.error("There was an error deleting the blog:", error);
            toast.error("Failed to delete blog", { position: "top-center" });
        }
    };
    return (
        <div className='blogTable'>

            <Link to={"/add"} className='addButton'>Add Blogs</Link>
            <table border={1} cellPadding={10} cellSpacing={2}>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Blog's Title</th>
                        <th>Blog's Description</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogs.length > 0 ? (
                            blogs.map((blog, index) => {
                                return (
                                    <tr key={blog._id}>
                                        <td>{index + 1}</td>
                                        <td>{blog.title} </td>
                                        <td>{blog.description}</td>
                                        <td>{blog.author}</td>
                                        <td className='actionButton'>
                                            <button onClick={() => deleteBlog(blog._id)}><i className="fa-solid fa-trash"></i></button>
                                            <Link to={`/edit/` + blog._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                                        </td>
                                    </tr>

                                )
                            })
                        ) : (
                            <div className='noData'>No blogs found. </div>
                        )
                    }

                </tbody>
            </table>

        </div>

    )
}

export default Blogs;