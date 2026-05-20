import { SOCIAL_LINKS } from '@/content/constants'
import LogoIcon from './icons/LogoIcon'
import Link from 'next/link'
import EmailIcon from './icons/EmailIcon'
import LinkedInIcon from './icons/LinkedInIcon'
import GitHubIcon from './icons/GitHubIcon'

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 py-8">
            <div className="flex items-center justify-center gap-6 text-zinc-400">
                <Link href="/" className="hover:text-white transition-colors"><LogoIcon /></Link>
                <a href={SOCIAL_LINKS.email} className="hover:text-white transition-colors"><EmailIcon /></a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><LinkedInIcon /></a>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><GitHubIcon /></a>
            </div>
        </footer>
    )
}
