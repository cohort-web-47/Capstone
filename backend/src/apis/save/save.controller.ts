import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {z} from "zod";
import {zodErrorResponse} from "../../utils/response.utils";
import {SaveSchema} from "./save.validator";
import {insertSave, Save} from "./save.model";
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

