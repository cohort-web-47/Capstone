'use server'
import {Pet, PetSchema} from "@/utils/models/pet/pet.model";
import {Status} from "@/utils/interfaces/Status";


export async function fetchPetById(petId:string): Promise<Pet> {
const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/pet/${petId}`,{
    method: "get",
    headers: {
        'Content-Type': 'application/json'
    }
}).then((response) => {
    if(!response.ok) {
        throw new Error('Network response was not ok')
    }else {
        return response.json()
    }
})
return PetSchema.parse(data)}

export async function preformCreatePet(pet:Pet): Promise<Status> {
    return fetch(`${process.env.PUBLIC_API_URL}/apis/pet`, {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response.json()

    }).catch((error) => {
        console.error(error)
        throw error

    })
}














