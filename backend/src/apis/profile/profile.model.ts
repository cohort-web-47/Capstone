import {z} from "zod"
import {createZodErrorMessages} from "../../utils/zod.utils";
import {sql} from "../../utils/database.utils";


export const PrivateProfileSchema =z.object({
    profileId: z.string(createZodErrorMessages('profileId')).uuid
    ('profileId must be uuid'),
    profileHash: z.string(createZodErrorMessages('profileHash')).length(97,'profileHash must be at least 97 characters'),
    profileEmail: z.string(createZodErrorMessages('profileEmail')).email('profileEmail must be a valid email address').max(128, 'profileEmail cannot exceed 128 characters'),
    profileUsername: z.string(createZodErrorMessages('profileUsername')).max(32, 'profileUsername cannot exceed 32 characters').min(1,'profileUsername cannot less than 1 characters'),
    profileActivationToken: z.string({
        required_error: 'profileActivationToken is required',
        invalid_type_error: 'please provide a valid profileActivationToken'
    })
        .length(32, { message: 'profile activation token is to long' })
        .nullable(),

})

export const PublicProfileSchema = PrivateProfileSchema.omit({profileHash: true, profileActivationToken: true})

export type PrivateProfile = z.infer<typeof PrivateProfileSchema>
export type PublicProfile = z.infer<typeof PublicProfileSchema>

export async function insertPrivateProfile(profile: PrivateProfile) : Promise<String> {
    const {profileHash, profileEmail, profileUsername, profileActivationToken} = profile
    await sql`INSERT INTO profile(profile_id, profile_hash, profile_email, profile_username, profile_activation_token) VALUES (gen_random_uuid(), ${profileHash}, ${profileEmail}, ${profileUsername}, ${profileActivationToken})`
    return 'Profile Successfully Created'
}
/**
 * updates a profile in the profile table
 * @param profile
 * @returns {Promise<string>} 'Profile successfully updated'
 */
export async function updateProfile(profile: PrivateProfile) : Promise<String> {
    const {profileHash, profileEmail, profileId, profileUsername, profileActivationToken} = profile
    await sql`UPDATE profile SET profile_hash = ${profileHash}, profile_email = ${profileEmail},profile_id = ${profileId}, profile_username = ${profileUsername}, profile_activation_token = ${profileActivationToken} WHERE profile_id =${profileId}`
    return 'Profile successfully updated'

}

export async function selectPrivateProfileByProfileActivationToken(profileActivationToken: string) : Promise<PrivateProfile|null> {
    const rowList =await sql`SELECT profile_id, profile_activation_token, profile_email, profile_hash, profile_username FROM profile WHERE profile_activation_token = ${profileActivationToken}`
    const result = PrivateProfileSchema.array().max(1).parse(rowList)
    return result?.length === 1 ? result[0] : null
}




