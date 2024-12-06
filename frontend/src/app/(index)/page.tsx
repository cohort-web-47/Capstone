import {PostCard} from "@/components/PostCard";
import {fetchAllPosts} from "@/utils/models/post/post.action";





export default async function Home() {


const posts = await fetchAllPosts();
    return (
        <>


            <h1 className={"text-3xl font-bold underline"}>Home Page</h1>
            <div className="container mx-auto">
                {posts.map(post => <PostCard post={post} key={post.postId}/>)}
            </div>
        </>
    )
}
