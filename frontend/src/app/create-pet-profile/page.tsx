import {Button, Checkbox, Label, TextInput} from "flowbite-react";
import Link from "next/link";

export default function () {
    return (
        <>
            <div>
                <img className="rounded-full w-36 h-36 mx-auto" src={"https://placehold.co/400"} alt="placeholder"/>
            </div>
            <form className="flex max-w-md flex-col gap-4 mx-auto">
                <h3>Create Pet Profile</h3>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="petname" value="Pet Name"/>
                    </div>
                    <TextInput id="petname" type="Pet Name" placeholder='"Pet Name"' required shadow/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="breed" value="Dog Breed"/>
                    </div>
                    <TextInput id="breed" type="Dog Breed" placeholder='"Poodle"' required shadow/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="size" value="Dog Size"/>
                    </div>
                    <TextInput id="size" type="Dog Size" placeholder='"Small"' required shadow/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="personality" value="Personality"/>
                    </div>
                    <TextInput id="personality" type="Personality" placeholder='"Excited"' required shadow/>
                </div>
                <Button type="submit"> Edit Profile | Save </Button>
            </form>
        </>
    )
}