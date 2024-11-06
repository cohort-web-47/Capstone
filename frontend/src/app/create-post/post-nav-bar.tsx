'use client'
import {Navbar} from "flowbite-react";
import Link from "next/link";

export function PostNavBar() {
    return (
        <nav className="bg-navbar">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <button type="button"
                        className="text-font bg-background font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Cancel
                </button>

                <button type="button"
                        className="text-font bg-background font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"> Post
                </button>
            </div>
        </nav>

    )
}