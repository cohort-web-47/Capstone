'use server'
import {fetchPetById} from "@/utils/models/pet/pet.action";
import {Comment} from "@/utils/models/comment/comment.model";
type Props = {

    comment: Comment
}

export async function CommentCard(props: Props) {
    const {comment} = props
    const pet = await fetchPetById(comment.commentPetId)
    return (
        <div className={"container flex mx-auto  border-2 border-black w-full py-4 self-center mb-10 pl-4"}>
            <img className={"rounded-full"} width={200} src={pet.petImageUrl} alt={"Cat"}/>
            <div className="flex-col pl-6">
                <p> {pet.petName}</p>
                <p>{comment.commentCaption}</p>
            </div>
        </div>
    )

}