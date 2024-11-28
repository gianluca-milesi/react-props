import PostCard from "../components/PostCard/PostCard"
import posts from "../data/posts.js"

function Main() {
    return (
        <>
            <main>
                <div className="container">
                    <div className="row">
                        {posts.map((post) => (
                            <div key={post.id} className="col-6">
                                <PostCard title={post.title} content={post.content} />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main