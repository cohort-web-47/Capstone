import {z} from 'zod'
import {FollowSchema} from "./follow.validator";
import {sql} from "../../utils/database.utils";
import {LikeSchema} from "../like/like.validator";
import {Like} from "../like/like.model";
import {PostSchema} from "../post/post.validator";
import {Post} from "../post/post.model";

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

export async function selectFollowsByFollowerPetId(followerPetId: string): Promise<Follow[]> {

    // selects a list of follows for the pet profiles that the profile is following
    const rowList = <Follow[]>await sql`SELECT follower_pet_id, followee_pet_id
                                        FROM follow
                                        WHERE follower_pet_id = ${followerPetId}`

    // parse the result into an array of follows and return it
    return FollowSchema.array().parse(rowList)
}

export async function selectFollowsByFolloweePetId(followeePetId: string): Promise<Follow[]> {

    // selects a list of follows for the pet profiles that the profile is following
    const rowList = <Follow[]>await sql`SELECT followee_pet_id, follower_pet_id
                                        FROM follow
                                        WHERE followee_pet_id = ${followeePetId}`

    // parse the result into an array of follows and return it
    return FollowSchema.array().parse(rowList)
}

export async function deleteFollow(follow: Follow): Promise<string> {

    // deconstruct the follow object
    const {followerPetId, followeePetId} = follow

    // delete the follow from the follow table
    await sql`DELETE
              FROM follow
              WHERE follower_pet_id = ${followerPetId}
                AND followee_pet_id = ${followeePetId}`


    // return a message to the user indicating success
    return 'Follow successfully deleted'
}

export async function selectFollowByFollowId(follow: Follow): Promise<Follow | null> {

    // deconstruct the follow object
    const {followerPetId, followeePetId} = follow

    // select the follow from the follow table by followId
    const rowList = <Follow[]>await sql`SELECT follower_pet_id, followee_pet_id
                                        FROM follow
                                        WHERE follower_pet_id = ${followerPetId}
                                          AND followee_pet_id = ${followeePetId}`

    // parse the result into an array of follows
    const result = FollowSchema.array().max(1).parse(rowList)

    // return the follow that was selected
    return result.length === 0 ? null : result[0]
}

export async function selectPostsByFolloweePetId(followeePetId: string): Promise<Post[]> {


    const rowList = <Post[]>await sql`SELECT post_id, post_pet_id, post_caption, post_image_url, post_datetime 
                                    FROM post
                                    INNER JOIN follow
                                    ON post.post_pet_id = follow.followee_pet_id
                                    WHERE followee_pet_id = ${followeePetId}`
    return PostSchema.array().parse(rowList)

}