import {z} from 'zod'
import {FollowSchema} from "./follow.validator";
import {sql} from "../../utils/database.utils";

export type Follow = z.infer<typeof FollowSchema>

export async function insertFollow(follow: Follow): Promise<string> {

    // deconstruct the follow object
    const {followerPetId, followeePetId} = follow

    // insert the follow into the follow table
    await sql`INSERT INTO follow (follower_pet_id, followee_pet_id)
              VALUES (${followerPetId}, ${followeePetId})`

    // return a message to the user indicating success
    return 'Follow successfully posted'
}