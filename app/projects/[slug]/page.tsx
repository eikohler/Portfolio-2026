import { getProject, getAllProjects } from "@/lib/projects";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
    const projects = getAllProjects();
    return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const { content, data } = getProject(slug);

    return (
        <article className="max-w-3xl mx-auto px-6 py-20 prose prose-invert">
            <h1>{data.title}</h1>
            <p className="text-zinc-400">{data.description}</p>
            <div className="flex gap-2 my-4">
                {data.liveUrl && (
                    <a href={data.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live →
                    </a>
                )}
                {data.githubUrl && (
                    <a href={data.githubUrl} target="_blank" rel="noopener noreferrer">
                        GitHub →
                    </a>
                )}
            </div>
            <hr className="border-zinc-800 my-8" />
            <MDXRemote source={content} />
        </article>
    );
}