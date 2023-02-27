import Content from "@/components/Content";
import Layout from "@/components/Layout";
import React from "react";

export default function Projects() {
    return (
        <Layout title="Projects - Bagus B. Bagaskara">
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
                <Content.Grid>
                    <Content.ProjectCard>
                        <Content.ProjectTitle>SmartPJU</Content.ProjectTitle>
                        <Content.ProjectSubtitle>
                            This project was made to make it easier for users to monitor their
                            surroundings based on data sent by sensors embedded in street lights,
                            the data sent is visualized with graphics on the website.
                        </Content.ProjectSubtitle>
                        <Content.ProjectLink>https://smartpju-ce25d.web.app/</Content.ProjectLink>
                    </Content.ProjectCard>

                    <Content.ProjectCard>
                        <Content.ProjectTitle>TumbuhSenandika</Content.ProjectTitle>
                        <Content.ProjectSubtitle>
                            "Tumbuh Senandika" is a platform that connects professionals with
                            clients who need guidance, psychological assistance or training.
                            Professionals at "Tumbuh Senandika" are psychologists, counselors,
                            mentors and also coaches who have received professional certification
                            and/or previous training.
                        </Content.ProjectSubtitle>
                        <Content.ProjectLink>https://tumbuh-senandika.com/</Content.ProjectLink>
                    </Content.ProjectCard>

                    <Content.ProjectCard>
                        <Content.ProjectTitle>Astra Visteon Integrated System</Content.ProjectTitle>
                        <Content.ProjectSubtitle>
                            In this application, Project Manager and Advanced Manufacture
                            Engineering want to give tasks to everyone related to the ongoing
                            project, monitor the ongoing tasks, determine the due date of each event
                            in each project. The hope is that with this application there will be no
                            more tasks that are over due because there are notifications on the web
                            and also emails of employees who are given tasks.
                        </Content.ProjectSubtitle>
                        <Content.ReadMore>/projects/avis</Content.ReadMore>
                    </Content.ProjectCard>
                    <Content.ProjectCard>
                        <Content.ProjectTitle>QR Checksheet</Content.ProjectTitle>
                        <Content.ProjectSubtitle>
                            Engineering Department which involves checking the condition of the
                            machines on a daily basis that are running on the production line, where
                            each machine has been tagged with a QR label, automatically, so that the
                            operator can more easily check.
                        </Content.ProjectSubtitle>
                        <Content.ReadMore>/projects/qr_checksheet</Content.ReadMore>
                    </Content.ProjectCard>
                    <Content.ProjectCard>
                        <Content.ProjectTitle>RND Task Management</Content.ProjectTitle>
                        <Content.ProjectSubtitle>
                            RND department which wants to monitor what everyone is doing in the RND
                            department, in which there is a feature of sending tasks to fellow RND
                            colleagues, viewing performance based on completed tasks, and viewing
                            what meeting schedule is running.
                        </Content.ProjectSubtitle>
                        <Content.ReadMore>/projects/rnd_task</Content.ReadMore>
                    </Content.ProjectCard>
                    <Content.ProjectCard>
                        <Content.ProjectTitle>
                            BOM, Customer Drawing, Visteon Drawing
                        </Content.ProjectTitle>
                        <Content.ProjectSubtitle>
                            RND department used to make it easier for every employee to retrieve the
                            file that has been uploaded by "Product Development" and is intended for
                            which department can download it. The contents of the file are about the
                            company's bill of materials and confidential drawings.
                        </Content.ProjectSubtitle>
                        <Content.ReadMore>/projects/bom_download</Content.ReadMore>
                    </Content.ProjectCard>
                </Content.Grid>
            </Content>
        </Layout>
    );
}
