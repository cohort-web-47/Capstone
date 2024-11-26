import {CommentSchema} from "./comment.validator";
import {sql} from "../../utils/database.utils";
import {z} from "zod";

export type Comment = z.infer<typeof CommentSchema>

export async function insertComment(comment: Comment): Promise<string> {
    const {commentId, commentPetId, commentPostId, commentCaption, commentDatetime} = comment

    await sql`INSERT INTO comment (comment_id, comment_pet_id, comment_post_id, comment_caption, comment_datetime) VALUES (gen_random_uuid(), ${commentPetId}, ${commentPostId}, ${commentCaption}, now())`

    return 'Comment successfully posted.'
}

export async function selectCommentByCommentId (commentId: string): Promise<Comment | null> {
    const rowlist = <Comment[]>await sql `SELECT comment_id, comment_pet_id, comment_post_id, comment_caption, comment_datetime
    FROM comment
    WHERE comment_id = ${commentId}`
    const result = CommentSchema.array().max(1).parse(rowlist)
    return result.length === 0 ? null : result[0]

}

export async function selectCommentsByCommentPostId (commentPostId: string): Promise<Comment[] | null> {
    const rowlist = <Comment[]>await sql`SELECT comment_id, comment_pet_id, comment_post_id, comment_caption, comment_datetime
                                         FROM comment
                                         WHERE comment_post_id = ${commentPostId}`
    return CommentSchema.array().parse(rowlist)
}

export async function selectCommentsByCommentPetId (commentPetId: string): Promise<Comment[] | null> {
    const rowlist = <Comment[]>await sql`SELECT comment_id, comment_pet_id, comment_post_id, comment_caption, comment_datetime
                                         FROM comment
                                         WHERE comment_pet_id = ${commentPetId}`
    return CommentSchema.array().parse(rowlist)
}