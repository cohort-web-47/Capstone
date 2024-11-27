import {LikeSchema} from "./like.validator";
import {zodErrorResponse} from "../../utils/response.utils";
import {Status} from "../../utils/interfaces/Status";
import {PublicProfile} from "../profile/profile.model";
import {selectPetByPetId} from "../pet/pet.model"
import {Request, Response} from "express";
import {deleteLike, insertLike, Like, selectLikeByLikeId} from "./like.model";


export async function postLikeController(request: Request, response: Response): Promise<Response<Status>> {
    try {

        // validate the incoming request with the like schema
        const validationResult = LikeSchema.safeParse(request.body)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // if the validation succeeds, continue

        // deconstruct the like thread id from the validation result
        const {likePostId, likePetId} = validationResult.data

        // deconstruct the profile from the session
        const profile = request.session.profile as PublicProfile
        let pet = await selectPetByPetId(likePetId)
        const likeProfileId = profile.profileId as string
        if (pet?.petProfileId !== likeProfileId) {
            return response.json({status: 401, message: 'You must own the pet to make a like.'})
        }

       // create a like object
        const like: Like = {
            likePetId,
            likePostId,
            likeDatetime: null
        }

        // create a status object
        const status: Status = {
            status: 200,
            message: '',
            data: null
        }

        // insert the like into the like table
        status.message = await insertLike(like)

        // return the status to the user
        return response.json(status)

        // if an error occurs, return the error to the user
    } catch (error: any) {
        return (response.json({status: 500, data: null, message: error.message}))
    }
}

export async function deleteLikeController(request: Request, response: Response): Promise<Response<Status>> {
    try {

        // validate the incoming request with the like schema
        const validationResult = LikeSchema.safeParse(request.body)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // if the validation succeeds, continue

        // deconstruct the like thread id from the validation result
        const {likePostId, likePetId} = validationResult.data

        // deconstruct the profile from the session
        const profile = request.session.profile as PublicProfile
        let pet = await selectPetByPetId(likePetId)
        const likeProfileId = profile.profileId as string
        if (pet?.petProfileId !== likeProfileId) {
            return response.json({status: 401, message: 'You must own the pet to delete a like.'})
        }

        // create a like object
        const like: Like = {
            likePetId,
            likePostId,
            likeDatetime: null
        }

        // create a status object
        const status: Status = {
            status: 200,
            message: '',
            data: null
        }

        // insert the like into the like table
        status.message = await deleteLike(like)

        // return the status to the user
        return response.json(status)

        // if an error occurs, return the error to the user
    } catch (error: any) {
        return (response.json({status: 500, data: null, message: error.message}))
    }
}

export async function toggleLikeController(request: Request, response: Response): Promise<Response<Status>> {
    try {

        // validate the incoming request with the like schema
        const validationResult = LikeSchema.safeParse(request.body)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // if the validation succeeds, continue

        // deconstruct the like thread id from the validation result
        const {likePostId, likePetId} = validationResult.data

        const profile = request.session.profile as PublicProfile
        let pet = await selectPetByPetId(likePetId)
        const likeProfileId = profile.profileId as string
        if (pet?.petProfileId !== likeProfileId) {
            return response.json({status: 401, message: 'You must own the pet to delete a like.'})
        }

        // create a like object
        const like: Like = {
            likePetId,
            likePostId,
            likeDatetime: null
        }

        // create a status object
        const status: Status = {
            status: 200,
            message: '',
            data: null
        }

        // select the like by like id to determine if the like should be inserted or deleted
        const selectedLike: Like | null = await selectLikeByLikeId(like)

        // if the like is null, insert the like into the like table
        if (selectedLike === null) {
            status.message = await insertLike(like)
            // if the like is not null, delete the like from the like table
        } else {
            status.message = await deleteLike(like)
        }

        // return the status to the user
        return response.json(status)

        // if an error occurs, return the error to the user
    } catch (error: any) {
        return (response.json({status: 500, data: null, message: error.message}))

    }
}