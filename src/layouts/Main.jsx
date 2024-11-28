import PostCard from "../components/PostCard/PostCard"

function Main() {
    return (
        <>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <PostCard />
                        </div>
                        <div className="col-6">
                            <PostCard />
                        </div>
                        <div className="col-6">
                            <PostCard />
                        </div>
                        <div className="col-6">
                            <PostCard />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main