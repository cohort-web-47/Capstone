import {LikeSchema} from "./like.validator";
import {z} from "zod";
import {sql} from "../../utils/database.utils";
import {CommentSchema} from "../comment/comment.validator";
import {Comment} from "../comment/comment.model";

export type Like = z.infer<typeof LikeSchema>
export async function insertLike(like:Like): Promise<string>{

    const {likePetId, likePostId} = like

    await sql `INSERT INTO "like" (like_pet_id, like_post_id, like_datetime)
    VALUES (${likePetId}, ${likePostId}, NOW())`

    return 'Like successfully Posted'

}

export async function deleteLike(like: Like): Promise<string> {
    const {likePetId, likePostId} = like
    await sql `DELETE FROM "like"
                WHERE like_pet_id = ${likePetId}
                AND like_post_id = ${likePostId}`
    return 'Like successfully deleted'
}

export async function selectLikeByLikeId(like: Like): Promise<Like | null> {

    // deconstruct the like object
    const {likePetId, likePostId} = like

    // select the like from the like table by likeId
    const rowList = <Like[]>await sql`SELECT like_pet_id, like_post_id, like_datetime
                                      FROM "like"
                                      WHERE like_pet_id = ${likePetId}
                                        AND like_post_id = ${likePostId}`

    // parse the result into an array of likes
    const result = LikeSchema.array().max(1).parse(rowList)

    // return the like that was selected
    return result.length === 0 ? null : result[0]
}



export async function selectLikesByLikePostId(likePostId: string): Promise<Like[]>  {

    // select the likes from the like table by likePostId
    const rowList = <Like[]>await sql`SELECT like_pet_id, like_post_id, like_datetime
                                      FROM "like"
                                      WHERE like_post_id = ${likePostId}`

    // parse the result into an array of likes and return it
    return LikeSchema.array().parse(rowList)
}

export async function selectLikesByLikePetId(likePetId: string): Promise<Like[] | null> {

    const rowList = <Like[]>await sql`SELECT like_pet_id, like_post_id, like_datetime
                                      FROM "like"
                                      WHERE like_pet_id = ${likePetId}`
    return LikeSchema.array().parse(rowList)
}

// export async function selectLikeByCommentId(commentId: string): Promise<Like | null> {}


