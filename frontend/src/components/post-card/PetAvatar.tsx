'use client'
import {useRouter} from "next/navigation";
import {Pet} from "@/utils/models/pet/pet.model";

export function PetAvatar(props: {pet: Pet}) {
    const router = useRouter();
    const pet = props.pet;
    return (
        <>
            <img className={"rounded-full w-12 h-12 mx-4"} src={pet.petImageUrl ?? '/default-pet.png'} onClick={()=>{
                router.push(`/pet-profile/${pet.petId}`);
            }} alt="profile picture"/>
        </>
    )
}