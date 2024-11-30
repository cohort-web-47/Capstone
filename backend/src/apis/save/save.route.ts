import { Router } from 'express';
import {getPostsBySaveProfileIdController, postSaveController, toggleSaveController} from "./save.controller";
import {isLoggedInController} from "../../utils/controllers/isloggedin.controller";

const basePath = '/apis/save'

const router = Router()

router.route('/').post(isLoggedInController, postSaveController)
router.route('/saveProfileId/:saveProfileId').get(isLoggedInController, getPostsBySaveProfileIdController)
router.route('/toggle').post(isLoggedInController, toggleSaveController)

export const saveRoute ={basePath, router};
