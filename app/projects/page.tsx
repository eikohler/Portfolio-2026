import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export default function ProjectsPage() {
    const projects = getAllProjects();

    return (
        <main className="max-w-3xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-zinc-400 mb-12">A collection of things I've built.</p>

            <div className="flex flex-col gap-8">
                {projects.map((project) => (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-colors"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h2 className="text-xl font-semibold group-hover:text-white transition-colors">
                                    {project.title}
                                </h2>
                                <p className="text-zinc-400 mt-2 text-sm">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tags?.map((tag: string) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <span className="text-zinc-600 text-sm shrink-0">{project.date}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}