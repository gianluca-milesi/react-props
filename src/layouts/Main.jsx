import PostCard from "../components/PostCard/PostCard"
import posts from "../data/posts.js"
import Tags from "../components/Tags/Tags.jsx"

function Main() {
    return (
        <>
            <main>
                <div className="container">
                    <div className="row">
                        {posts.map((post) => (
                            <div key={post.id} className="col-6">
                                {
                                    post.published === true ?
                                        <PostCard title={post.title} image={post.image} content={post.content} tags={post.tags} />
                                        : null
                                }
                            </div>
                        ))}
                    </div>
                </div>
                <div className="container">
                    <Tags />
                </div>
            </main>
        </>
    )
}

export default Main