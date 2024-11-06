import {Post} from "@/components/Post";

export default function Home() {
    const posts = [
        {postId: "1", postImageUrl: "https://picsum.photos/200", postCaption: "I love cat", postPetId: "1"},
        {postId: "2", postImageUrl: "https://picsum.photos/200", postCaption: "I love dog", postPetId: "1"},
        {postId: "3", postImageUrl: "https://picsum.photos/200", postCaption: "I love cow", postPetId: "1"},

    ]
    const pets=[
        {petId:"1", petImageUrl:"https://picsum.photos/200",petName:"Fido"}
    ]




    return (
        <>

            <h1 className={"text-3xl font-bold underline"}>Home Page</h1>
            <div className="container mx-auto">
                {posts.map(post =><Post post={post} pet={pets[0]} key={post.postId}/>)}
            </div>
        </>
    )
}