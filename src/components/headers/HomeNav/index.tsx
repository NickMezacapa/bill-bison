import { useState } from 'react';
import TextLogo from '~/components/logos/TextLogo'
import { NavLinks } from './NavLinks'

const HomeNav = () => {
    const [activeOption, setActiveOption] = useState<string>('');
    const handleOptionClick = (option: string) => {
        setActiveOption(option);
    }
  return (
    <header className='h-[8%] w-full py-10 absolute left-0'>
        <nav className='w-full h-full relative flex items-center justify-between p-2 sm:p-8'>
            <div className='flex items-center space-x-20 w-[65%] justify-between max-w-2xl'>
                <TextLogo />
                <div className='hidden md:flex items-center min-w-[320px] justify-between w-full'>
                    <NavLinks active={activeOption} callBack={handleOptionClick} />
                </div>
            </div>
            <div>
                <button className='bg-[#eae8ed] text-[#1d1d1f] rounded-lg cursor-pointer transition ease hover:scale-[0.99] hover:bg-[#202125] hover:text-[#eae8ed] hover:border hover:border-green-500 duration-300 px-3 py-2 mr-2 text-sm'>Get Started</button>
            </div>
        </nav>
    </header>
  )
}

export default HomeNav
