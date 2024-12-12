'use client'
import {Button} from "flowbite-react";
import {fetchPostFollow} from "@/utils/models/follow/follow.action";
import {useRouter} from "next/navigation";

export function FollowButton(props:any){
    const router = useRouter();
    const {currentPetId, petId, isFollowing} = props;
    const text = isFollowing ? 'Following...' : 'Follow';
    return (
        <>
        <Button onClick={async ()=>{
            await fetchPostFollow({followeePetId: currentPetId, followerPetId: petId})
            router.refresh()
        }}>{text}</Button>
        </>
    )
}