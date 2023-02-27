import Content from "@/components/Content";
import Layout from "@/components/Layout";
import React from "react";

export default function Playground() {
    return (
        <Layout title="Playground">
            <Content>
                <Content.Title>
                    <Content.Span>
                        Write about my opinion about computer program, code, design, and technique
                    </Content.Span>
                </Content.Title>
                <Content.Subtitle>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                        <p>
                            All of my long-form thoughts on programming, design, and more, collected
                            in chronological order.
                        </p>
                    </div>
                </Content.Subtitle>
            </Content>
        </Layout>
    );
}
