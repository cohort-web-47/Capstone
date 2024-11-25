import { Router } from 'express'
import { getPetByPetIdController, getPetByPetProfileIdController, petController } from "./pet.controller"


const basePath = '/apis/pet'


const router = Router()


router.route('/').post(petController)
router.route('/:petId').get(getPetByPetIdController)
router.route('/petProfileId/:petProfileId').get(getPetByPetProfileIdController)


export const petRoute = { basePath, router }