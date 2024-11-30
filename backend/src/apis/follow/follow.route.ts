import { Router } from 'express';
import {
    postFollowController
} from "./follow.controller";

const basePath = '/apis/follow'

const router = Router();

router.route('/').post(postFollowController)


export const followRoute = {basePath, router}