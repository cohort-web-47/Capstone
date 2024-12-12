'use server'
import {z} from "zod";

export const FollowSchema = z.object({
    followerPetId: z.string({required_error: 'please provide a valid followerPetId'}).uuid({message: 'please provide a valid uuid for followingPetId'}),
    followeePetId: z.string({required_error: 'please provide a valid followeePetId'}).uuid({message: 'please provide a valid uuid for followeePetId'})
})
export type Follow=z.infer<typeof FollowSchema>
