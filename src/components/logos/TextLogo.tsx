import Link from 'next/link';

const TextLogo = () => (
    <Link href='/' aria-label='SplitMe logo' className='h-full flex items-center p-4 cursor-pointer transition ease hover:scale-[0.985]'>
        <span className='font-semibold text-[#eae8ed] tracking-tight leading-1 text-3xl'>Sp/it</span>
        <span className='tracking-tight leading-1 text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-green-600 via-green-500 to-green-200'>Me</span>
    </Link>
);

export default TextLogo
