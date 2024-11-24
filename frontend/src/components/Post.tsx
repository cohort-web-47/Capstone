import { FaRegComment } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { IoIosSave } from "react-icons/io";
import {Pet} from "@/utils/models/Pet";
import {Post as PostType} from "@/utils/models/Post";
type PostProps = {
    post:PostType
    pet:Pet
}

export function Post(props: PostProps) {
    const {post, pet} = props;
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