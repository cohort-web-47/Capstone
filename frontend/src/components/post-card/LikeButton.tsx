'use client'

import {getCurrentPet} from "@/app/profile-dropdown/switch-pet.action";
import {fetchPostLike} from "@/utils/models/like/like.action";
import {AiOutlineLike, AiFillLike} from "react-icons/ai"
import {Pet} from "@/utils/models/pet/pet.model";
import {Like} from "@/utils/models/like/like.model";
import {useState} from "react";
type Props = {
    currentPet: Pet,
    postId: string,
    likes: Like[],
}


export function LikeButton(props: Props) {
    const {postId, currentPet, likes} = props;
    const [likeCount, setLikeCount] = useState<number>(likes.length);
    const userLiked = likes.find(like => like.likePetId === currentPet.petId);
    const [isLiked, setIsLiked] = useState<boolean>(userLiked !== undefined);
    const handleClick = async () =>{
        // get current pet
        // create like object
        // execute preformCreateLike function from like.action.ts


        const like = {likePetId: currentPet.petId, likePostId: postId, likeDatetime: null}
        const status = await fetchPostLike(like)

        if(status.message === 'Like successfully Posted') {
            setLikeCount(likeCount + 1)
            setIsLiked(true)
        } else if (status.message === 'Like successfully deleted') {
            setLikeCount(likeCount - 1)
            setIsLiked(false)
        }


    }
    return (

        <>
            <span className = {'flex justify-between'}>
                {isLiked  ?

                    <AiFillLike
                    onClick={handleClick}/> :

                    <AiOutlineLike
                        onClick={handleClick}/>
                }
            {likeCount}

            </span>
        </>
    )
}