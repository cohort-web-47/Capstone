'use server'
import {Pet, PetSchema} from "@/utils/models/pet/pet.model";


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