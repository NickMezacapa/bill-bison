import TextLogo from '~/components/logos/TextLogo'

const HomeNav = () => {
  return (
    <header className='h-[8%] w-full py-10 absolute left-0'>
        <nav className='w-full h-full relative flex items-center justify-between p-2 sm:p-8 max-w-6xl'>
            <div className='flex items-center space-x-20 w-[65%] justify-between'>
                <TextLogo />
                <div className='hidden sm:flex items-center justify-between w-full'>
                    {/* nav options */}
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
