import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const inputClicked = () => {
        const input = document.getElementById('input');
        input.setAttribute('style', 'box-shadow: none; transition: all 0.3s ease;');
    }

    const inputUnclicked = () => {
        const input = document.getElementById('input');
        input.style.boxShadow = '';  // Clear any inline styles
    }

    const textClicked = () => {
        const text = document.getElementById('text');
        text.setAttribute('style', 'box-shadow: none; transition: all 0.3s ease;');
    }

    const textUnclicked = () => {
        const text = document.getElementById('text');
        text.style.boxShadow = '';  // Clear any inline styles
    }

    const selectClicked = () => {
        const select = document.getElementById('select');
        select.setAttribute('style', 'box-shadow: none; transition: all 0.3s ease;');
    }

    const selectUnclicked = () => {
        const select = document.getElementById('select');
        select.style.boxShadow = '';  // Clear any inline styles
    }

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);
        fetch('http://localhost:8000/blogs/', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog)
        }).then(() => {
          console.log('new blog added');
          setIsPending(false);
        })
        //history.go(-1); // Go back to the previous page (-2 means go back 2 pages, etc.)
        // history.go(1); // Go forward to the next page (1 means go forward 1 page, etc.)
        history.push('/')
      }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)} // When typing into input field, the onChange event is triggered and updates the state of the title variable
                onClick={inputClicked}
                onBlur={inputUnclicked}
                id="input"/>
                <label>Blog Body:</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Write your blog!"
                onClick={textClicked}
                onBlur={textUnclicked}
                id="text"/>
                <label>Blog Author:</label>
                <select
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                onClick={selectClicked}
                onBlur={selectUnclicked}
                id="select">
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <div>
                    {!isPending && <button>Add Blog</button>}
                    {isPending && <button>Adding Blog...</button>}
                </div>
            </form>
        </div>
     );
}

export default Create;