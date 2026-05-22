import Button from "./ui/Button";
import ArrowIcon from "./icons/ArrowIcon";

export default function Hero() {
    return (
        <section className="text-center px-6 pt-20 pb-32 max-w-7xl mx-auto">
            <h1 className="text-[32px] font-bold mb-8 tracking-wide">
                Hi, I am <span className="hero-name relative">Eric Kohler</span>
            </h1>
            <p className="text-2xl leading-relaxed mb-10 font-semibold tracking-[0.5px]">
                A creative{" "}
                <span className="bg-[#0C2D5F] px-2 py-0.5 rounded-[5px] font-medium">
                    Frontend Developer
                </span>{" "}
                specializing in React and TypeScript.
                <br />
                I turn complex problems into sleek, user-friendly interfaces.
            </p>
            <div className="flex items-center justify-center gap-4">
                <Button href="#featured-projects">
                    See Projects <ArrowIcon type='down' />
                </Button>
                <Button href="/about" className="bg-transparent border-[#9AC2FF] text-white">
                    Say &ldquo;Hello!&rdquo;
                </Button>
            </div>
        </section>
    )
}
