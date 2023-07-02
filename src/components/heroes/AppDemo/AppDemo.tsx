import Image from 'next/image'
import { AiFillCheckCircle } from 'react-icons/ai'

const AppDemo = () => {
  return (
    <section className='w-full p-5 mt-4 mx-auto' aria-label='SplitMe demo'>
        <h1 className='text-lg text-center'>Receipt<span className='text-gray-400'> - Emily&apos;s 32nd Birthday</span></h1>
        <p className='text-gray-600 text-sm mx-auto text-center my-2'>June 29, 2024</p>
        <div className='w-[80%] mx-auto border-b border-[#d4d4d45c] mt-4' />
        <h2 className='text-sm font-thin px-2 mt-4'>Party Members:</h2>
        <ul className='w-full mt-2'>
            <li className='w-full border-b border-[#d4d4d45c] px-2 py-4'>
                <div className='w-full flex items-center justify-between'>
                    <div className='w-[50%] h-full flex items-center justify-between'>
                        <Image src='/assets/avatar-hero-1.png' alt='SplitMe User' width={40} height={40} className='rounded-full' />
                        <h3 className='text-blue-400 text-xs'>@johnsmith11</h3>
                    </div>
                    <div className='w-1/3 flex items-center justify-end text-green-500'>
                        <AiFillCheckCircle />
                        <span className='ml-1 text-xs'>paid</span>
                    </div>
                </div>
                <div className='w-full px-12 text-xs text-gray-600 flex flex-col ml-[0.35rem] items-left justify-start pb-1'>
                    <p>3pc Chicken Tender - $9.23</p>
                    <p>Diet Coke (x2) - $2.80</p>
                    <p>Total: $14.84</p>
                    <p className='mt-3 text-[#eae8ed]'>Total with Tip: $17.81</p>
                </div>
            </li>
            <li className='w-full border-b border-[#d4d4d45c] px-2 py-4'>
                <div className='w-full flex items-center justify-between'>
                    <div className='w-[50%] h-full flex items-center justify-between'>
                        <Image src='/assets/avatar-hero-1.png' alt='SplitMe User' width={40} height={40} className='rounded-full' />
                        <h3 className='text-blue-400 text-xs mr-[0.25rem]'>@rachelwillz</h3>
                    </div>
                    <div className='w-1/3 flex items-center justify-end text-green-500'>
                        <AiFillCheckCircle />
                        <span className='ml-1 text-xs'>paid</span>
                    </div>
                </div>
                <div className='w-full px-14 text-xs text-gray-600 flex flex-col items-left justify-start pb-1'>
                    <p>Margherita Pizza - $14.00</p>
                    <p>Island IPA - $4.50</p>
                    <p>Total: $18.50</p>
                    <p className='mt-3 text-[#eae8ed]'>Total with Tip: $22.20</p>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default AppDemo
