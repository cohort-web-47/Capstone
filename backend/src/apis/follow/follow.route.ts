import { Router } from 'express';
import {
    deleteFollowController,
    getFollowsByFolloweePetIdController,
    getFollowsByFollowerPetIdController, getPostsByFolloweePetIdController,
    postFollowController, toggleFollowController
} from "./follow.controller";
import {isLoggedInController} from "../../utils/controllers/isloggedin.controller";
import {toggleLikeController} from "../like/like.controller";

const basePath = '/apis/follow'

const router = Router();

router.route('/').post(postFollowController)
router.route('/followerPetId/:followerPetId').get(getFollowsByFollowerPetIdController)
                                                    .delete(deleteFollowController)
router.route('/followeePetId/:followeePetId').get(getFollowsByFolloweePetIdController)

router.route('/post/:petId')
    .get(getPostsByFolloweePetIdController)


router.route('/toggle').post(isLoggedInController, toggleFollowController)

export const followRoute = {basePath, router}
