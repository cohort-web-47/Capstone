'use server'
import {Pet, PetSchema} from "@/utils/models/pet/pet.model";
import {Status} from "@/utils/interfaces/Status";
import {getSession} from "@/utils/session.utils";
import {setHeaders} from "@/utils/set-headers.utils";
import {switchPet} from "@/app/profile-dropdown/switch-pet.action";

export async function fetchPetById(petId:string): Promise<Pet> {
const {data} = await fetch(`${process.env.REST_API_URL}/apis/pet/${petId}`,{
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
const requestBody: any = {...pet}
    // get access to the session and include the JWT token
    // update pet object with the correct pet profileId and set petId to null

    const session = await getSession()


    if(session!=undefined) {
        requestBody.petProfileId = session.profile.profileId
        requestBody.petId = null
    }
    const headers = await setHeaders()



    const response = await fetch(`${process.env.PUBLIC_API_URL}/apis/pet`, {
        method: "post",
        credentials:'include',
        headers,

        body: JSON.stringify(requestBody)
    }).then((response) => {


        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response.json()



    }).catch((error) => {
        console.error(error)
        throw error

    })
    if (response.status===200){
        requestBody.petId = response.data
        await switchPet(requestBody)
    }
    return response
}

export async function fetchPetsByProfileID(petProfileID: string): Promise<Pet[]> {
    const headers = await setHeaders()
    const {data} = await fetch(`${process.env.REST_API_URL}/apis/pet/petProfileId/${petProfileID}`, {
        method: "GET",
        headers
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok')

        }
        return response.json()
    }).catch((error) => {
        console.error(error)
        return[]
    })
    return PetSchema.array().parse(data)
}



export async function fetchPetsByFollowersController(uuid:string): Promise<Pet[]>{
            const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/pet/followers/${uuid}`,{
            method: "get",
            headers: {
            'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok')
            } else {
                return response.json()
            }

        })
        return PetSchema.array().parse(data)
}

export async function fetchPetsByFolloweeController(uuid:string): Promise<Pet[]>{
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/pet/followee/${uuid}`,{
        method: "get",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok')
        } else {
            return response.json()
        }

    })
    return PetSchema.array().parse(data)
}


