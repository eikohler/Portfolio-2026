import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content/projects");

export type Project = {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    date: string;
    state?: string;
    coverImage?: string;
    liveUrl?: string;
    githubUrl?: string;
};

export function getAllProjects(): Project[] {
    const files = fs.readdirSync(contentDir);
    return files
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => {
            const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
            const { data } = matter(raw);
            return {
                slug: file.replace(".mdx", ""),
                title: data.title ?? "",
                description: data.description ?? "",
                tags: data.tags ?? [],
                date: data.date ?? "",
                state: data.state,
                coverImage: data.coverImage,
                liveUrl: data.liveUrl,
                githubUrl: data.githubUrl,
            } as Project;
        });
}

export function getProject(slug: string) {
    const raw = fs.readFileSync(path.join(contentDir, `${slug}.mdx`), "utf-8");
    return matter(raw);
}