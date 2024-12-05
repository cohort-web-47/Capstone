import {Button, Label, Select, TextInput} from "flowbite-react";


type Props = {
    register:any
}

export function Dog(props:Props) {
    const {register} = props
    return (
        <>

                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="petname" value="Pet Name"/>
                    </div>
                    <TextInput id="petname" type="PetModel Name" placeholder='"Pet Name"' required shadow/>
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="DogBreed" value="Dog Breed"/>
                    </div>
                    <TextInput id="DogBreed" type="DogBreed" placeholder='"Dog Breed"' required shadow/>
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="DogSize" value="Size of your dog"/>
                    </div>
                    <Select id="DogSize" required>
                        <option>Size of your dog</option>
                        <option>Tea Cup</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </Select>
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="Personality" value="Personality of your dog"/>
                    </div>
                    <Select id="Personality" required>
                        <option>Personality</option>
                        <option>Calm</option>
                        <option>Playful</option>
                        <option>Excited</option>
                        <option>Grumpy</option>
                    </Select>
                </div>



        </>
    )
}