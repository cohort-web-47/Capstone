import {z} from "zod";

export const ProfileSchema = z.object({
    profileId: z.string({
        required_error: 'profileId is required',
        invalid_type_error: 'Please provide a valid profileId'
    }).uuid({ message: 'please provide a valid profileId' }),

    profileUsername: z.string()
        .trim()
        .min(1, { message: 'please provide a valid profile name (min 1 characters)' })
        .max(32, { message: 'please provide a valid profile name (max 32 characters)' }),

    profileEmail: z.string()
        .email('profileEmail must be a valid email address')
        .max(128, 'profileEmail cannot exceed 128 characters'),

})





export type Profile = z.infer<typeof ProfileSchema>