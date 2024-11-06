import { FaRegComment } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { IoIosSave } from "react-icons/io";
type PostProps = {
    post:{
        postId:string,
        postImageUrl:string,
        postCaption:string,
        postPetId:string,
    },
    pet:{
        petId:string,
        petImageUrl:string,
        petName:string,
    }
}

export function Post(props: PostProps) {
    const {post, pet} = props;
    return (
        <>
        <h1>Post</h1>
            <div className="flex">
            <img className={"rounded-full w-6 h-6"} src={pet.petImageUrl} alt="profile picture"/>
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