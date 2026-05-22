export default function TechStack() {
    const techClass = "px-4 py-2 rounded-[5px] bg-[#021633] text-[24px] font-medium text-[#9AC2FF]";

    return (
        <section className="px-8 pb-32 max-w-7xl mx-auto text-center">
            <h2 className="text-[24px] font-semibold mb-8 tracking-[0.2px]">Tech I enjoy working with</h2>
            <div className="flex flex-wrap justify-center gap-3">
                <span
                    className={techClass + " rotate-[-5.39deg]"}
                >
                    Next JS
                </span>
                <span
                    className={techClass + " rotate-[2.59deg]"}
                >
                    TypeScript
                </span>
                <span
                    className={techClass + " rotate-[-4.35deg]"}
                >
                    React Native
                </span>
                <span
                    className={techClass + " rotate-[5.58deg]"}
                >
                    Node
                </span>
                <span
                    className={techClass + " rotate-[-4.6deg]"}
                >
                    WordPress
                </span>
                <span
                    className={techClass + " rotate-[4.12deg]"}
                >
                    CI/CD
                </span>
                <span
                    className={techClass + " rotate-[-2.93deg]"}
                >
                    SASS
                </span>
            </div>
        </section>
    )
}
