import Content from "@/components/Content";
import Layout from "@/components/Layout";
import React from "react";

export default function RNDTask() {
    return (
        <Layout title="RND Task Management">
            <Content>
                <Content.Title>RND Task Management</Content.Title>
                <Content.Subtitle>
                    RND department which wants to monitor what everyone is doing in the RND
                    department, in which there is a feature of sending tasks to fellow RND
                    colleagues, viewing performance based on completed tasks, and viewing what
                    meeting schedule is running.
                </Content.Subtitle>
                <Content.Grid>
                    <img src="/rnd_task/1.png" alt="" />
                    <img src="/rnd_task/2.png" alt="" />
                    <img src="/rnd_task/3.png" alt="" />
                    <img src="/rnd_task/4.png" alt="" />
                </Content.Grid>
            </Content>
        </Layout>
    );
}
