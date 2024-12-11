'use server'
import {cookies} from "next/headers";
import {Pet, PetSchema} from "@/utils/models/pet/pet.model";
import {redirect} from "next/navigation";

export async function switchPet(pet: Pet) {

    const cookieJar = await cookies()
    const currentPetCookie = cookieJar.get('current-pet')
    if (currentPetCookie) {
        cookieJar.delete('current-pet')
        const petJson = JSON.stringify(pet)
        cookieJar.set("current-pet", petJson, {path: "/", sameSite:"strict", httpOnly: true})

    }else {
        const petJson = JSON.stringify(pet)
        cookieJar.set("current-pet", petJson, {path: "/", sameSite:"strict", httpOnly: true})
    }

}

export async function getCurrentPet() {
    const cookieJar = await cookies()
    const currentPetCookie = cookieJar.get('current-pet')
    if (!currentPetCookie){
        redirect('/create-pet-profile')
    }

    return PetSchema.parse(JSON.parse(currentPetCookie.value))

}

//check to see if current pet cookie exist
// if current pet cookie exist delete it and set a new cookie with current pet
// else set a new cookie with current pet



// check if current pet cookie exist
// if pet cookie exist return pet parsed from petJson
// else redirect to create pet page
