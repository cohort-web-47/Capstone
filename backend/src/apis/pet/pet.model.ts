import {z} from 'zod';
import {PetSchema} from "./pet.validator";
import {sql} from "../../utils/database.utils";

export type Pet = z.infer<typeof PetSchema>

export async function insertPet(pet: Pet): Promise<string> {
    const {petProfileId, petBreed, petImageUrl, petName, petPersonality, petSize, petType} = pet

    await sql`INSERT INTO pet (pet_id, pet_profile_id, pet_breed, pet_image_url, pet_name, pet_personality, pet_size, pet_type)
VALUES (gen_random_uuid(), ${petProfileId}, ${petBreed}, ${petImageUrl}, ${petName}, ${petPersonality}, ${petSize}, ${petType})`
    return 'Pet Profile Successfully Created'
}

export async function getPetByPetId(PetId: string): Promise<Pet | null> {
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
         WHERE pet_id = ${PetId}`

    const result = PetSchema.array().max(1).parse(rowList)

    return result.length === 0 ? null : result[0]

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






