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

function Grid({ children }){
    return <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:grid-rows-2">{children}</div>
}

function Span({ children }){
    return <div className="max-w-2xl">{children}</div>
}

Content.Title = Title;
Content.Subtitle = Subtitle;
Content.Grid = Grid;
Content.Span = Span;
