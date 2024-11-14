import {Button} from "flowbite-react";
import {InputText} from "@/app/create-post/inputtext";
import ProfileTab from "@/components/ProfileTab"
import {ProDropdown} from "@/app/create-post/dropdown";
import {customTheme} from "@/utils/theme.utils";
import {CancelButton} from "@/app/create-post/button";

export default function (){
    return (
        <>
            <div className="mx-auto flex flex-row justify-between p-4">
                <Button type="submit"> Post</Button>
                <CancelButton/>
            </div>

            <div>
                <ProDropdown/>
                <InputText/>
            </div>
            <div className="mx-auto flex flex-row pl-4 justify-left bg-[#D1BBA0]">
                <Button color={'primary'} type="submit" className="mr-4">Photo Icon</Button>
                <Button type="submit"> Cat&Dog Icon</Button>
            </div>


        </>
    )
}