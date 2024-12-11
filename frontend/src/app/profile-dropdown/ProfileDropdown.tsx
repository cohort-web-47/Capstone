"use client";

import {Avatar, Dropdown, DropdownItem} from "flowbite-react";
import {Profile} from "@/utils/models/profile/profile.model";
import {Pet} from "@/utils/models/pet/pet.model";
import {redirect} from "next/navigation";

type Props = {
    profile: Profile;
    pets: Pet[];
    currentPet: Pet;
    switchPet: (arg0:Pet) => void

}
export function ProfileDropdown(props: Props) {
    const {pets, profile, currentPet, switchPet} = props;
    return (
        <Dropdown
            label={<Avatar alt={currentPet.petName} img={currentPet.petImageUrl} rounded/>}

            arrowIcon={false}
            inline
        >
            <Dropdown.Header>
                <span className="block text-sm">{profile.profileUsername}</span>
                <span className="block truncate text-sm font-medium">{profile.profileEmail}</span>
            </Dropdown.Header>
            {pets.map(pet =><DropdownItem onClick={async ()=>{
                await switchPet(pet)

            }
            } key={pet.petId}>{pet.petName}</DropdownItem>)}
            <Dropdown.Divider/>
            <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
    );
}




