import Content from "@/components/Content";
import GithubLogo from "@/components/GithubLogo";
import InstagramLogo from "@/components/InstagramLogo";
import Layout from "@/components/Layout";
import React from "react";

export default function Home() {
    return (
        <Layout title="Bagus B. Bagaskara - Software engineer, coffee enthusiast, cat lovers, and indi freelancer.">
            <Content>
                <Content.Title>
                    <Content.Span>
                        Software engineer, coffee enthusiast, cat lovers, and indi freelancer.
                    </Content.Span>
                </Content.Title>
                <Content.Subtitle>
                    I’m Bagus B. Bagaskara. I live in Depok Indonesia, where I built Basazard.
                    <div className="mt-6 flex gap-6">
                        <a href="https://instagram.com/basazard" className="">
                            <InstagramLogo />
                        </a>
                        <a href="https://github.com/basazard" className="">
                            <GithubLogo />
                        </a>
                    </div>
                </Content.Subtitle>
            </Content>
            <div className="relative flex mt-16 sm:mt-20">
                <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                    <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                        <img
                            src="/me.JPG"
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                    <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
                        <img
                            src="/cat.PNG"
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                    <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                        <img
                            src="/mom.JPG"
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                    <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
                        <img
                            src="/profile.jpg"
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
