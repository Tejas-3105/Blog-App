import BlogList from './BlogList';
import useFetch from './useFetch';

// npx json-server --watch data/db.json --port 8000

const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs'); // Destrcuturing the data, isPending and error from the useFetch hook

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}
// Renders when first loaded and then when the state changes

export default Home;