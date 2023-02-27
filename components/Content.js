import React from "react";
import Container from "./Container";
import Header from "./Header";

export default function Content({ children }) {
    return (
        <Container>
            <div className="relative px-4 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <Header />
                    <div className="py-8"></div>
                    {children}
                </div>
            </div>
        </Container>
    );
}

function Title({ children }) {
    return (
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {children}
        </h1>
    );
}

function Subtitle({ children }) {
    return <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400">{children}</div>;
}

function Grid({ children }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-5 lg:grid-rows-2">
            {children}
        </div>
    );
}

function Span({ children }) {
    return <div className="max-w-2xl">{children}</div>;
}

function ProjectCard({ children }) {
    return (
        <div className="mt-5 w-max-2xl rounded-lg bg-zinc-50 dark:bg-black">
            <div className="flex flex-col p-5">{children}</div>
        </div>
    );
}

function ProjectTitle({ children }) {
    return <h1 className="font-medium text-lg text-zinc-800 dark:text-zinc-100">{children}</h1>;
}

function ProjectSubtitle({ children }) {
    return <p className="text-sm mt-4 text-zinc-600 dark:text-zinc-400">{children}</p>;
}

function ProjectLink({ children }) {
    return (
        <a className="font-light mt-3 text-zinc-500" href={children}>
            {children}
        </a>
    );
}

function ReadMore({ children }) {
    return (
        <a className="font-light mt-3 text-zinc-800 dark:text-zinc-100 hover:text-zinc-900 hover:dark:text-zinc-500" href={children}>
            Read More
        </a>
    );
}

Content.Title = Title;
Content.Subtitle = Subtitle;
Content.Grid = Grid;
Content.Span = Span;
Content.ProjectCard = ProjectCard;
Content.ProjectTitle = ProjectTitle;
Content.ProjectSubtitle = ProjectSubtitle;
Content.ProjectLink = ProjectLink;
Content.ReadMore = ReadMore;
