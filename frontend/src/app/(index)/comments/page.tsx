import Searchbar from "@/components/Searchbar";
import CommentsPage from "@/app/(index)/comments/CommentsPage";


export default function () {
    let med = {width: 'w-1/3', position: 'left-1/3'};
    return (

        <>
 <Searchbar med={med}/>
<CommentsPage/>

        </>


    )
}