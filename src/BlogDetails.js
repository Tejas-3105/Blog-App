import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import {useHistory} from 'react-router-dom'

const BlogDetails = () => {
const { id } = useParams();
const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
const history = useHistory();

const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
    })
    .then(() => {
        history.push('/')
    })
}

    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <br></br>
                    <h4><b>Written by { blog.author }</b></h4>
                    <div>
                        <br></br>
                        { blog.body }
                    </div>
                    <div align="center">
                    <button id="delete-blog" onClick={handleClick}>Delete</button>
                    </div>
                </article>
            )}
        </div>
     );
}

export default BlogDetails;