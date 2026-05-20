import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
    href: string
    children?: React.ReactNode
    className?: string
}

const baseStyles = "flex items-center gap-2 px-10 py-2.5 rounded-full border border-white text-black bg-white hover:scale-105 transition-all text-lg"

export default function Button({
    href,
    children = "See Projects",
    className,
}: ButtonProps) {
    return (
        <Link href={href} className={cn(baseStyles, className)}>
            {children}
        </Link>
    )
}