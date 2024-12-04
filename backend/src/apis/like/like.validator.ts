import {z} from 'zod'

export const LikeSchema = z.object({
    likePetId: z.string({required_error: 'please provide a valid likePetId'}).uuid({message: 'please provide a valid uuid for likePetId'}),
    likePostId: z.string({required_error: 'please provide a valid likePostId'}).uuid({message: 'please provide a valid uuid for likePostId'}),
    likeDatetime: z.date({required_error: 'please provide a valid likeDatetime or null'}).nullable(),
})