import { Router } from 'express'
import {
    getPetByPetIdController,
    getPetByPetProfileIdController,
    getAllPetsController,
    getPetByPetBreedController,
    getPetByPetSizeController,
    getPetByPetTypeController,
    getPetByPetNameController,
    getPetByPetPersonalityController,
    postPetController,
    updatePetController,
    deletePetController,
    getPetsByFollowersController
} from "./pet.controller"
import {getPetByPetProfileId, updatePet} from "./pet.model";
import {isLoggedInController} from "../../utils/controllers/isloggedin.controller";


const basePath = '/apis/pet'


const router = Router()


router.route('/').post(isLoggedInController, postPetController)
router.route('/:petId').get(getPetByPetIdController)
router.route('/petProfileId/:petProfileId').get(getPetByPetProfileIdController)
router.route('/').get(getAllPetsController)
router.route('/petBreed/:petBreed').get(getPetByPetBreedController)
router.route('/petSize/:petSize').get(getPetByPetSizeController)
router.route('/petType/:petType').get(getPetByPetTypeController)
router.route('/petName/:petName').get(getPetByPetNameController)
router.route('/petPersonality/:petPersonality').get(getPetByPetPersonalityController)
router.route('/:petId').put(updatePetController)
router.route('/:petId').delete(deletePetController)
router.route('/followers/:petFollowerId').get(getPetsByFollowersController)



export const petRoute = { basePath, router }