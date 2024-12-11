import {string} from "postcss-selector-parser";
import {Pet} from "@/utils/models/pet/pet.model";



type PetProps = {
    pet:Pet

}
export default function PetTab(props: PetProps) {
    const {pet} = props;

    return (
        <>
            <div
                className="w-2/3 py-2 pl-6 bg-themeProfile rounded-xl flex items-center gap-12 md:gap-1 md:flex-wrap lg:gap-12 xl-gap-12 cursor-pointer hover:bg-white">
                <img className={"rounded-full w-12 h-12  mr-6 cursor-pointer"} src={pet.petImageUrl} alt="profile pic"/>

                <p className="justify-center">{pet.petName}</p>
            </div>
        </>
    )
}