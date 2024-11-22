import {z} from 'zod'

export const PetSchema = z.object({
    petId: z.string({required_error:'please provide a valid petId or null'}).uuid({message: 'please provide a valid uuid for petId'}).nullable(),
    petProfileId: z.string({required_error: 'please provide a valid petProfileId'}).uuid ({message: 'please provide a valid petProfileId'}),
    petBreed: z.string().max(64, {message: 'please provide a valid petBreed'}),
    petImageUrl:z.string().max(256, {message: 'please provide a valid petImageUrl'}),
    petName:z.string().max(64, {message: 'please provide a valid petName'}),
    petPersonality: z.string().max(16, {message: 'please provide a valid petPersonality'}),
    petSize: z.string().max(16, {message: 'please provide a valid petSize'}),
    petType: z.string().max(3, {message: 'please provide a valid petType'}),
})