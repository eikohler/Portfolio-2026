import { getAllProjects, type Project } from "@/lib/projects";
import ArrowIcon from "./icons/ArrowIcon";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";

export default function FeaturedProjects() {
    let featuredProjects: Project[] = [];
    try {
        featuredProjects = getAllProjects().slice(0, 3);
    } catch {
        // content dir may not exist yet
    }

    return (
        <section className="px-8 pb-24 max-w-6xl mx-auto">
            <h2 className="text-center text-sm font-semibold tracking-widest uppercase text-white mb-10">
                Featured Projects
            </h2>

            {featuredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            ) : (
                // Placeholder cards when no MDX files exist yet
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="rounded-2xl border border-zinc-800 overflow-hidden bg-[#0d1425]">
                            <div className="h-48 bg-zinc-800 animate-pulse" />
                            <div className="p-5">
                                <div className="flex gap-2 mb-3">
                                    {["Next JS", "TypeScript", "SASS"].map((tag) => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-400">{tag}</span>
                                    ))}
                                </div>
                                <p className="text-xs text-zinc-500 mb-1">July, 2024 • Ongoing</p>
                                <h3 className="text-blue-400 font-semibold mb-2">Ticketing Platform</h3>
                                <p className="text-zinc-400 text-sm mb-4">A minimalist workout tracker with custom routines.</p>
                                <span className="text-sm text-zinc-400 flex items-center gap-1">
                                    View Project <ArrowIcon type="down" />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="flex justify-center">
                <Link
                    href="/projects"
                    className="px-8 py-3 rounded-full border border-white text-white hover:bg-white hover:text-[#0a0f1e] transition-colors text-sm font-medium"
                >
                    See All Projects
                </Link>
            </div>
        </section>
    )
}
