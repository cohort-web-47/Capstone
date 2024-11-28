"use client";

import { Avatar, Dropdown } from "flowbite-react";

export function ProfileDropdown() {
    return (
        <Dropdown
            label={<Avatar alt="User settings" img="https://picsum.photos/200/100" rounded />}

            arrowIcon={false}
            inline
        >
            <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Pet 1</Dropdown.Item>
            <Dropdown.Item>Pet 2</Dropdown.Item>
            <Dropdown.Item>Pet 3</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
    );
}







//
// "use client";
//
// import { Avatar, Dropdown, Navbar } from "flowbite-react";
//
// export function ProDropdown() {
//     return (
//         <Navbar fluid rounded className="bg-themeBackground">
//
//             <div className="flex md:order-2">
//                 <Dropdown
//                     arrowIcon={false}
//                     inline
//                     label={
//                         <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
//                     }
//                 >
//                     <Dropdown.Header>
//                         <span className="block text-sm">Bonnie Green</span>
//                         <span className="block truncate text-sm font-medium">name@flowbite.com</span>
//                     </Dropdown.Header>
//                     <Dropdown.Item>Pet1</Dropdown.Item>
//                     <Dropdown.Item>Pet2</Dropdown.Item>
//                     <Dropdown.Item>Pet3</Dropdown.Item>
//                 </Dropdown>
//                 <Navbar.Toggle />
//             </div>
//         </Navbar>
//     );
// }
