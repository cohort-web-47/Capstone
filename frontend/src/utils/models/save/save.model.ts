import {z} from 'zod'


export const SaveSchema = z.object({
    saveProfileId: z.string({required_error: 'please provide a valid saveProfileId'}).uuid({message: 'please provide a valid uuid for saveProfileId'}),
    savePostId: z.string({required_error: 'please provide a valid savePostId or null'}).uuid({message: 'please provide a valid uuid for savePostId'}).nullable(),
    saveDatetime: z.coerce.date({required_error: 'please provide a valid saveDatetime or null'}).nullable(),
})

export type Save = z.infer<typeof SaveSchema>