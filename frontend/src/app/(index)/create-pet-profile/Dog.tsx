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
                    <TextInput {...register('petName')} id="petname" type="text" placeholder='"Pet Name"' required shadow/>
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="DogBreed" value="Dog Breed"/>
                    </div>
                    <TextInput {...register('petBreed')} id="DogBreed" type="DogBreed" placeholder='"Dog Breed"' required shadow/>
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="DogSize" value="Size of your dog"/>
                    </div>
                    <Select {...register('petSize')} id="DogSize" required>
                        <option value={'Size of your dog'}>Size of your dog</option>
                        <option value={'Tea Cup'}>Tea Cup</option>
                        <option value={'Small'}>Small</option>
                        <option value={'Medium'}>Medium</option>
                        <option value={'Large'}>Large</option>
                    </Select>
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="Personality" value="Personality of your dog"/>
                    </div>
                    <Select {...register('petPersonality')} id="Personality" required>
                        <option value={'Personality'}>Personality</option>
                        <option value={'Calm'}>Calm</option>
                        <option value={'Playful'}>Playful</option>
                        <option value={'Excited'}>Excited</option>
                        <option value={'Grumpy'}>Grumpy</option>
                    </Select>
                </div>



        </>
    )
}