import {z} from 'zod';
import {PetSchema} from "./pet.validator";
import {sql} from "../../utils/database.utils";
import {Post} from "../post/post.model";
import {PostSchema} from "../post/post.validator";

export type Pet = z.infer<typeof PetSchema>

export async function insertPet(pet: Pet): Promise<string> {
    const {petProfileId, petBreed, petImageUrl, petName, petPersonality, petSize, petType} = pet

    await sql`INSERT INTO pet (pet_id, pet_profile_id, pet_breed, pet_image_url, pet_name, pet_personality, pet_size, pet_type)
VALUES (gen_random_uuid(), ${petProfileId}, ${petBreed}, ${petImageUrl}, ${petName}, ${petPersonality}, ${petSize}, ${petType})`
    return 'PetModel Profile Successfully Created'
}




    export async function getPetByPetProfileId(PetProfileId: string): Promise<Pet[] | null> {
        const rowList = <Pet[]>await sql
            `SELECT pet_id,
         pet_profile_id,
         pet_breed,
         pet_image_url,
         pet_name,
         pet_personality,
         pet_size,
         pet_type
         FROM pet
         WHERE pet_profile_id = ${PetProfileId}`

        return PetSchema.array().parse(rowList)
}



export async function selectAllPets(): Promise<Pet[]> {
        const rowList = <Pet[]>await sql
            `SELECT pet_id,
                    pet_profile_id,
                    pet_breed,
                    pet_image_url,
                    pet_name,
                    pet_personality,
                    pet_size,
                    pet_type
                FROM pet`

        return PetSchema.array().parse(rowList)
    }

export async function selectPetsByPetBreed(petBreed: string): Promise<Pet[]> {
    const petBreedWithWildcards = `%${petBreed}%`
    const rowList = <Pet[]>await sql
        `SELECT pet_id,
                    pet_profile_id,
                    pet_breed,
                    pet_image_url,
                    pet_name,
                    pet_personality,
                    pet_size,
                    pet_type
                FROM pet
                WHERE pet_breed LIKE ${petBreedWithWildcards}
                GROUP BY pet_id`

    return PetSchema.array().parse(rowList)
}

export async function selectPetsByPetSize(petSize: string): Promise<Pet[]> {
    const petSizeWithWildcards = `%${petSize}%`
    const rowList = <Pet[]>await sql
        `SELECT pet_id,
                    pet_profile_id,
                    pet_breed,
                    pet_image_url,
                    pet_name,
                    pet_personality,
                    pet_size,
                    pet_type
                FROM pet
                WHERE pet_size LIKE ${petSizeWithWildcards}
                GROUP BY pet_id`

    return PetSchema.array().parse(rowList)
}

export async function selectPetsByPetType (petType: string): Promise<Pet[]> {
    const petTypeWithWildcards = `%${petType}%`
    const rowList = <Pet[]>await sql
        `SELECT pet_id,
                    pet_profile_id,
                    pet_breed,
                    pet_image_url,
                    pet_name,
                    pet_personality,
                    pet_size,
                    pet_type
                FROM pet
                WHERE pet_type LIKE ${petTypeWithWildcards}
                GROUP BY pet_id`

    return PetSchema.array().parse(rowList)
}

export async function selectPetsByPetName (petName: string): Promise<Pet[]> {
    const petNameWithWildcards = `%${petName}%`
    const rowList = <Pet[]>await sql
        `SELECT pet_id,
                    pet_profile_id,
                    pet_breed,
                    pet_image_url,
                    pet_name,
                    pet_personality,
                    pet_size,
                    pet_type
                FROM pet
                WHERE pet_name LIKE ${petNameWithWildcards}
                GROUP BY pet_id`

    return PetSchema.array().parse(rowList)
}

export async function selectPetsByPetPersonality (petPersonality: string): Promise<Pet[]> {
    const petPersonalityWithWildcards = `%${petPersonality}%`
    const rowList = <Pet[]>await sql
        `SELECT pet_id,
                    pet_profile_id,
                    pet_breed,
                    pet_image_url,
                    pet_name,
                    pet_personality,
                    pet_size,
                    pet_type
                FROM pet
                WHERE pet_personality LIKE ${petPersonalityWithWildcards}
                GROUP BY pet_id`

    return PetSchema.array().parse(rowList)
}

export async function updatePet (pet: Pet): Promise<String> {
    console.log("PetModel Inside", pet)
    const {petBreed, petImageUrl, petName, petPersonality, petSize, petType, petId} = pet
    await sql `UPDATE pet SET pet_breed = ${petBreed}, pet_image_url = ${petImageUrl}, pet_name = ${petName}, pet_personality = ${petPersonality}, pet_size = ${petSize}, pet_type = ${petType}
WHERE pet_id =${petId}`

    return 'PetModel Successfully Updated'
}

export async function selectPetByPetId (petId: string): Promise<Pet | null> {
    const rowList = <Pet[]>await sql
        `SELECT pet_id,
                    pet_profile_id,
                    pet_breed,
                    pet_image_url,
                    pet_name,
                    pet_personality,
                    pet_size,
                    pet_type
                FROM pet
                WHERE pet_id = ${petId}`

    const result = PetSchema.array().max(1).parse(rowList)

    return result.length === 0 ? null : result[0]

}

export async function deletePetByPetId(petId: string): Promise<String> {
    await sql `DELETE 
               FROM pet
               WHERE pet_id = ${petId}`

    return 'PetModel Successfully Deleted'
}


export async function selectPetByFollowerPetId(followerPetId: string): Promise<Pet[]> {

    const rowList = <Pet[]>await sql`SELECT followee_pet.pet_id, followee_pet.pet_profile_id, followee_pet.pet_breed, followee_pet.pet_size, followee_pet. pet_type, followee_pet.pet_image_url, followee_pet.pet_personality, followee_pet.pet_name

                                     FROM follow
                                              INNER JOIN pet AS follower_pet ON follow.follower_pet_id = follower_pet.pet_id
                                              INNER JOIN pet AS followee_pet ON follow.followee_pet_id = followee_pet.pet_id
                                     WHERE follower_pet.pet_id =${followerPetId}`
    return PetSchema.array().parse(rowList)
}



