import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import NavOption from './NavOption';
import { NAV_OPTION_LINKS, type NavLink } from '~/utils/constants';

interface NavLinksProps {
    active: string;
    callBack: (option: string) => void;
}

interface NavOption extends NavLink {
    alt?: string;
    aria?: string;
    selected?: boolean;
}

export function NavLinks({ active, callBack }: NavLinksProps) {
    const [hoveredOptionIndex, setHoveredOptionIndex] = useState<number | null>(null);

    return NAV_OPTION_LINKS.map((link: NavOption, index: number) => {
        return (
            <button
                key={index}
                className='relative px-3 py-2 rounded-lg text-inherit transition-colors delay-200 hover:text-green-400 hover:delay-[250ms] outline:focus-none'
                onMouseEnter={() => setHoveredOptionIndex(index)}
                onMouseLeave={() => setHoveredOptionIndex(null)}
                onClick={() => callBack(link.label)}>
                <AnimatePresence>
                    {hoveredOptionIndex === index && (
                        <motion.span 
                            className='absolute inset-0 rounded-lg bg-[#c8c7ca] dark:bg-[#39393cb1]'
                            layoutId='hoverBackground'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 0.25, delay: 0.35 } }}
                            exit={{
                                opacity: 0,
                                transition: { duration: 0.15, delay: 0.2 },
                            }}
                        />
                    )}
                </AnimatePresence>
                <span className='relative z-10'>
                    <NavOption 
                        key={index}
                        label={link.label}
                        href={link.href} 
                        selected={active === link.label ? true : link.selected}
                        aria={`${link.label} results`} 
                        alt={`${link.label} results`} />
                </span>
            </button>
        );
    })}
