import Content from "@/components/Content";
import EmailLogo from "@/components/EmailLogo";
import GithubLogo from "@/components/GithubLogo";
import InstagramLogo from "@/components/InstagramLogo";
import Layout from "@/components/Layout";
import React from "react";

export default function About() {
    return (
        <Layout title="About - Bagus B. Bagaskara">
            <Content>
                <Content.Grid>
                    <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                            <img
                                src="profile.jpg"
                                alt="Bagus Besar Bagaskara"
                                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                            />
                        </div>
                    </div>

                    <div className="lg:order-first lg:row-span-2">
                        <Content.Title>
                            I’m Bagus B. Bagaskara. I live in Depok Indonesia, where I built
                            Basazard.
                        </Content.Title>
                        <Content.Subtitle>
                            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                                <p>
                                    There are so many questions where I currently work, from July
                                    2022 I have worked in Astra Visteon Indonesia engaged in
                                    Automotive Manufacture. Starting January 3, 2023, I have decided
                                    that I will not work there anymore to seek experience in other
                                    fields.
                                </p>
                                <p>
                                    I also had time to freelance, help my close friends to build
                                    their application in various kinds of cases such as thesis and
                                    business.
                                </p>
                                <p>
                                    My current routine has 3 things, upscale my skill to the newest
                                    stack, build my own business, and finish my college. And if you
                                    want to talk about your current job, or want to talk about
                                    coding, and even life. You can directly dm me on Instagram,
                                    because I have to hear the experience of other people engaged in
                                    this field.
                                </p>
                                <p>
                                    Sorry if you ever dm me on Instagram and maybe the reply might
                                    take too long or even no reply. It's just because I disabled all
                                    social media notifications on my phone.
                                </p>
                            </div>
                        </Content.Subtitle>
                    </div>
                    <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                            <a
                                className="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500 mt-4"
                                href="https://instagram.com/basazard">
                                <InstagramLogo />
                                <span className="ml-4">Follow on Instagram</span>
                            </a>
                            <a
                                className="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500 mt-4"
                                href="https://github.com/basazard">
                                <GithubLogo />
                                <span className="ml-4">Follow on Github</span>
                            </a>
                            <hr className="my-3" />
                            <a
                                className="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500 mt-4"
                                href="mailto:bagas123ft@gmail.com">
                                <EmailLogo />
                                <span className="ml-4">bagas123ft@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </Content.Grid>
            </Content>
        </Layout>
    );
}
