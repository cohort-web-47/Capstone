import { Router } from 'express';
import {getPostsBySaveProfileIdController, postSaveController} from "./save.controller";
import {isLoggedInController} from "../../utils/controllers/isloggedin.controller";

const basePath = '/apis/save'

const router = Router()

router.route('/').post(isLoggedInController, postSaveController)
router.route('/saveProfileId/:saveProfileId').get(isLoggedInController, getPostsBySaveProfileIdController)


export const saveRoute ={basePath, router};
