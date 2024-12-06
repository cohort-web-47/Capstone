import { FaRegComment } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { IoIosSave } from "react-icons/io";
import {fetchPetById} from "@/utils/models/pet/pet.action";
import {Post} from "@/utils/models/post/post.model";
import React from "react";
import {HR} from "flowbite-react";


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


                <img className={"rounded-full w-12 h-12 mx-4"} src={pet.petImageUrl} alt="profile picture"/>
                <div className="w-3/4 h-auto">
                    <p>{pet.petName}</p>
                    <p>{post.postCaption}</p>
                    <img src={post.postImageUrl} alt="postpicture" className="w-full h-auto"/>
                    <div className="flex justify-between bg-navbar">
                        <FaRegComment/>
                        <AiOutlineLike/>
                        <IoIosSave/>
                    </div>
                </div>
            </div>
            <div>
                <HR className="border-2 border-[#D1BBA0] ml-8"/>
            </div>
        </>
    )
}