import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setBlogs(data);
            })
    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {/* {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            } */}

            {blogs.map((blog) => (
                <div key={blog.id}>
                    <img src={blog.cover} alt={blog.title} />
                    <h2>{blog.title}</h2>
                    <p>By {blog.author}</p>
                    {/* <p>Reading Time: {blog.reading_time} min</p> */}
                    <p>{blog.hashtags.join(' ')}</p>
                </div>
            ))}
        </div>
    );
};

export default Blogs;