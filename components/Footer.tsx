import { SOCIAL_LINKS } from '@/content/constants'
import LogoIcon from './icons/LogoIcon'
import Link from 'next/link'
import EmailIcon from './icons/EmailIcon'
import LinkedInIcon from './icons/LinkedInIcon'
import GitHubIcon from './icons/GitHubIcon'

export default function Footer() {
    return (
        <footer className="pb-12">
            <div className="flex items-end justify-center gap-6 text-[#C5CAD2]">
                <Link href="/" className="hover:text-white hover:scale-105 transition-all"><LogoIcon /></Link>
                <a href={SOCIAL_LINKS.email} className="hover:text-white hover:scale-105 transition-all"><EmailIcon /></a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-105 transition-all"><LinkedInIcon /></a>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-105 transition-all"><GitHubIcon /></a>
            </div>
        </footer>
    )
}
