import Content from "@/components/Content";
import Layout from "@/components/Layout";
import React from "react";

export default function Avis() {
    return (
        <Layout title="Astra Integrated System">
            <Content>
                <Content.Title>Astra Integrated System</Content.Title>
                <Content.Subtitle>
                    In this application, Project Manager and Advanced Manufacture Engineering want
                    to give tasks to everyone related to the ongoing project, monitor the ongoing
                    tasks, determine the due date of each event in each project. The hope is that
                    with this application there will be no more tasks that are over due because
                    there are notifications on the web and also emails of employees who are given
                    tasks.
                </Content.Subtitle>
                <Content.Grid>
                    <img src="/avis/1.png" alt="" />
                    <img src="/avis/2.png" alt="" />
                    <img src="/avis/3.png" alt="" />
                    <img src="/avis/4.png" alt="" />
                </Content.Grid>
            </Content>
        </Layout>
    );
}
