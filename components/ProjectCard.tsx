import Link from "next/link";
import ArrowIcon from "./icons/ArrowIcon";
import { type Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="rounded-2xl border border-zinc-800 overflow-hidden bg-[#0d1425] hover:border-zinc-600 transition-colors group"
        >
            {/* Screenshot placeholder */}
            <div className="h-48 bg-zinc-800 flex items-center justify-center text-zinc-600 text-sm">
                {project.title}
            </div>
            <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags?.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-zinc-400">
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-xs text-zinc-500 mb-1">{project.date}</p>
                <h3 className="text-blue-400 font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
                <span className="text-sm text-zinc-400 flex items-center gap-1 group-hover:text-white transition-colors">
                    View Project <ArrowIcon type="upright" />
                </span>
            </div>
        </Link>
    );
}