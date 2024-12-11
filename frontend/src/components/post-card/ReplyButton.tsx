'use client'

import {useRouter} from "next/navigation";
import {FaRegComment} from "react-icons/fa6";


type Props = {
    postId: string;
}
export function ReplyButton (props: Props) {
    const router = useRouter();
    const { postId } = props;

    return (
        <>
            <FaRegComment onClick = {() => router.push(`/comments/${postId}`)} />




        </>

    )
}