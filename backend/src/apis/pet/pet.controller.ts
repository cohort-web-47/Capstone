import {Request, Response} from 'express';
import {Status} from '../../utils/interfaces/Status'
import {PetSchema} from "./pet.validator";
import {zodErrorResponse} from "../../utils/response.utils";
import {PublicProfile} from "../profile/profile.model";
import {PrivateProfile} from "../profile/profile.model";
import {
    insertPet,
    Pet,
    getPetByPetProfileId,
    selectAllPets,
    selectPetsByPetBreed,
    selectPetsByPetSize,
    selectPetsByPetType,
    selectPetsByPetName,
    selectPetsByPetPersonality,
    updatePet,
    selectPetByPetId,
    deletePetByPetId, selectPetByFollowerPetId, selectPetByFolloweePetId
} from "./pet.model";
import {z} from "zod";
import session from "express-session";

export async function postPetController(request: Request, response: Response): Promise<Response | undefined> {
    try {

        const validationResult = PetSchema.safeParse(request.body);


        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const {petId, petBreed, petImageUrl, petName, petType, petPersonality, petSize} =validationResult.data

        const profile: PublicProfile = request.session.profile as PublicProfile

        const petProfileId: string = profile.profileId as string

        const pet: Pet = {
            petId: null,
            petProfileId,
            petBreed,
            petType,
            petImageUrl,
            petName,
            petPersonality,
            petSize
        }

        const result = await insertPet(pet)

        const status: Status = {status: 200, message: 'successfully created pet', data: result.petId}
        return response.json(status)
    } catch (error) {
        console.log(error)
        return response.json({status: 500, message: 'Error creating PetModel. Try again.', data: null})
    }
}

export async function getPetByPetIdController(request: Request, response: Response): Promise<Response<Status>> {
   try {
       const validationResult = z.string().uuid({message: 'Please provide a valid PetModel Id'}).safeParse(request.params.petId)

       if (!validationResult.success) {
           return zodErrorResponse(response, validationResult.error)
       }

       const petId = validationResult.data

       const data = await selectPetByPetId(petId)

       return response.json({status: 200, message: null, data})

   } catch (error) {
       return response.json ({
           status: 500,
           message: '',
           data: []
       })
   }
}

export async function getPetByPetProfileIdController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string().uuid({message: 'Please provide a valid PetModel Profile Id'}).safeParse(request.params.petProfileId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const petProfileId = validationResult.data

        const data = await getPetByPetProfileId(petProfileId)

        return response.json({status: 200, message: null, data})

    } catch (error) {
        return response.json ({
            status: 500,
            message: '',
            data: []
        })
    } }


export async function getAllPetsController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const data = await selectAllPets()

        const status: Status = {status: 200, message: null, data}
        return response.json(status)
    } catch (error) {
        console.error(error)
        return response.json ({
            status: 500,
            message: 'Error getting Pets. Try again',
            data: []
        })
    }
}

export async function getPetByPetBreedController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string(({message: 'Please provide a valid PetModel Breed'})).safeParse(request.params.petBreed)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const petBreed = validationResult.data

        const data = await selectPetsByPetBreed(petBreed)

        return response.json({status: 200, message: null, data})

    } catch (error) {
        return response.json ({
            status: 500,
            message: '',
            data: []
        })
    } }

export async function getPetByPetSizeController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string(({message: 'Please provide a valid PetModel Breed'})).safeParse(request.params.petSize)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const petSize = validationResult.data

        const data = await selectPetsByPetSize(petSize)

        return response.json({status: 200, message: null, data})

    } catch (error) {
        return response.json ({
            status: 500,
            message: '',
            data: []
        })
    } }

export async function getPetByPetTypeController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string(({message: 'Please provide a valid PetModel Type'})).safeParse(request.params.petType)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const petType = validationResult.data

        const data = await selectPetsByPetType(petType)

        return response.json({status: 200, message: null, data})

    } catch (error) {
        return response.json ({
            status: 500,
            message: '',
            data: []
        })
    } }

export async function getPetByPetNameController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string(({message: 'Please provide a valid PetModel Name'})).safeParse(request.params.petName)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const petName = validationResult.data

        const data = await selectPetsByPetName(petName)

        return response.json({status: 200, message: null, data})

    } catch (error) {
        return response.json ({
            status: 500,
            message: '',
            data: []
        })
    } }

export async function getPetByPetPersonalityController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string(({message: 'Please provide a valid PetModel Personality'})).safeParse(request.params.petPersonality)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const petPersonality = validationResult.data

        const data = await selectPetsByPetPersonality(petPersonality)

        return response.json({status: 200, message: null, data})

    } catch (error) {
        return response.json ({
            status: 500,
            message: '',
            data: []
        })
    } }

export async function updatePetController(request: Request, response: Response): Promise<Response | undefined> {
    try {
        const validationResult = PetSchema.safeParse(request.body);
        console.log(validationResult);

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)

        }


        const petProfileFromSession = request.session?.profile
        const petProfileIdFromSession = petProfileFromSession?.profileId

        const {petProfileId} = validationResult.data

        if (petProfileIdFromSession !== petProfileId) {
            return response.json({status: 400, message: "You cannot update a pet that is not yours", data: null})
        }

        const {petBreed, petImageUrl, petName, petPersonality, petSize, petType, petId} = validationResult.data

        // @ts-ignore
        const pet: Pet | null = await selectPetByPetId(petId)

        if (pet === null) {
            return response.json({status: 400, message: "PetModel Does Not Exist", data: null})
        }


        pet.petBreed = petBreed
        pet.petImageUrl = petImageUrl
        pet.petName = petName
        pet.petPersonality = petPersonality
        pet.petSize = petSize
        pet.petType = petType

        await updatePet(pet)

        return response.json({ status: 200, message: "PetModel Successfully Updated", data: null })

    } catch (error: unknown) {
        return response.json ({status: 500, message: "internal server error", data: null})
    }
}


export async function deletePetController(request: Request, response: Response): Promise<Response | undefined> {
    try {
        const validationResult = z.string().uuid({message: 'Please provide a valid PetID'}).safeParse(request.params.petId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }


        const profileFromSession = request.session?.profile
        const profileIdFromSession = profileFromSession?.profileId

        const petId = validationResult.data

        const pet = await selectPetByPetId(petId)

        if (profileIdFromSession !== pet?.petProfileId) {
            return response.json({status: 400, message: "You cannot update a pet that is not yours", data: null})
        }

        const result = await deletePetByPetId(petId)

        return response.json({status: 200, message: 'You Successfully Deleted a PetModel', data: null})

    } catch (error) {
        return response.json ({
            status: 500,
            message: 'Internal Server Error',
            data: []
        })

    }
}

export async function getPetsByFollowersController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string().uuid({message: 'Please provide a valid PetModel Id'}).safeParse(request.params.petFollowerId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const petFollowerId = validationResult.data

        const data = await selectPetByFollowerPetId(petFollowerId)

        return response.json({status: 200, message: null, data})

    } catch (error) {
        console.log(error)
        return response.json ({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getPetsByFolloweeController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string().uuid({message: 'Please provide a valid PetModel Id'}).safeParse(request.params.petFolloweeId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const petFolloweeId = validationResult.data

        const data = await selectPetByFolloweePetId(petFolloweeId)

        return response.json({status: 200, message: null, data})

    } catch (error) {
        console.log(error)
        return response.json ({
            status: 500,
            message: '',
            data: []
        })
    }
}


















