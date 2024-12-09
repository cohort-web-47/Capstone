'use server'
import { FaRegComment } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { IoIosSave } from "react-icons/io";
import {fetchPetById} from "@/utils/models/pet/pet.action";
import {Post} from "@/utils/models/post/post.model";
import React from "react";
import {HR} from "flowbite-react";
import {getCurrentPet} from "@/app/profile-dropdown/switch-pet.action";
import {fetchPostLike, getLikesByPostId} from "@/utils/models/like/like.action";
import {LikeButton} from "@/components/post-card/LikeButton";
import {SaveButton} from "@/components/post-card/SaveButton";
import {getSession} from "@/utils/session.utils";
import {Profile} from "@/utils/models/profile/profile.model";
import {fetchPostBySave} from "@/utils/models/save/save.action";
import {fetchSavedPosts} from "@/utils/models/post/post.action";


type PostProps = {
    post:Post
}

export async function PostCard(props: PostProps) {
    const {post} = props;
    const session = await getSession();
    const profile = session?.profile as Profile
    const pet = await fetchPetById(post.postPetId);
    const likes = await getLikesByPostId(post.postId);

    const savedPosts = await fetchSavedPosts(post.postId);
   const savedPostsDictionary = savedPosts.reduce((acc: any,  currentValue: any) => {
       acc[currentValue.postId as string] = currentValue
       return acc

   }, {})
    console.log(savedPostsDictionary);



    const currentPet = await getCurrentPet();
    return (
        <>

            <div className="flex p-4">


                <img className={"rounded-full w-12 h-12 mx-4"} src={pet.petImageUrl} alt="profile picture"/>
                <div className="w-3/4 h-auto">
                    <p>{pet.petName}</p>
                    <p>{post.postCaption}</p>
                    {post.postImageUrl && <img src={post.postImageUrl} alt="postpicture" className="w-full h-auto"/>}
                    <div className="flex justify-between bg-navbar">
                    <FaRegComment/>
                        <LikeButton postId={post.postId} currentPet={currentPet} likes={likes} />
                        <SaveButton savePostId={post.postId} saveProfileId={profile.profileId} savedPostsDictionary={savedPostsDictionary} />
                    </div>
                </div>
            </div>
            <div>
                <HR className="border-2 border-[#D1BBA0] ml-8"/>
            </div>
        </>
    )
}