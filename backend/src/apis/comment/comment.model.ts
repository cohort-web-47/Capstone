import {CommentSchema} from "./comment.validator";
import {sql} from "../../utils/database.utils";
import {z} from "zod";

export type Comment = z.infer<typeof CommentSchema>

export async function insertComment(comment: Comment): Promise<string> {
    const {commentId, commentPetId, commentPostId, commentCaption, commentDatetime} = comment

    await sql`INSERT INTO comment (comment_id, comment_pet_id, comment_post_id, comment_caption, comment_datetime) VALUES (gen_random_uuid(), ${commentPetId}, ${commentPostId}, ${commentCaption}, now())`

    return 'Comment successfully posted.'


}