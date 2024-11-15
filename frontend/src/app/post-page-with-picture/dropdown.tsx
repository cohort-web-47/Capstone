
"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";

export function ProDropdown() {
    return (
        <Navbar fluid rounded>

            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Pet1</Dropdown.Item>
                    <Dropdown.Item>Pet2</Dropdown.Item>
                    <Dropdown.Item>Pet3</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
        </Navbar>
    );
}
