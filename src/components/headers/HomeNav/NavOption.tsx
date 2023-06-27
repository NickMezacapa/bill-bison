import Link from 'next/link';
import type { NavLink } from '~/utils/constants';

interface NavOptionProps extends NavLink {
    alt?: string;
    aria?: string;
    selected?: boolean;
}

const NavOption = ({ label, href, selected }: NavOptionProps) => {
    return (
        <Link href={href} className={`flex items-center space-x-1 border-transparent delay-200 hover:delay-[250ms] cursor-pointer ${selected ? 'text-green-400' : ''} `}>
            <p className='hidden text-sm sm:inline-flex'>{label}</p>
        </Link>
    );
};

export default NavOption;
