import React from 'react'

interface Props {
    title: string;
}

const MagicBadge = ({ title }: Props) => {
    return (
        <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3fa1d8_0%,#a4d6e1_50%,#3fa1d8_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-4 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                {title}
            </span>
        </div>
    )
};

export default MagicBadge


/**
 * 
 * 6d28d9 - hsl(263 70% 50.4%)
 * d8b4fe - hsl(269 97.4% 85.1%)
 */