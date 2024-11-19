import {PublicProfileSchema} from "../profile/profile.model";
import {z} from "zod";
import {createZodErrorMessages} from "../../utils/zod.utils";

export const SignUpValidator = PublicProfileSchema.omit({profileId: true})
    .extend({
        profilePasswordConfirm: z.string(createZodErrorMessages('profile password confirmed'))
            .min(8, { message: 'please provide a valid password (min 8 characters)' })
            .max(32, { message: 'please provide a valid password (max 32 characters)' }),
        profilePassword: z.string(createZodErrorMessages('profile password'))
            .min(8, { message: 'please provide a valid password (min 8 characters)' })
            .max(32, { message: 'please provide a valid password (max 32 characters)' })
    })
    .refine(data => data.profilePassword === data.profilePasswordConfirm, {
        message: 'passwords do not match'
    })