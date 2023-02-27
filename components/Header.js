import Link from "next/link";
import React from "react";
import Container from "./Container";
import Navbar from "./Navbar";
import ToggleDark from "./ToggleDark";

export default function Header() {
    return (
        <header className="top-0 z-10 h-16 pt-6">
            <div className="flex relative gap-4">
                <div className="flex flex-1">
                    <Link href="/">
                        <img
                            src="profile.jpg"
                            alt=""
                            className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-10 w-10"
                        />
                    </Link>
                </div>
                <div className="flex flex-1 justify-end md:justify-center">
                    <Navbar />
                </div>
                <div className="flex justify-end md:flex-1">
                    <div className="h-10">
                        <ToggleDark />
                    </div>
                </div>
            </div>
        </header>
    );
}
