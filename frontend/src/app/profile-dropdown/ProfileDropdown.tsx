"use client";

import {Avatar, Dropdown, DropdownItem} from "flowbite-react";
import {Profile} from "@/utils/models/profile/profile.model";
import {Pet} from "@/utils/models/pet/pet.model";
import {redirect, useRouter} from "next/navigation";

type Props = {
    profile: Profile;
    pets: Pet[];
    currentPet: Pet;
    switchPet: (arg0:Pet) => void
    redirectHome?: boolean
}
export function ProfileDropdown(props: Props) {
    const {pets, profile, currentPet, switchPet, redirectHome} = props;
    const router = useRouter();
    return (
        <Dropdown
            label={<>
                <Avatar alt={currentPet.petName} img={currentPet.petImageUrl?? '/default-pet.png'}  rounded/>
                <span className = 'pl-2'>{currentPet.petName} </span></>}


            arrowIcon={false}
            inline
        >
            <Dropdown.Header>
                <span className="block text-sm">{profile.profileUsername}</span>
                <span className="block truncate text-sm font-medium">{profile.profileEmail}</span>
            </Dropdown.Header>
            {pets.map(pet =><DropdownItem onClick={async ()=>{
                await switchPet(pet)
                if (redirectHome){
                    router.push('/')
                }

            }
            } key={pet.petId}>{pet.petName}</DropdownItem>)}
            <Dropdown.Divider/>
            <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
    );
}




