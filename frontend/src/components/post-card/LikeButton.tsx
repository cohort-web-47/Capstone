'use client'

import {getCurrentPet} from "@/app/profile-dropdown/switch-pet.action";
import {fetchPostLike} from "@/utils/models/like/like.action";
import {AiOutlineLike} from "react-icons/ai"
import {Pet} from "@/utils/models/pet/pet.model";
type Props = {
    currentPet: Pet,
    postId: string,
}

export function LikeButton(props: Props) {
    const {postId, currentPet} = props;
    return (
        <>
            <AiOutlineLike
                onClick={async () =>{
                    // get current pet
                    // create like object
                    // execute preformCreateLike function from like.action.ts


                    const like = {likePetId: currentPet.petId, likePostId: postId, likeDatetime: null}
                    const status = await fetchPostLike(like)
                    console.log(status)
                }}/>
        </>
    )
}