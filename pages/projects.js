import Content from "@/components/Content";
import Layout from "@/components/Layout";
import React from "react";

export default function Projects() {
    return (
        <Layout title="Projects">
            <Content>
                <Content.Title>
                    <Content.Span>
                        Things I’ve made trying to put my dent in the universe.
                    </Content.Span>
                </Content.Title>
                <Content.Subtitle>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                        <p>
                            I’ve worked on tons of little projects over the years but these are the
                            ones that I’m most proud of. Many of them are open-source, so if you see
                            something that piques your interest, check out the code and contribute
                            if you have ideas for how it can be improved.
                        </p>
                    </div>
                </Content.Subtitle>
            </Content>
        </Layout>
    );
}
