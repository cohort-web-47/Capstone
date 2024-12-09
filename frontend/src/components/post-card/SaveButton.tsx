'use client'
import {IoIosSave} from "react-icons/io";
import {Pet} from "@/utils/models/pet/pet.model";
import {Like} from "@/utils/models/like/like.model";
import {Profile} from "@/utils/models/profile/profile.model";
import {Post} from "@/utils/models/post/post.model";


type Props = {
    savePostId: string,
    saveProfileId: string,

}


export function SaveButton(props: Props) {
const {savePostId, saveProfileId} = props;
    const save = {savePostId: savePostId, saveProfileId: saveProfileId, saveDatetime: null}
    const userSaved = save.find(save => like.likePetId === currentPet.petId);

    const [isSaved, setIsSaved] = useState<boolean>(userSaved !== undefined);
    const handleClick =   async () => {

        console.log(save);
    }
    return (
        <IoIosSave onClick={handleClick} />
    )
}