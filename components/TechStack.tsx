import { TECH_STACK } from '@/content/constants'

export default function TechStack() {
    return (
        <section className="px-8 pb-32 max-w-4xl mx-auto text-center">
            <h2 className="text-lg font-semibold mb-8">Tech I enjoy working with</h2>
            <div className="flex flex-wrap justify-center gap-3">
                {TECH_STACK.map((tech) => (
                    <span
                        key={tech}
                        className="px-4 py-2 rounded-full border border-zinc-600 text-sm text-zinc-300 hover:border-zinc-400 transition-colors"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </section>
    )
}
