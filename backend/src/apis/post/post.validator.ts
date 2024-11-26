import {z} from 'zod'

export const PostSchema = z.object({
    postId: z.string({required_error: 'Please provide a valid postId or null'}).uuid({message: 'please provide a uuid for postId'}).nullable(),
    postPetId: z.string({required_error: 'please provide a valid postPetId'}).uuid({message: 'please provide a valid uuid for postPetId'}),
    postCaption: z.string().max(3200, {message: 'please provide a valid postCaption'}).nullable(),
    postImageUrl: z.string({required_error: 'please provide a valid postImageUrl or null'}).trim().url({message: 'please provide a valid URL for postImageUrl'}).max(255, {message: 'please provide a valid postImageUrl (max 255 characters)'}).nullable(),
    postDatetime: z.date({required_error: 'please provide a valid postDatetime or null'}).nullable(),

})