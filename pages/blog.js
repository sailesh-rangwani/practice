import React, { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'


const Blog = () => {
  const [blog, setblogs] = useState([]);
  useEffect(()=>{
    console.log("useffect is running");
    fetch('http://localhost:3000/api/hello').then((a)=>{
      return a.json();
    })
    .then((parsed)=>{
      setblogs(parsed)
    })
  }, [])

  return (
    <>  
      {blog.map((blogitems) => (
        <div key={blogitems.title} className={styles.blogitem}>
          <h3>{blogitems.title}</h3>
          <h5>By:{blogitems.author}</h5>
          <p>{blogitems.content}</p>
        </div>
      ))}
    </>
  );
}
export default Blog