import { Router } from 'express'
import {deleteLikeController, postLikeController, toggleLikeController} from "./like.controller";
import {isLoggedInController} from "../../utils/controllers/isloggedin.controller";


const basePath = '/apis/like';
const router = Router();

router.route ('/').post(postLikeController)
router.route('/likePostId/:likePostId').delete(deleteLikeController)
    //.get(getLikesByLikeThreadIdController)
router.route('/toggle').post(isLoggedInController, toggleLikeController)




export const likeRoute = {basePath, router}
