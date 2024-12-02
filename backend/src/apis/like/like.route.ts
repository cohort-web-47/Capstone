import { Router } from 'express'
import {
    deleteLikeController, getLikesByPetIdController,
    postLikeController,
    toggleLikeController, getLikesByLikePostIdController
} from "./like.controller";
import {isLoggedInController} from "../../utils/controllers/isloggedin.controller";


const basePath = '/apis/like';
const router = Router();

router.route ('/').post(postLikeController)
router.route('/likePostId/:likePostId').delete(deleteLikeController)
router.route('/likePostId/:likePostId').get(getLikesByLikePostIdController)
router.route('/likePetId/:likePetId').get(getLikesByPetIdController)

router.route('/toggle').post(isLoggedInController, toggleLikeController)



export const likeRoute = {basePath, router}
