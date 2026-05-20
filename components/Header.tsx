import Link from 'next/link'
import LogoIcon from './icons/LogoIcon'
import EmailIcon from './icons/EmailIcon'
import { SOCIAL_LINKS } from '@/content/constants'
import LinkedInIcon from './icons/LinkedInIcon'
import GitHubIcon from './icons/GitHubIcon'

export default function Header() {
    return (
        <nav className="flex items-center justify-between px-[2%] pt-7 pb-5 mx-auto">
            <div className="flex items-center gap-16">
                <Link href="/" className="text-[#C5CAD2] hover:text-[#9AC2FF] hover:scale-105 transition-all">
                    <LogoIcon />
                </Link>
                <div className="flex gap-8 text-[36px] font-instrument">
                    <Link href="/" className="hover:text-[#9AC2FF] hover:scale-105 transition-all">Home</Link>
                    <Link href="/projects" className="hover:text-[#9AC2FF] hover:scale-105 transition-all">Projects</Link>
                    <Link href="/about" className="hover:text-[#9AC2FF] hover:scale-105 transition-all">About</Link>
                </div>
            </div>
            <div className="flex items-end gap-10 text-white">
                <a href={SOCIAL_LINKS.email} className="hover:text-[#9AC2FF] hover:scale-105 transition-all"><EmailIcon /></a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#9AC2FF] hover:scale-105 transition-all"><LinkedInIcon /></a>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#9AC2FF] hover:scale-105 transition-all"><GitHubIcon /></a>
            </div>
        </nav>
    )
}
