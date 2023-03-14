import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
const UserDetail = () => {

    //First
    const {id} = useParams()

    //Second step
    const [post, setPost] = useState([])


    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((response) => response.json())
      // .then(data => console.log(data))
      .then((data) => setPost(data))
    }, []);
  
    // console.log(post);


    return (
        <>
           <div className="container mx-auto">
            <div className=" border p-5 rounded-xl"> 
                <Link to="/">Home</Link>
                <h1>User Detail {id} </h1>
                <h2>Title : {post.title}</h2>
                <p>{post.body}</p>
            </div>
           
           </div>
        </>
    )
}

export default UserDetail;