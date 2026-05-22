import Link from "next/link";
import Image from "next/image";
import ArrowIcon from "./icons/ArrowIcon";
import { type Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="rounded-[10px_10px_20px_20px] relative border border-[#9AC2FF] bg-[#021633] hover:bg-[#001850] hover:scale-102 hover:shadow-[0_0_20px_rgba(154,194,255,0.5)] shadow-[0_0_0px_rgba(154,194,255,0.5)] transition-all duration-300 ease-in-out group"
        >
            <div className="rounded-[10px] overflow-hidden relative -left-px -top-px aspect-[1.4/1] w-[calc(100%+2px)] bg-white shadow-[0_4px_6px_0_rgba(0,0,0,0.2)]">
                {project.coverImage ? (
                    <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="h-full flex items-center justify-center text-black text-lg">
                        {project.title}
                    </div>
                )}
            </div>
            <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags?.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-0.5 rounded-[20px] bg-[#1B2D47] text-white">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex gap-2 mb-1 items-center">
                    <p className="text-[14px] text-white">{project.date}</p>
                    {project.state && (<>
                        <p className="text-[14px] text-[#B3B9C1] font-medium">•</p>
                        <p className="text-[14px] text-white">{project.state}</p>
                    </>)}
                </div>
                <h3 className="text-[#9AC2FF] font-semibold mb-2 text-[20px] group-hover:text-[#d9e8ff] transition-colors">
                    {project.title}
                </h3>
                <p className="text-[#CCD0D6] text-[]14px] mb-4">{project.description}</p>
                <span className="text-[16px] text-[#9AC2FF] font-medium flex items-center gap-2 group-hover:text-[#d9e8ff] transition-colors">
                    View Project <ArrowIcon type="upright" />
                </span>
            </div>
        </Link>
    );
}