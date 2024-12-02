import { FaRegComment } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { IoIosSave } from "react-icons/io";
import {fetchPetById} from "@/utils/models/pet/pet.action";
import {Post} from "@/utils/models/post/post.model";
type PostProps = {
    post:Post
}

export async function PostCard(props: PostProps) {
    const {post} = props;
    console.log(post.postPetId)
const pet = await fetchPetById(post.postPetId)
    return (
        <>

            <div className="flex p-4">
            <img className={"rounded-full w-6 h-6 mx-4"} src={pet.petImageUrl} alt="profile picture"/>
                <div>
                    <p>{pet.petName}</p>
                    <p>{post.postCaption}</p>
                    <img src={post.postImageUrl} alt="postpicture"/>
                    <div className="flex justify-between bg-navbar">
                        <FaRegComment/>
                        <AiOutlineLike/>
                        <IoIosSave/>
                    </div>
                </div>
            </div>
        </>
    )
}