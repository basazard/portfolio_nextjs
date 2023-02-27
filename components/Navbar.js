import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Navbar() {
    const navs = [
        { title: "About", path: "/about" },
        { title: "Projects", path: "/projects" },
    ];
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="pointer-events-auto md:hidden">
                <button
                    onClick={toggleMenu}
                    className="absolute top-0 right-20 rounded-lg bg-zinc-100 dark:bg-zinc-800 dark:ring-1 dark:ring-zinc-800 hover:dark:bg-zinc-800/20 hover:bg-zinc-100/70 focus:outline-none focus:ring-2 focus:ring-gray-200 px-3 py-2 text-sm font-medium">
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"></path>
                    </svg>
                </button>
                <ul
                    className={`${
                        isOpen ? "block" : "hidden"
                    } top-10 w-[220px] sm:w-[370px] bg-zinc-50 dark:bg-black rounded-lg border dark:border-zinc-800 p-3 relative z-20 `}>
                    {navs.map((nav, index) => (
                        <li key={index} className="flex flex-col justify-center p-3">
                            <Link
                                href={nav.path}
                                className="bg-zinc-100 dark:bg-zinc-900 rounded-lg px-3 py-2">
                                {nav.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <nav className="pointer-events-auto hidden md:block">
                <ul className="flex rounded-full bg-white/90 dark:bg-zinc-800/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:text-zinc-200 dark:ring-white/10">
                    {navs.map((nav, index) => (
                        <li key={index}>
                            <Link
                                href={nav.path}
                                className={
                                    router.pathname == nav.path
                                        ? "relative block px-3 py-2 text-blue-500"
                                        : "relative block px-3 py-2 transition hover:text-blue-500 dark:hover:text-blue-400 dark:text-zinc-200"
                                }>
                                {nav.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
