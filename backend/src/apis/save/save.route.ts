import { Router } from 'express';
import {postSaveController} from "./save.controller";

const basePath = '/apis/save'
const router = Router()

router.route('/').post(postSaveController)

export const saveRoute ={basePath, router};
