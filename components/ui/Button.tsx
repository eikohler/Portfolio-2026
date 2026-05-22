import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
    href: string
    children?: React.ReactNode
    className?: string
}

const baseStyles = "flex items-center gap-2 px-10 min-w-[210px] justify-center py-2.5 rounded-full border border-white text-black bg-white hover:scale-105 active:scale-98 transition-all hover:shadow-[0_0_15px_rgba(154,194,255,0.5)] shadow-[0_0_0px_rgba(154,194,255,0.5)] duration-200 ease-in-out text-lg"

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