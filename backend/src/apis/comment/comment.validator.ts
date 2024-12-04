import {z} from 'zod'

export const CommentSchema = z.object({
    commentId: z.string({required_error: 'please provide a valid commentId or null'}).uuid({message: 'please provide a valid uuid for commentId'}).nullable(),
    commentPetId: z.string({required_error: 'please provide a valid commentPetId'}).uuid({message: 'please provide a valid uuid for commentPetId'}),
    commentPostId: z.string({required_error: 'please provide a valid commentPostId or null'}).uuid({message: 'please provide a valid uuid for commentPostId'}).nullable(),
    commentCaption:
        z.string().max(3200, {message: 'please provide a valid commentCaption'}),
    commentDatetime:
        z.date({required_error: 'please provide a valid commentDatetime or null'}).nullable(),
   })
