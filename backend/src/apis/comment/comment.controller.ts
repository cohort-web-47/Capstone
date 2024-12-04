import {CommentSchema} from "./comment.validator";
import {zodErrorResponse} from "../../utils/response.utils";
import {PublicProfile} from "../profile/profile.model";
import {
    Comment,
    insertComment,
    selectCommentByCommentId,
    selectCommentsByCommentPetId,
    selectCommentsByCommentPostId
} from "./comment.model";
import {Request, Response} from 'express';
import {Status} from "../../utils/interfaces/Status";
import {Pet, selectPetByPetId} from "../pet/pet.model";
import {z} from "zod";

export async function postCommentController (request: Request, response: Response): Promise<Response | undefined> {
 try{
     const validationResult = CommentSchema.safeParse(request.body);
console.log(validationResult);
     if (!validationResult.success) {
         return zodErrorResponse(response, validationResult.error)
     }

     const {commentPostId, commentPetId, commentCaption} = validationResult.data

     const profile: PublicProfile = request.session.profile as PublicProfile;

     let pet = await selectPetByPetId(commentPetId)
    if (pet?.petProfileId !== profile.profileId) {
        return response.json({status: 401, message: 'You must own the pet to make a comment.', data: null})
    }

     const comment: Comment = {
         commentId: null,
         commentPetId,
         commentPostId,
         commentCaption,
         commentDatetime: null,
     }

     const result = await insertComment(comment)

     const status: Status = {status: 200, message: result, data: null}
     return response.json(status)

 }    catch (error) {
     console.error(error)
     return response.json({status: 500, message: 'Error creating Comment. Try again.', data: null})
 }
}

export async function getCommentByCommentIdController (request: Request, response: Response): Promise<Response<Status>> {
    try{
        const validationResult = z.string().uuid({message: 'Please provide a valid pet CommentId'}).safeParse(request.params.commentId)
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
            const commentId = validationResult.data
            const data = await selectCommentByCommentId(commentId)
            return response.json({status: 200, message: null, data})

        } catch (error) {
            return response.json ({status: 500, message: '', data: []})
    }
}



export async function getCommentsByCommentPetIdController (request: Request, response: Response): Promise<Response<Status>> {
    try{
        const validationResult = z.string().uuid({message: 'Please provide a valid pet CommentPetId'}).safeParse(request.params.commentPetId)
        console.log(validationResult)
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const commentPetId = validationResult.data
        const data = await selectCommentsByCommentPetId(commentPetId)
        return response.json({status: 200, message: null, data})

    } catch (error) {
        return response.json ({status: 500, message: '', data: []})
    }
}

export async function getCommentsByCommentPostIdController (request: Request, response: Response): Promise<Response<Status>> {
    try{
        const validationResult = z.string().uuid({message: 'Please provide a valid pet CommentPostId'}).safeParse(request.params.commentPostId)
        console.log(validationResult)
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const commentPostId = validationResult.data
        const data = await selectCommentsByCommentPostId(commentPostId)
        return response.json({status: 200, message: null, data})

    } catch (error) {
        return response.json ({status: 500, message: '', data: []})
    }
}