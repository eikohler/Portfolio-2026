import { getAllProjects, type Project } from "@/lib/projects";
import ArrowIcon from "./icons/ArrowIcon";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";
import Button from "./ui/Button";

export default function FeaturedProjects() {
    let featuredProjects: Project[] = [];
    featuredProjects = getAllProjects().slice(0, 3);

    return (
        <section id="featured-projects" className="px-8 pb-24 max-w-6xl mx-auto">
            <h2 className="text-center text-[24px] font-semibold tracking-wider uppercase text-white mb-10">
                Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                {featuredProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>

            <div className="flex justify-center">
                <Button href="/projects">
                    See All Projects
                </Button>
            </div>
        </section>
    )
}
