import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Layout({ children, title }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>

            <div className="flex justify-center min-h-screen inset-0 sm:px-8">
                <div className="flex w-full max-w-7xl lg:px-8 md:px-4 sm:px-1">
                    <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-500/20">
                        <main>{children}</main>
                        <footer className="mt-10 p-10 border-t border border-zinc-100 dark:border-zinc-500/20">
                            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                                <div className="flex gap-7">
                                    <Link href="/about" legacyBehavior>
                                        <a className="font-medium text-sm text-zinc-800 dark:text-zinc-200 hover:text-blue-500 transition duration-200">
                                            About
                                        </a>
                                    </Link>
                                    <Link href="/projects" legacyBehavior>
                                        <a className="font-medium text-sm text-zinc-800 dark:text-zinc-200 hover:text-blue-500 transition duration-200">
                                            Projects
                                        </a>
                                    </Link>
                                </div>
                                <div>
                                    <p className="text-sm font-normal text-zinc-500/80 dark:text-zinc-100/20 ">
                                        2023 - Basazard - All right reserved
                                    </p>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}
