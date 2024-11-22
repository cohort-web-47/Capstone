import { Router } from 'express'
import { petController } from './pet.controller'
import { getPetByPetIdController } from "./pet.controller"


const basePath = '/apis/pet'


const router = Router()


router.route('/').post(petController)
router.route('/:petId').get(getPetByPetIdController)


export const petRoute = { basePath, router }