
import ProfileTab from "@/components/ProfileTab";
import {DropdownButton} from "@/components/Dropdown";



export default function SearchPage() {
    return (
        <>
            <div id="header"
                 className="w-screen h-20 border-2 border-black bg-gray-200 flex items-center justify-center">
                <h1 className="text-3xl">HEADER</h1>
            </div>
                <DropdownButton />
            <div id="container" className="flex">


                <div className="hidden md:flex md:bg-black md:w-1/3 md:h-screen"></div>
                <div id="mobile-view" className="h-screen w-screen bg-background flex flex-col md:hidden">

                    <input type="text" placeholder="Search..." className="w-2/3 self-center my-10 bg-search"/>
                   <h1 className={"text-3xl"}>Button</h1>



                    <div id={"label"} className={"bg-header w-2/3 py-4 self-center mb-10"}>
                        <p className={"text-3xl text-center"}>Popular Post</p>
                    </div>
                    <div id="popular-post"
                         className="w-11/12 h-1/3 bg-gray-200 self-center border-black border-2">POST
                    </div>
                    <div className="w-1/2 h-20 bg-profile my-6 self-center flex gap-20 items-center justify-center">

                        <p className={"text-2xl"}>Connections</p>

                    </div>

                    <ProfileTab/>
                    <ProfileTab/>
                    <ProfileTab/>
                </div>
                <div className="hidden md:flex md:bg-background md:w-1/3 md:h-screen md:flex-col">
                    <input type="text" placeholder="Search..." className="w-2/3 self-center my-10 bg-search"/>
                    <div id={"label"} className={"bg-header w-2/3 py-4 self-center mb-10"}>
                        <p className={"text-3xl text-center"}>Popular Post</p>
                    </div>
                    <div id="popular-post"
                         className="w-11/12 h-1/3 bg-gray-200 self-center border-black border-2 mb-6">POST
                    </div>
                    <div id="popular-post"
                         className="w-11/12 h-1/3 bg-gray-200 self-center border-black border-2 mb-6">POST
                    </div>


                </div>
                <div className="hidden md:flex md:w-1/3 md:h-screen md:bg-background md:flex-col">
                    <div className="w-1/2 h-20 bg-profile my-6 self-center flex gap-20 items-center justify-center">

                        <p className={"text-2xl"}>Connections</p>

                    </div>

                    <ProfileTab/>
                    <ProfileTab/>
                    <ProfileTab/>
                </div>

            </div>
            <div id="navbar"
                 className="w-screen h-20 border-2 border-black bg-gray-200 flex items-center justify-center">
                <h1 className="text-3xl">NAVBAR</h1>
            </div>
        </>
    )
}