import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {z} from "zod";
import {zodErrorResponse} from "../../utils/response.utils";
import {SaveSchema} from "./save.validator";
import {deleteSave, insertSave, Save, selectPostsBySaveProfileId, selectSaveByPrimaryKey} from "./save.model";
import {PublicProfile} from "../profile/profile.model";


export async function postSaveController(request: Request, response: Response) : Promise<Response | undefined > {
    try {
        const validationResult = SaveSchema.safeParse(request.body);
        console.log(validationResult);
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const {savePostId, saveDatetime} = validationResult.data
        const profile = request.session.profile as PublicProfile
        const saveProfileId: string = profile.profileId as string


            const save: Save = {
            saveProfileId,
            savePostId,
            saveDatetime: null
        }
        const result = await insertSave(save)

        const status: Status = {status: 200, message: result, data: null}
        return response.json(status)

    }    catch (error) {
        console.error(error)
        return response.json({status: 500, message: 'Error creating save. Try again.', data: null})
    }
}

export async function getPostsBySaveProfileIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const profile = request.session.profile as PublicProfile
        const saveProfileId: string = profile.profileId as string

       const data = await selectPostsBySaveProfileId(saveProfileId)

        return response.json({status: 200, message: null, data})
    } catch (error) {
        console.error(error)
        return response.json({
            status: 500,
            message: 'post id not found',
            data: []
        })
    }
}

export async function toggleSaveController(request: Request, response: Response): Promise<Response<Status>> {
    try {

        // validate the incoming request with the save schema
        const validationResult = SaveSchema.safeParse(request.body)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // if the validation succeeds, continue

        // deconstruct the save post id from the validation result
        const {savePostId} = validationResult.data

        // deconstruct the profile from the session
        const profile = request.session.profile

        // @ts-ignore
        // deconstruct the profile id from the profile
        const saveProfileId = profile.profileId

        // create a save object
        const save: Save = {
            saveProfileId,
            savePostId,
            saveDatetime: null
        }

        // create a status object
        const status: Status = {
            status: 200,
            message: '',
            data: null
        }

        // select the save by save id to determine if the save should be inserted or deleted
        const selectedSave: Save | null = await selectSaveByPrimaryKey(save)

        // if the save is null, insert the save into the save table
        if (selectedSave === null) {
            status.message = await insertSave(save)
            // if the save is not null, delete the save from the save table
        } else {
            status.message = await deleteSave(save)
        }

        // return the status to the user
        return response.json(status)

        // if an error occurs, return the error to the user
    } catch (error: any) {
        return (response.json({status: 500, data: null, message: error.message}))
    }
}